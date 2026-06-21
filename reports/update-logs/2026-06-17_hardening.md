# บันทึก: ตรวจสุขภาพ & ความมั่นคง (กลุ่ม F) — 2026-06-17

ไฟล์: index.html | สำรอง: index.html.bak_20260617_hardening

## 1) QA เบราว์เซอร์จริง (กวาดทุกฟีเจอร์)
รัน index.html ใน headless Chrome + console logging กระตุ้นครบ:
- 11 หน้า (welcome/home/chapter/quiz/exam/teacher/profile/game/docs/media/tools)
- 14 บท (showChapter), ควิซทุกบท + ทุกระดับ (ง่าย/กลาง/ยาก)
- สอบเสมือนจริง (เลือกระดับ/ตอบ/ส่ง/รีวิว), เกมทั้ง 4 (marble/snake/match/rpg)
- RPG: แผนที่/รายการ/มาสเตอรี/สถิติ/ร้าน/adaptive/endless
**ผล: ไม่มี error ของแอปเลย** (เหลือแต่ noise ของเบราว์เซอร์: CORS บน file://, Chrome internal)

## 2) ดักerror ทั้งระบบ (กันพังเงียบ)
- `window.addEventListener('error')` → log + toast แจ้งครั้งเดียว/เซสชัน (ระบบยังใช้งานต่อได้)
- `window.addEventListener('unhandledrejection')` → log (กัน promise พังเงียบ เช่น Firebase)

## 3) ตรวจระบบในตัว — กันบั๊กแบบ EMAP ซ้ำรอย
- `PK.selfTest()` ตรวจ: คลังโจทย์รวม ≥1500 + ทุกบท ≥100, EMAP อยู่ในสโคป, โมดูล RPG/MEX/GameHub ครบ, backend พร้อม
- เรียกอัตโนมัติหลัง `expandQuizBank()` ทุกครั้งที่โหลด → ถ้าคลังไม่ครบจะขึ้น console.error ทันที (ครั้งนี้: PASS · คลัง=1555)
- ปุ่ม **🔧 ตรวจระบบ** ในแดชบอร์ดครู (`PK.runSelfTest()`) → แสดงผลสรุปให้ครูเช็คเองได้

## ตรวจสอบ
- selfTest ในเบราว์เซอร์จริง: PASS · คลัง=1555 (ทุกบท ≥100)
- syntax module ผ่าน · หน้าครูแสดงปุ่มตรวจระบบ
- QA flow ทั้งหมดไม่มี error

## ค้าง/แนะนำเพิ่ม
- ไฟล์สำรอง index.html.bak_* มีจำนวนมาก — แนะนำย้ายเข้าโฟลเดอร์ backups/ หรือเก็บเฉพาะล่าสุด (ยังไม่ลบให้เพราะเป็น action ที่ย้อนยาก ควรยืนยันก่อน)
- ป้องกันบั๊กสโคป classic↔module ระยะยาว: พิจารณารวม/ย้ายตัวแปรที่ใช้ข้ามบล็อกให้อยู่บล็อกเดียว (ดู memory script-scope-split)
