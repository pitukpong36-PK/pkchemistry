# 2026-06-20 · มินิเกมใหม่: บิงโกตารางธาตุ (Periodic Table Bingo)

เพิ่มเกมที่ 5 ในฮับ (ต่อจาก มาร์เบิล/บันไดงู/จับคู่/RPG) ใช้เนื้อหา **ตารางธาตุ** (`ELEMENTS` 40 ตัวแรก)

## วิธีเล่น
- การ์ดบิงโกของสัญลักษณ์ธาตุ (สุ่มไม่ซ้ำ) — ง่าย 4×4 / ยาก 5×5 (ช่องกลางฟรี)
- แต่ละรอบ "📢 ผู้เรียก" ให้คำใบ้ของธาตุที่อยู่บนการ์ด ผู้เล่นกดช่องสัญลักษณ์ที่ตรง
- กดถูก = ทำเครื่องหมาย ✓ · กดผิด = นับ miss (ช่องสั่นแดง) · ครบ 1 แถว (นอน/ตั้ง/ทแยง) = **BINGO! ชนะ**
- คำใบ้ 5 แบบ: ชื่อไทย · ชื่ออังกฤษ · เลขอะตอม Z · มวลอะตอม · หมู่+คาบ
  (ง่ายใช้ 3 แบบแรก, ยากใช้ครบ 5) — ตรวจแล้วทุกคำใบ้ระบุธาตุได้ชัดเจน (ไม่ซ้ำในธาตุ 40 ตัวแรก)
- เก็บสถิติดีสุด (รอบน้อยสุด, ตัด miss) แยกตามขนาดการ์ดใน localStorage `pk_bingo`

## ไฟล์/โครงสร้างที่เพิ่ม
- HTML: การ์ดฮับ `GameHub.open('bingo')` + section `#bingoGame` (start/play, caller, board, HUD)
- CSS: `.bingo-caller`, `.bingo-board`, `.bcell` (marked/bfree/bwin/bwrong) + `@keyframes bShake`
- JS module `Bingo` (window.Bingo) วางหลัง `Match.win`: menu/stop/start/restart/render/renderHUD/
  renderCaller/makeClue/nextCall/mark/countLines/_winSet/win/renderBest
- Wiring: เพิ่ม `'bingo'` ใน `GameHub.open`/`toHub` arrays + สาขา open · `GameHub.winMenu` รองรับ bingo
- ใช้ `GameHub.showWin(...)` (win overlay เดิม) และ helper `shuffle`/`$` เดิม

## การทดสอบ
- unit test engine ด้วย node: สร้างการ์ด 4×4 (16 ธาตุไม่ซ้ำ) / 5×5 (24 + ช่องกลางฟรี premarked),
  ตรวจแถว/หลัก/ทแยง (รวมทแยงผ่านช่องฟรี), `_winSet` คืนช่องแถวที่ชนะถูกต้อง — ผ่านหมด
- ตรวจความไม่ซ้ำของคำใบ้ในธาตุ 40 ตัวแรก (หมู่-คาบ/มวล2ตำแหน่ง/ชื่อไทย/ชื่ออังกฤษ) — ไม่ซ้ำเลย
- `node --check` สคริปต์โมดูล (16028–19283, 3254 บรรทัด) — syntax OK
- backup: index.html.bak_20260620_150514_bingo

## แนวต่อยอด
- โหมด "blackout" (ทำครบทั้งการ์ด) · จับเวลานับถอยหลังต่อรอบ · เล่นแข่งกับบอท
