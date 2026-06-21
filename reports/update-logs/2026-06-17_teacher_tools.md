# บันทึก: เครื่องมือครู — รายงาน/วิเคราะห์ (กลุ่ม B เฟส 1) — 2026-06-17

ไฟล์: index.html | สำรอง: backups/index.html.bak_20260617_teachertools

## สิ่งที่เพิ่มในแดชบอร์ดครู
1. **🔥 จุดอ่อนทั้งห้อง (heatmap รายบท)** — เฉลี่ยความแม่นยำของทั้งห้องแต่ละบท
   รวมสัญญาณจากแบบทดสอบ (quizzes[ch] = best/total) + เกม RPG (rpg.mastery[ch])
   สีแดง <50% / เหลือง 50–75% / เขียว ≥75% + จำนวนนักเรียนที่มีข้อมูล → ครูเห็นทันทีว่าบทไหนต้องเน้นสอน
2. **⬇️ ส่งออก CSV** — รายชื่อ+ผลทั้งหมด (บทที่เรียน, ควิซเฉลี่ย, สอบรวม, RPG เลเวล/บทพิชิต/แม่นยำ, คะแนนรวม)
   มี BOM UTF-8 (เปิดใน Excel ภาษาไทยได้) ดาวน์โหลดผ่าน Blob
3. **🖨️ พิมพ์/PDF** — `window.print()` + print CSS แสดงเฉพาะแดชบอร์ด (ซ่อนปุ่ม/เมนู)

## จุดที่แก้ใน index.html
- HTML: ปุ่ม ส่งออก CSV / พิมพ์ ในหัวแดชบอร์ด + panel `#tdHeatmap`
- JS: `PK.classWeakness(studs)`, `PK.renderHeatmap`, `PK.exportCSV`, `PK.printDashboard`
       + renderTeacher เก็บ `PK._studs` และเรียก renderHeatmap
- CSS: `.hm-row/.hm-bar/.hm-v` + `@media print`

## ตรวจสอบ (Chrome จริง — seed LocalBackend 3 คน)
- classWeakness ถูกต้อง: บท1=75%(2คน), บท6=29%(2คน, อ่อนสุด), บท7=59% ... (รวม quiz+RPG)
- heatmap แสดงสีถูกต้องทุกบท · CSV รันไม่ error (CSV OK) · ปุ่มครบ
- แดชบอร์ดบูตเต็ม (สมาชิก 3) — ยืนยันว่าการแก้บั๊ก EMAP ทำให้ระบบบัญชี/ครูกลับมาทำงานจริง
- syntax module ผ่าน

## ค้าง/ต่อยอดกลุ่ม B (เฟส 2 — ต้องใช้ Firebase + ทดสอบออนไลน์)
- มอบหมายงาน (assignment: บท/ควิซ/เดดไลน์) — เก็บใน collection กลาง, นักเรียนอ่าน
- ห้องเรียน/sections + รหัสเข้าห้อง (จัดกลุ่มนักเรียน)
- ส่งออก PDF จริง (ตอนนี้ใช้ print→Save as PDF ของเบราว์เซอร์)
หมายเหตุ: 2 ข้อแรกต้องปรับ schema backend ทั้ง Local/Cloud และทดสอบบนเครื่องที่มีเน็ต/Firebase
