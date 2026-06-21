# บันทึก: โหมดสอบเสมือนจริง + แก้บั๊กร้ายแรง expandQuizBank — 2026-06-17

ไฟล์: index.html | สำรอง: index.html.bak_20260617_mockexam_emapfix

## 🔴 บั๊กร้ายแรงที่พบและแก้ (สำคัญสุด)
**อาการ:** ในเบราว์เซอร์จริง คลังโจทย์มีแค่ 757 ข้อ (ไม่ใช่ 1,555) — 8 บทค้างที่ ~10 ข้อ
**ราก:** `ELEMENTS/EMAP` อยู่ใน `<script>` ธรรมดา แต่ `molarMass/QGEN/expandQuizBank` อยู่ใน
`<script type="module">` คนละสโคป → ใน module มองไม่เห็น `EMAP` (ELEMENTS/molarMass/MASS_CPDS เห็น แต่ EMAP=undefined)
→ `molarMass()` โยน `ReferenceError: EMAP is not defined` ตอน QGEN เติมบท c2b4
→ expandQuizBank หยุดกลางคัน (เติมแค่ c1b1=100, c1b2=145 แล้วตาย) เหลือ 140+392+90+135 = **757**
→ ที่ร้ายกว่า: throw ไม่ถูก catch → **โค้ดที่เหลือใน module หยุดทำงาน รวมถึง boot()** → ระบบบัญชี/ล็อกอิน/แดชบอร์ดครู/ซิงก์ RPG ไม่ทำงานในโปรดักชัน

**แก้:** สร้าง `EMAP` ใหม่ภายใน module จาก `ELEMENTS` ก่อน `molarMass`
**ผลหลังแก้ (ตรวจในเบราว์เซอร์จริง):** QUIZ_BANK = **1555** ครบทุกบท ≥100, ไม่มี throw, boot รัน (counters ขึ้น)

วิธีตรวจ: รัน index.html ใน headless Chrome + `--enable-logging=stderr` จับ console.error
(เครื่องนี้บล็อกด้วยปัญหา closure/module scope จึงต้องดูผ่าน console จริง ไม่ใช่ jsc แยกบล็อก)

## 🆕 ฟีเจอร์: โหมดสอบเสมือนจริง (Mock Exam)
อัปเกรด `PK.startExam()` เดิม (เฉลยทันทีรายข้อ = ฝึก) → โมดูล `MEX` แบบสอบจริง:
- เลือกชุด: 20 ข้อ/20 นาที · 40/45 · 60/70 (คละทุกบท)
- จับเวลานับถอยหลัง (เตือนสีแดงเมื่อ ≤1 นาที, หมดเวลา = ส่งอัตโนมัติ)
- **ไม่เฉลยจนกว่าจะส่ง** · เลือก/แก้คำตอบได้ · ปุ่มก่อนหน้า/ถัดไป · ตารางนำทางข้อ (ทำแล้ว/ปัจจุบัน/ทำเครื่องหมาย 🚩)
- ส่งแล้ว: คะแนน+วงแหวน, **วิเคราะห์รายบท** (ชี้บทอ่อน), **เฉลยรายข้อ** (คำตอบคุณ vs เฉลย + คำอธิบาย) + ตัวกรอง "เฉพาะข้อผิด"
- บันทึกคะแนนผ่าน saveQuiz('__exam') เดิม → เข้าโปรไฟล์/แดชบอร์ดครู

## จุดที่แก้ใน index.html
- เพิ่ม `const EMAP=...` ใน module ก่อน molarMass (บั๊กฟิกซ์)
- เพิ่มหน้า `#page-exam > #examRoot`
- `PK.startExam = ()=> MEX.open()` (ทุกปุ่มเดิมชี้มาที่นี่)
- โมดูล `MEX` (setup/start/render/choose/flag/go/submit/result/review) + presets
- CSS โหมดสอบ (timer, นำทางข้อ, รีวิว, วิเคราะห์รายบท)

## ตรวจสอบ (jsc + Chrome)
- jsc: build/score (40/40), per-chapter 14 บท, partial 6/10, auto-submit หมดเวลา, review filter (ผิด 3 / ทั้งหมด 6) — ผ่าน
- Chrome: หน้า setup (1555 ข้อ), หน้าสอบ (timer+นำทาง), หน้าผล (วิเคราะห์รายบท+เฉลยรายข้อ) — แสดงถูก
- syntax module ผ่าน
