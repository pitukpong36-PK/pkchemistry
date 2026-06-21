# Phase 1 — Lazy-load บทเรียน (PoC บท c1b1) — 2026-06-18

## เป้าหมาย
ลดเวลา **parse JS** ตอนโหลด โดยย้าย richHTML (เนื้อหาบท) จาก template literal ใน `<script>` classic
(ถูก parse เป็น JS ทั้งหมดตอนโหลด ~1.1 MB รวม 14 บท) ไปไว้ใน `<script type="text/template">`
ซึ่งเบราว์เซอร์เก็บเป็น "ข้อความดิบ" ไม่ parse เป็น JS → `showChapter` อ่าน `.textContent` เฉพาะตอนเปิดบท

**ข้อจำกัดที่ทราบ:** ลดได้แค่เวลา parse (ช่วยมือถือสเปกต่ำ) — ไฟล์ยัง 1.8 MB เท่าเดิม
เพราะต้องคงฟีเจอร์เปิดออฟไลน์แบบดับเบิลคลิก (`file://` ใช้ fetch แยกไฟล์ไม่ได้)

## ทำแบบ PoC บทเดียวก่อน (c1b1) — ลดความเสี่ยงต่อ render path ที่นักเรียนใช้สด
สำรองก่อนแก้:
- `index.html.bak_20260618_contentfix` (ก่อนแก้เนื้อหา 8 จุด)
- `index.html.bak_20260618_prelazy` (หลังแก้เนื้อหา ก่อนทำ lazy-load) ← จุดย้อนกลับของงานนี้

### สิ่งที่เปลี่ยน (ทำด้วยสคริปต์ Python แบบ atomic)
1. ย้าย richHTML ของ c1b1 (55,772 ตัวอักษร) → `<script type="text/template" id="chap-tpl-c1b1">` วางก่อน `<script>` CHAPTER DATA
2. ลบ field `richHTML` ออกจาก object `chapters.c1b1` (เหลือ subject/colorClass/badge/title/meta)
3. เพิ่ม helper: `function getChapTemplate(id){ const el=document.getElementById('chap-tpl-'+id); return el?el.textContent:''; }`
4. `showChapter` เพิ่ม dual-path:
   ```
   if (ch.richHTML) html = ch.richHTML;            // 13 บทเดิม ใช้ inline
   else if (getChapTemplate(chapterId)) html = …;  // c1b1 อ่านจาก template
   else if (ch.topics) …
   ```
   → บทอื่นทำงานเหมือนเดิมทุกประการ มีแค่ c1b1 ที่ใช้เส้นทางใหม่

### ความปลอดภัย / การทดสอบ
- ตรวจก่อน: เนื้อหา c1b1 **ไม่มีสตริง `</script`** (กันปิด template ก่อนเวลา) — สะอาด
- richHTML inline: 14 → **13** (c1b1 ออก), template block + helper + dual-path: มีครบอย่างละ 1
- object `chapters.c1b1` สะอาด (ไม่มี richHTML, comma ถูก, ปิด `},` ถูก)
- **jsc parse-check: classic CHAPTER-DATA block + module block → PARSE OK ทั้งคู่**
- **jsc logic test:** c1b1→อ่าน template ✓ · c1b2→ใช้ inline ✓ · บทไม่มี template→"" ไม่พัง ✓
- sw.js ไม่ต้อง bump (HTML network-first)

## ⚠️ ต้องทดสอบในเบราว์เซอร์จริงก่อนขยาย (สำคัญ)
PoC นี้ผ่าน parse + logic แต่การ render จริงต้องดูในเบราว์เซอร์:
1. เปิด index.html → เนื้อหาวิชา → เคมี 1 → **บทที่ 1 (ความปลอดภัยฯ)**
   - เนื้อหาต้องแสดงครบเหมือนเดิมทุกส่วน (ตาราง GHS, SVG, โจทย์ 36 ข้อ, สรุป)
   - กดเปิด/ปิดเฉลย (details) ได้, สารบัญ (TOC ☰) สร้างหัวข้อได้
2. เปิดบทอื่น (เช่น บทที่ 2, 4) → ต้องแสดงปกติ (ใช้ inline เดิม)
3. Console ต้องไม่มี error ใหม่
4. ลองสลับ dark mode + มือถือ

## ขั้นต่อไป (ถ้าเบราว์เซอร์ผ่าน)
ขยายวิธีเดียวกันให้อีก 13 บท → ตัด ~1.1 MB ออกจากการ parse JS ตอนโหลดทั้งหมด
(สคริปต์ Python เดิมปรับให้วนทุกบทได้ โดยเช็ก `</script` ของแต่ละบทก่อน)
