# บันทึก: สำรอง/กู้ข้อมูล (กลุ่ม D) — 2026-06-17

ไฟล์: index.html | สำรอง: backups/index.html.bak_20260617_backup

## บริบท
ทุกความคืบหน้าฝั่งเครื่อง (RPG, แฟลชการ์ด, เกม, บัญชีโหมดเดโม) อยู่ใน localStorage
→ ถ้านักเรียนล้างเบราว์เซอร์/เปลี่ยนเครื่อง ข้อมูลหาย → เพิ่ม Export/Import กันข้อมูลหาย

## สิ่งที่เพิ่ม
- โมดอล "💾 สำรอง/กู้ข้อมูล"
  - **Export**: รวม key (pk_rpg, pk_flash, pk_match, pk_marble, pk_members, pk_theme) เป็นไฟล์ JSON ดาวน์โหลด
  - **Import**: อัปโหลดไฟล์ → ยืนยัน → เขียนกลับ localStorage → reload (ตรวจ _app='PKchemistry' กันไฟล์ผิด)
- เข้าถึงได้จาก: เมนูผู้ใช้ (ล็อกอิน) + ปุ่มในหน้าเกม (guest ก็ใช้ได้ — กัน RPG หาย)
- แก้ accuracy bug: ข้อความหน้าเกม "คลังโจทย์ 140 ข้อ" → "1,555 ข้อ"

## จุดที่แก้ใน index.html
- HTML: โมดอล `#backupOverlay` + เมนูผู้ใช้ + ปุ่มหน้าเกม
- JS: `PK._BK_KEYS`, `PK.openBackup/closeBackup/exportData/importData`
- CSS: `.bk-overlay/.bk-box/.bk-btn/...`

## ตรวจสอบ (jsc + Chrome)
- round-trip: export 3 key → ล้าง → import กู้คืนครบ (pk_rpg/pk_theme ตรง) · ไฟล์ผิดถูกปฏิเสธ
- โมดอลแสดงผลถูกต้อง เปิดจากหน้าเกมได้ (ไม่ต้องล็อกอิน)
- syntax module ผ่าน

## ค้าง/ต่อยอดกลุ่ม C/D
- เข้าระบบด้วย Google + ลืมรหัส (ต้อง Firebase/ออนไลน์)
- ปรับขนาดฟอนต์ (accessibility), PWA offline เต็มรูป, นโยบาย PDPA
