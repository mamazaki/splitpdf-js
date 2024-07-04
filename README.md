# Split PDF by Page Numbers

This web-based application allows you to split a PDF file based on page numbers specified in a TXT file. It uses the `pdf-lib` library to handle PDF operations and `FileReader` for reading files uploaded by the user.

## Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection to load the `pdf-lib` library

## Installation

1. Clone or download this repository.
2. Open `index.html` in your web browser.

## Usage

1. Place your PDF file and TXT file in the same directory as `index.html` and `main.js`.
2. Modify the TXT file to specify filename and page number in the format: `filename,page_number`.
3. Open `index.html` in your web browser.
4. Use the file input elements to upload your PDF file and TXT file.
5. Click the "Split PDF" button.
6. Download links for the split PDF files will be generated based on the specifications in the TXT file.
7. Click the "Download All" button to download all split PDF files as a ZIP file.

## Example

### TXT File Format

```
file1,1
file2,3
file3,5
```

### Files

- `example.pdf`
- `example.txt`

### Output

- `file1.pdf` (Page 1 of `example.pdf`)
- `file2.pdf` (Page 3 of `example.pdf`)
- `file3.pdf` (Page 5 of `example.pdf`)

### Download All

After splitting the PDF files, a "Download All" button will appear. Click this button to download all the split PDF files as a single ZIP file named `original_filename.pdf.zip`, where `original_filename` is the name of the uploaded PDF file.

## Development

This project uses the `pdf-lib` library for PDF operations. To update or modify the project:

1. Edit the `index.html` file for the HTML structure.
2. Edit the `main.js` file for the JavaScript logic.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [pdf-lib](https://pdf-lib.js.org/) - A JavaScript library to create and modify PDFs.

## Contact

For any questions or suggestions, please open an issue on GitHub.

# File Structure
```
your_project_directory/
│
├── index.html
├── main.js
└── README.md
```
# Note
- Ensure pdf-lib is correctly included in your index.html for the script to function properly.
- Always verify your input files (PDF and TXT) are correctly formatted and contain the necessary data


# แยกไฟล์ PDF ตามหมายเลขหน้า

แอปพลิเคชันเว็บนี้ช่วยให้คุณสามารถแยกไฟล์ PDF ตามหมายเลขหน้าที่ระบุในไฟล์ TXT โดยใช้ไลบรารี `pdf-lib` สำหรับการจัดการไฟล์ PDF และ `FileReader` สำหรับการอ่านไฟล์ที่ผู้ใช้อัปโหลด

## ความต้องการ

- เว็บเบราว์เซอร์สมัยใหม่ (Chrome, Firefox, Safari, Edge)
- การเชื่อมต่ออินเทอร์เน็ตเพื่อโหลดไลบรารี `pdf-lib`

## การติดตั้ง

1. โคลนหรือดาวน์โหลด repository นี้.
2. เปิดไฟล์ `index.html` ในเว็บเบราว์เซอร์ของคุณ.

## การใช้งาน

1. วางไฟล์ PDF และไฟล์ TXT ของคุณในไดเรกทอรีเดียวกันกับ `index.html` และ `main.js`.
2. แก้ไขไฟล์ TXT เพื่อระบุชื่อไฟล์และหมายเลขหน้าในรูปแบบ: `ชื่อไฟล์,หมายเลขหน้า`.
3. เปิดไฟล์ `index.html` ในเว็บเบราว์เซอร์ของคุณ.
4. ใช้ส่วนอินพุตไฟล์เพื่ออัปโหลดไฟล์ PDF และไฟล์ TXT ของคุณ.
5. คลิกปุ่ม "Split PDF".
6. ลิงก์ดาวน์โหลดสำหรับไฟล์ PDF ที่แยกจะถูกสร้างขึ้นตามข้อมูลในไฟล์ TXT.
7. คลิกปุ่ม "Download All" เพื่อดาวน์โหลดไฟล์ PDF ทั้งหมดในรูปแบบ ZIP ไฟล์.

## ตัวอย่าง

### รูปแบบไฟล์ TXT
```
file1,1
file2,3
file3,5
```
### ไฟล์

- `example.pdf`
- `example.txt`

### ผลลัพธ์

- `file1.pdf` (หน้า 1 ของ `example.pdf`)
- `file2.pdf` (หน้า 3 ของ `example.pdf`)
- `file3.pdf` (หน้า 5 ของ `example.pdf`)

## การดาวน์โหลดทั้งหมด
หลังจากที่ทำการแยกไฟล์ PDF แล้ว จะมีปุ่ม "Download All" ปรากฏขึ้น คลิกปุ่มนี้เพื่อดาวน์โหลดไฟล์ PDF ทั้งหมดที่แยกเป็นไฟล์ ZIP เดียว โดยมีชื่อไฟล์ว่า original_filename.pdf.zip ซึ่ง original_filename คือชื่อของไฟล์ PDF ที่คุณอัปโหลด.

## การพัฒนา

โปรเจคนี้ใช้ไลบรารี `pdf-lib` สำหรับการจัดการไฟล์ PDF. ในการอัปเดตหรือแก้ไขโปรเจค:

1. แก้ไขไฟล์ `index.html` สำหรับโครงสร้าง HTML.
2. แก้ไขไฟล์ `main.js` สำหรับตรรกะ JavaScript.

## ใบอนุญาต

โปรเจคนี้ได้รับอนุญาตภายใต้ MIT License. ดูไฟล์ LICENSE สำหรับรายละเอียดเพิ่มเติม.

## ขอบคุณ

- [pdf-lib](https://pdf-lib.js.org/) - ไลบรารี JavaScript สำหรับสร้างและแก้ไข PDF.
- [JSZip](https://stuk.github.io/jszip/) - ไลบรารี JavaScript สำหรับสร้างและจัดการไฟล์ ZIP.

## ติดต่อ

หากมีคำถามหรือข้อเสนอแนะใด ๆ กรุณาเปิด issue บน GitHub.


# โครงสร้างไฟล์
```
your_project_directory/
│
├── index.html
├── main.js
└── README.md
```
# หมายเหตุ
- ตรวจสอบให้แน่ใจว่า pdf-lib ถูกโหลดอย่างถูกต้องในไฟล์ index.html ของคุณเพื่อให้สคริปต์ทำงานได้อย่างถูกต้อง.
- ตรวจสอบให้แน่ใจว่าไฟล์ที่คุณอัปโหลด (PDF และ TXT) ถูกฟอร์แมตและมีข้อมูลที่จำเป็นอย่างถูกต้อง.
