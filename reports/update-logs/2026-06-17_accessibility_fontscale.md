# บันทึก: ปรับขนาดตัวอักษร/การแสดงผล (Accessibility, กลุ่ม D) — 2026-06-17

ไฟล์: index.html | สำรอง: backups/index.html.bak_20260617_fontscale

## สิ่งที่เพิ่ม
- ปุ่ม 🔠 ใน nav (ข้างปุ่มธีม) — กดวนขนาด: เล็ก(0.92×) → ปกติ(1×) → ใหญ่(1.12×) → ใหญ่มาก(1.28×)
- ใช้ `document.documentElement.style.zoom` เพราะเว็บใช้ px เป็นหลัก (504 px/clamp vs 9 rem) →
  การ scale root font-size ไม่ครอบคลุม; zoom ขยายทั้งหน้ารวมข้อความ px ได้จริง
- จำค่าใน localStorage (pk_fontscale) + ใช้ตั้งแต่โหลด · toast บอกระดับ · ปุ่มไฮไลต์เมื่อไม่ใช่ "ปกติ"

## จุดที่แก้ใน index.html
- HTML: ปุ่ม `#fontBtn` ใน nav
- JS: `PK._FS/_FSNAME`, `PK.setFontScale`, `PK.cycleFontScale` + apply-on-load (ตามแพตเทิร์น setTheme)
- CSS: `.nav-icon-btn.fs-on`

## ตรวจสอบ (Chrome จริง)
- สลับไป "ใหญ่มาก" → ทั้งหน้าขยายชัดเจน (หัวข้อ/เมนู/แบนเนอร์) เลย์เอาต์ไม่พัง
- syntax module ผ่าน
- หมายเหตุ: zoom รองรับ Chrome/Safari/Edge และ Firefox รุ่นใหม่ (≥126); รุ่นเก่ามากอาจไม่ขยาย แต่ไม่กระทบการใช้งานอื่น

## ค้าง/ต่อยอด C/D
- เข้าระบบ Google + ลืมรหัส (ต้อง Firebase) · PWA offline เต็มรูป · นโยบาย PDPA · ลด/แยกไฟล์เพื่อโหลดเร็ว
