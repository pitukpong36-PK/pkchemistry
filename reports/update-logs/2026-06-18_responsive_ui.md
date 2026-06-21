# ปรับ UI ให้ Responsive รองรับมือถือ — 2026-06-18

## เป้าหมาย
ปรับ `index.html` ให้แสดงผลและใช้งานบนมือถือได้ดีขึ้น (นักเรียนส่วนใหญ่เล่นบนมือถือ)

## สำรองไฟล์
- `index.html.bak_20260618_web` (สร้างก่อนแก้ไข)

## สถานะ responsive เดิม (ก่อนแก้)
- มี `<meta name="viewport" content="width=device-width, initial-scale=1.0">` แล้ว (บรรทัด 5) — ถูกต้อง
- มี `@media` 18 จุด ครอบคลุม: nav (ซ่อน `.nav-links` + แสดง hamburger ที่ 700px), `.about-grid`, `.stats-bar`, `.features-grid`, `.hub-grid`, `.diff-grid`, `.td-cards`, periodic table cell, exam banner, reduced-motion, print
- มีระบบ nav มือถือครบแล้ว: hamburger (`.nav-hamburger`) + drawer (`.mobile-drawer`) ทำงานที่ ≤700px

### จุดที่พังจริงบนมือถือ (พบและแก้)
1. **ตาราง overflow** — `.content-table` (ใช้ 20+ จุด) และ `<table style="width:100%">` แบบ inline (10 จุด) ไม่มี wrapper เลื่อนแนวนอน → ล้น/บีบจนอ่านไม่ได้บนจอแคบ (ปัญหาใหญ่ที่สุด)
2. **touch target** — `.nav-icon-btn` 38px เล็กกว่ามาตรฐาน ~44px
3. **hero / typography** — padding และฟอนต์ใหญ่เกินบนจอเล็ก, ปุ่ม hero ไม่เต็มความกว้าง
4. **เกม/HUD** — ระยะห่างการ์ดเกมและ HUD แน่นเกินบนจอ <480px

## สิ่งที่แก้ (เพิ่ม CSS ก้อนเดียว ท้าย `<style>` หลัก ก่อน `</style>` ~บรรทัด 1220)
**เป็น CSS ล้วน ไม่แตะ JS เลย** (script count คงเดิม 4 ก้อน) — วางท้ายสุดเพื่อให้ rule ทับของเดิมตาม source order ไม่ต้องใช้ `!important`

Breakpoint หลักที่ใช้:
- **≤768px** (แท็บเล็ต/มือถือใหญ่)
- **≤480px** (มือถือ)
- **`(hover:none) and (pointer:coarse)`** (อุปกรณ์สัมผัส) สำหรับ touch target

### รายละเอียด
- **ตาราง (≤768px):** ทำ `.content-table`, `.content-section table`, `.solution-content table`, `.problem-card table` ให้ `display:block; overflow-x:auto; -webkit-overflow-scrolling:touch` → เลื่อนแนวนอนได้ ไม่ล้นจอ (ไม่ต้องแก้ HTML ของแต่ละตาราง)
- **≤768px:** ลด padding `.container/.chapter-content/.generic-content`, ลดฟอนต์ `.page-header h1`/hero, ยุบ `.stats-bar`/`.td-cards` เป็น 2 คอลัมน์, ขยาย `.nav-icon-btn`/`.nav-hamburger` เป็น 42px
- **≤480px:** nav padding แคบลง, hero เล็กลง + ปุ่ม hero เต็มความกว้าง + `.hero-cta` เป็นคอลัมน์, การ์ดทั้งหมด (features/td-cards/two-col) เหลือ 1 คอลัมน์
- **เกม ≤480px:** `.hub-grid`/`.diff-grid` 1 คอลัมน์ gap แคบลง, `.game-hud`/`.snake-hud` 2 คอลัมน์, ลด padding `.hud-p`, `.match-board`/`.match-modes` gap แคบลง, ปุ่มเกม (`.game-back`, `.gq-tool-btn`, `.ex-lvl`) `min-height:44px`
- **quiz ≤480px:** padding แคบลง, `.quiz-choice .qc-key` 30px, flashcard เต็มความกว้าง, ตารางธาตุเลื่อนลื่นขึ้น, footer แน่นขึ้น
- **touch device:** `.nav-link` padding ใหญ่ขึ้น, ตั้ง tap-highlight ปุ่มหลัก

## การทดสอบ
- ไม่มี JS เปลี่ยน → ไม่จำเป็นต้องทดสอบ jsc (งาน CSS ล้วน)
- ตรวจโครงสร้าง: `<style>`/`</style>` 3/3, `</head>`/`<body>`/`</html>` อย่างละ 1, brace 50/50, paren 12/12 ในก้อนใหม่ — สมดุล
- ไฟล์ +104 บรรทัด (เท่ากับขนาดก้อน CSS ที่เพิ่ม), script ก้อนเดิม 4 ก้อนคงเดิม → ไม่กระทบ scope

## ไม่มีฟีเจอร์/เกม/เนื้อหาใดถูกลบ

## วิธีทดสอบในเบราว์เซอร์ (แนะนำ)
1. เปิด `index.html` → DevTools (F12) → toggle device toolbar (Ctrl/Cmd+Shift+M)
2. ทดสอบความกว้าง: **375px (iPhone), 414px, 768px (iPad)**
3. จุดที่ควรเช็ค:
   - หน้าเนื้อหาที่มีตาราง (เช่น เลขนัยสำคัญ, หน่วย SI, GHS) → ตารางต้องเลื่อนแนวนอนได้ ไม่ล้นจอ
   - nav: ปุ่ม hamburger แสดง, กดแล้ว drawer เลื่อนออกมา, เมนูครบ
   - หน้าเกม (🎲): การ์ดเกมเรียง 1 คอลัมน์, การ์ดความยากเรียง 1 คอลัมน์, ปุ่มกดง่าย
   - hero หน้าแรก: ปุ่มเต็มความกว้าง, ข้อความไม่ล้น
   - quiz/แบบทดสอบ: ตัวเลือกแตะง่าย
4. ดู Console → ต้องไม่มี error ใหม่
5. ทดสอบทั้ง light/dark mode

---

## รอบที่ 2 — ตรวจ/ปรับจุดที่รอบแรกยังไม่ครอบคลุม (2026-06-18)

### สำรองไฟล์
- `index.html.bak_20260618_web2` (สร้างก่อนแก้รอบ 2)

### วิธีตรวจ
ไล่ดู CSS ของกระดานเกม (marble/snake/match), modal/overlay ทุกตัว, และจุดที่อาจทำให้สกรอลล์แนวนอน
จากนั้นเทียบกับ CSS ที่รอบแรกเพิ่มไว้ (บล็อกท้าย `<style>` ~บรรทัด 1229–1324)

### จุดที่ตรวจแล้ว “โอเคอยู่แล้ว” (ไม่แก้ซ้ำ)
- **กระดานเกมทั้ง 3 (marble/snake/match)**: ใช้ `display:grid` + `grid-template-columns:repeat(n,1fr)` + `aspect-ratio:1/1` + `max-width`
  → กระดานย่อตามความกว้าง container เป็นสี่เหลี่ยมจัตุรัสเสมอ ไม่ล้นแนวนอน, ไม่บีบเสียสัดส่วน
- **`.mtile` ในมาร์เบิล** มี `min-width:0` + `overflow:hidden` → เนื้อหาในช่องไม่ดันให้ช่องบาน
- **`.gq-box`** กว้าง `min(480px,95vw)` และ **`.gover-box` / `.auth-modal` / `.el-modal`** กว้าง `min(..,94–95vw)` → ความกว้างพอดีจอแล้ว
- **`.search-box`** มี `max-height:70vh; overflow:hidden` (flex column) อยู่แล้ว
- **flashcard** (`.fc-card`) รอบแรกตั้ง `max-width:100%` ที่ ≤480px แล้ว และเป็น element ในหน้า (ไม่ใช่ overlay)
- **ตาราง/ตารางธาตุ** รอบแรกครอบ overflow-x แล้ว

### จุดที่แก้เพิ่มรอบ 2 (CSS ล้วน, เพิ่มบล็อกใหม่ก่อน `</style>` ~บรรทัด 1326–1380)
1. **กันสกรอลล์แนวนอนทั้งหน้า** — `html, body { max-width:100%; overflow-x:hidden; }`
   (ตัวเลื่อนแนวนอนของตาราง/ตารางธาตุยังทำงาน เพราะ scroll เกิดใน container ของมันเอง ไม่ใช่ body)
2. **Modal/popup ทุกตัวจำกัดความสูง + เลื่อนแนวตั้งได้** — เดิมมีแค่ความกว้าง `min(..,vw)` แต่ **ไม่มี `max-height`**
   → ในแนวนอน/จอเตี้ยเนื้อหายาวจะถูกตัดออกนอกจอ
   เพิ่ม `max-height:90vh; overflow-y:auto` ให้ `.auth-modal, .el-modal, .gq-box, .gover-box, .bk-box, .search-box`
3. **เกมบนจอเล็ก ≤480px**: บังคับ `.marble-wrap/.snake-wrap/.match-board` เป็น `max-width:100%`,
   ลด gap/padding กระดาน, ปรับฟอนต์/ไอคอนใน `.mtile` เป็น `clamp()` ตามความกว้างจอ (พออ่าน ไม่ล้นช่อง),
   ปรับ `.mcard-back / .match-hud / .game-log` ให้กระชับ
4. **แนวนอนมือถือ (จอเตี้ย)** `@media(max-height:500px) and (orientation:landscape)`:
   - modal: `max-height:94vh; overflow-y:auto` + ลด padding บน/ล่าง, ย่อ emoji ใน gover-box
   - กระดานสี่เหลี่ยมจัตุรัสจำกัดด้วยความสูงจอ `max-width:min(..,vh)` เพื่อไม่ให้สูงเกินจอในแนวนอน

### ทดสอบ
- โครงสร้างไฟล์: `<script>` ยังครบ 4 ก้อน, `<style>`/`</style>` สมดุล (3/3) — ผ่าน
- JS: ดึงบล็อก GameHub (classic ~15031) มารันด้วย `jsc` + stub (document/window/localStorage/setTimeout)
  → ไม่มี SyntaxError และรันจบ exit 0 (ยืนยันการแก้ CSS ไม่กระทบ JS)
- ไม่แตะ JS/PWA → ไม่ต้อง bump version ใน sw.js

### วิธีทดสอบในเบราว์เซอร์ (แนะนำให้ครูลองจริง)
1. เปิด DevTools → Toggle device toolbar → ตั้งความกว้าง **375px** (iPhone SE)
   - เลื่อนทั้งหน้า: ต้อง **ไม่มีสกรอลล์แนวนอน** (ลองหน้าเนื้อหาที่มีตาราง + หน้าเกม)
   - เข้าเกม marble/snake/match: กระดานต้องพอดีจอ ไม่ล้น ไม่บีบรี
2. เล่นจนชนะ/แพ้ → หน้าต่างผล (showWin/gover) ต้องอยู่กลางจอ ปุ่ม “เล่นอีกครั้ง/เมนูเกม” กดได้
3. หมุนเป็น **แนวนอน** (เช่น 667×375) แล้วเปิด modal/ควิซในเกม → modal ต้องเลื่อนดูได้ครบ ไม่ถูกตัดหัว/ท้าย
4. console: ต้องไม่มี error ใหม่
