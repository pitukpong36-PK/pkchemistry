# บันทึก: แฟลชการ์ดทบทวน (กลุ่ม G) — 2026-06-17

ไฟล์: index.html | สำรอง: backups/index.html.bak_20260617_flashcards
(หมายเหตุ: ย้ายไฟล์สำรองทั้งหมด ~42 ไฟล์เข้าโฟลเดอร์ backups/ แล้ว เหลือ index.html ในรูท)

## บริบท
เครื่องคำนวณของกลุ่ม G **มีอยู่แล้ว** ใน ChemTools (หน้า "เครื่องมือ"): ตารางธาตุ, มวลโมเลกุล,
ดุลสมการ, คำนวณ pH, แปลงหน่วย (รวมเจือจาง M₁V₁=M₂V₂ และ โมล↔อนุภาค/STP)
→ จึงเพิ่มของที่ยังไม่มี: **แฟลชการ์ด** (ช่วยท่องจำ — ไอออน/สูตร/หมู่ฟังก์ชัน/นิยาม)

## สิ่งที่เพิ่ม: แฟลชการ์ด (แท็บใหม่ในหน้าเครื่องมือ)
- 5 ชุด, 63 ใบ: ไอออนพหุอะตอม(16) · สูตร↔ชื่อสาร(15) · กรด↔คู่เบส(10) · หมู่ฟังก์ชัน(10) · นิยาม/ค่าคงที่(12)
- การ์ดพลิก 3D (front=โจทย์ → tap → back=คำตอบ)
- เลื่อนก่อนหน้า/ถัดไป · สลับ (shuffle)
- **spaced-repetition แบบเบา**: ทำเครื่องหมาย "รู้แล้ว/ทบทวนอีก" เก็บใน localStorage (pk_flash) + โหมด "เฉพาะที่ยังไม่รู้" + แถบความคืบหน้าต่อชุด
- ทั้งหมดอยู่ใน ChemTools (classic-script IIFE) ข้อมูลในตัว ไม่พึ่งสโคป module (ตามบทเรียน EMAP)

## จุดที่แก้ใน index.html
- HTML: แท็บ "🗂️ แฟลชการ์ด" + panel `#tool-flash > #flashRoot`
- JS (ใน IIFE ของ ChemTools): `FCARDS` + `ChemTools.flashHome/flashOpen/flashFlip/flashNav/flashMark/flashShuffle/flashToggleReview/flashRender` + helper เก็บสถานะ "รู้แล้ว"
- CSS: fc-decks/deck, fc-card (flip 3D), fc-nav/acts/opts

## ตรวจสอบ (jsc + Chrome)
- logic: 5 ชุด 63 ใบ, flip/nav/mark-persist/shuffle/review-filter/all-known fallback — ผ่าน
- syntax (classic script) ผ่าน
- ภาพจริง: หน้าเลือกชุด (แถบความคืบหน้า) + การ์ดพลิกแสดงคำตอบ — ถูกต้อง

## ค้าง/ต่อยอดกลุ่ม G
- อภิธานศัพท์ค้นหา (glossary) · ทบทวนรายวันแบบรวมทุกชุด (daily mix) · เพิ่มชุดการ์ด (เลขออกซิเดชัน/สี/เปลวไฟ)
