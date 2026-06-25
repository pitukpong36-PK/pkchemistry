# ⚡ v.3 ด้านที่ 1 (ความเร็ว/โหลดมือถือ) — Phase 1 Lazy-load บทเรียน — 2026-06-25

## เป้าหมาย
ลดเวลา parse JS ตอนเปิดเว็บบนมือถือ — เดิม richHTML ของ 13 บทฝังเป็น template literal
ใน `const chapters = {…}` ถูก JS engine parse **ทั้งหมดตั้งแต่โหลด** ทั้งที่นักเรียนเปิดทีละบท

## สิ่งที่ทำ
ย้าย `richHTML` ของ 13 บท (c1b2–c6b14) จาก object ใน JS → `<script type="text/template" id="chap-tpl-{id}">`
(เบราว์เซอร์ไม่ parse เป็น JS) ตามแบบ POC ของ c1b1 ที่ทำไว้ก่อนแล้ว
- `showChapter()` มี fallback อยู่แล้ว: `ch.richHTML` (undefined) → `getChapTemplate(id)` อ่าน `chap-tpl-{id}`
- ทำด้วยสคริปต์แปลงอัตโนมัติ (regex) ลงไฟล์ชั่วคราวก่อน แล้วตรวจครบจึงเขียนทับ

## ผลลัพธ์ (วัดจริง)
| รายการ | เดิม | ใหม่ |
|---|---|---|
| **บล็อก JS ที่นิยาม chapters** | **815,430 ตัวอักษร** | **10,583 ตัวอักษร** (−805K, −98.7%) |
| richHTML ที่ JS ต้อง parse ตอน startup | ~804 KB | 0 (กลายเป็น inert text) |
| ขนาดไฟล์รวม | ~2.22 MB | ~2.22 MB (เนื้อหาย้าย ไม่ได้ลบ — ดาวน์โหลดเท่าเดิม) |

**ที่ได้:** ~805K ของซอร์สไม่ถูก parse เป็น JavaScript ตอนเปิดเว็บอีกต่อไป
เบราว์เซอร์ข้ามเนื้อหา text/template จนกว่าจะเปิดบทนั้นจริง (อ่าน `.textContent` แล้ว innerHTML)

## ความปลอดภัย/ทดสอบ
- **ก่อนแปลง:** ยืนยันทั้ง 13 บทมี `${`=0, backtick=0, `</script>`=0, backslash=0 ในเนื้อหา → ย้ายได้สะอาด
- **หลังแปลง:** chapter ids 14 = template ids 14 (mapping 1:1 ครบ ไม่มีขาด/กำพร้า) · ทุก template ไม่ว่าง · content-section 137 อันครบ
- บล็อก chapters ใหม่ผ่าน syntax check (`new Function`) = OK
- บล็อก JS อื่น (#1, #2) ไบต์เหมือนเดิมเป๊ะ (ไม่แตะ) — diff อยู่ที่บล็อก chapters เท่านั้น
- textContent ของ template = richHTML string เดิมทุกตัวอักษร → DOM ที่ render ออกมาเหมือนเดิม 100%
- bump `sw.js` v6 → **v7**

## หมายเหตุ / ทำต่อได้
- ต้องยืนยันด้วยเบราว์เซอร์จริง (เปิด index.html → คลิกทุกบท ดูว่าเนื้อหาขึ้นครบ + console ไม่มี error)
- ขั้นถัด ๆ ของ Phase 1 (ตาม roadmap): defer ขยาย QUIZ_BANK/init เกม แบบ on-demand · precache เฉพาะ shell
