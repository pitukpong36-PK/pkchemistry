# 2026-06-21 · ระบบสมาชิก: เพิ่มฟีเจอร์ "ลืมรหัสผ่าน"

เพิ่มการรีเซ็ตรหัสผ่านในโมดัลล็อกอิน รองรับทั้งโหมดออนไลน์ (Firebase) และเดโม (local)

## UI (โมดัล auth)
- ลิงก์ "ลืมรหัสผ่าน?" ใต้ช่องรหัสผ่าน (แสดงเฉพาะแท็บเข้าสู่ระบบ)
- โหมด reset ใหม่ใน `PK.switchTab('reset')`:
  - หัวข้อ "รีเซ็ตรหัสผ่าน" + ลิงก์ "← กลับไปเข้าสู่ระบบ"
  - **ออนไลน์ (Firebase)**: ซ่อนช่องรหัสผ่าน · ปุ่ม "ส่งลิงก์รีเซ็ตทางอีเมล"
  - **เดโม (local)**: แสดงช่อง "รหัสผ่านใหม่" · ปุ่ม "ตั้งรหัสผ่านใหม่"
- CSS: `.auth-forgot`

## Logic
- `PK.submitAuth` แตกสาขา `state.tab==='reset'`:
  - online → `backend.resetPassword(email)` → แสดงข้อความสำเร็จ (ส่งอีเมลแล้ว ไม่ปิดโมดัล)
  - local → `backend.resetPassword(email,pass)` → ปิดโมดัล + toast
- **CloudBackend.resetPassword(email)** → `this.A.sendPasswordResetEmail(this.auth,email)` (Firebase Auth)
- **LocalBackend.resetPassword(email,newPass)** → ตรวจรหัส ≥6 + มีบัญชี → อัปเดต `pass=strHash(newPass)`

## ทดสอบ
- `node --check` module block (3908 บรรทัด) — OK
- LocalBackend flow (node): สมัคร→ล็อกอินเก่า→รีเซ็ต→ล็อกอินใหม่สำเร็จ · รหัสเก่าถูกปฏิเสธ · อีเมลไม่มี/รหัสสั้น throw ถูกต้อง — ผ่านหมด
- Cloud ใช้ sendPasswordResetEmail (มาตรฐาน Firebase, ส่งอีเมลรีเซ็ตในตัว)
- backup: index.html.bak_20260621_*_forgotpass · เซิร์ฟเวอร์ HTTP 200

## หมายเหตุ
โหมดออนไลน์ต้องเปิด Email/Password ใน Firebase Auth (มี template อีเมลรีเซ็ตในตัวอยู่แล้ว) · ปัจจุบันทดสอบ local จะเป็นแบบตั้งรหัสใหม่ทันที
