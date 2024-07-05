document.getElementById('splitButton').addEventListener('click', async () => {
    const pdfFile = document.getElementById('pdfFile').files[0];
    const txtFile = document.getElementById('txtFile').files[0];

    if (!pdfFile || !txtFile) {
        alert('Please upload both PDF and TXT files.');
        return;
    }

    const pdfBytes = await readFileAsArrayBuffer(pdfFile);
    const txtContent = await readFileAsText(txtFile);
    
    const pdfDoc = await PDFLib.PDFDocument.load(pdfBytes);
    const lines = txtContent.trim().split('\n');

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
    const zip = new JSZip();
    const pdfFiles = [];

    for (const line of lines) {
        const [name, pageNumberStr] = line.split(',');
        const pageNumber = parseInt(pageNumberStr.trim()) - 1;

        if (isNaN(pageNumber) || pageNumber < 0 || pageNumber >= pdfDoc.getPageCount()) {
            outputDiv.innerHTML += `<p class="text-danger">Invalid page number for ${name}</p>`;
            continue;
        }

        const newPdfDoc = await PDFLib.PDFDocument.create();
        const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [pageNumber]);
        newPdfDoc.addPage(copiedPage);

        const pdfBytes = await newPdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${name}.pdf`;
        link.textContent = `Download ${name}.pdf`;
        link.className = 'btn btn-link';
        outputDiv.appendChild(link);
        outputDiv.appendChild(document.createElement('br'));

        pdfFiles.push({ name: `${name}.pdf`, bytes: pdfBytes });
        zip.file(`${name}.pdf`, pdfBytes);
    }

    if (pdfFiles.length > 0) {
        document.getElementById('downloadAllButton').style.display = 'inline-block';
    }

    document.getElementById('downloadAllButton').onclick = () => {
        const zipFilename = `${pdfFile.name.replace('.pdf', '')}.pdf.zip`;
        zip.generateAsync({ type: 'blob' }).then((content) => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(content);
            link.download = zipFilename;
            link.click();
        });
    };
});

function readFileAsArrayBuffer(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsArrayBuffer(file);
    });
}

function readFileAsText(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsText(file);
    });
}
