# 🚀 บันทึกการขึ้นระบบจริง (Go-Live) — 23 กรกฎาคม 2026

> เว็บออนไลน์และระบบสมาชิกใช้งานจริงแล้ว บันทึกนี้สรุปทุกอย่างที่ตั้งค่าไว้ + วิธีแก้ไขเว็บโดยไม่ต้องใช้เครื่องคอมพิวเตอร์เครื่องเดิม

---

## 🌐 ลิงก์สำคัญ

| รายการ | ลิงก์ |
|---|---|
| **เว็บไซต์จริง** | https://pitukpong36-pk.github.io/pkchemistry/ |
| โค้ดบน GitHub | https://github.com/pitukpong36-PK/pkchemistry |
| Firebase Console | https://console.firebase.google.com/project/pkchemistry-web |
| รายชื่อสมาชิก (Authentication) | https://console.firebase.google.com/project/pkchemistry-web/authentication/users |
| ข้อมูลนักเรียน (Firestore → users) | https://console.firebase.google.com/project/pkchemistry-web/firestore |

บัญชีที่ใช้ทั้ง GitHub และ Firebase: **pitukpong36@gmail.com**

---

## ✅ สิ่งที่ตั้งค่าไว้แล้ว (23 ก.ค. 2026)

- **GitHub Pages** — deploy อัตโนมัติจาก branch `main` ทุกครั้งที่มีการแก้ไฟล์ (รอ 1–2 นาที)
- **Firebase โปรเจกต์ `pkchemistry-web`**
  - Authentication แบบ Email/Password เปิดแล้ว · โดเมนที่อนุญาต: `pitukpong36-pk.github.io`
  - Firestore ฐานข้อมูลอยู่ที่ **asia-southeast1 (สิงคโปร์)**
  - Security Rules: นักเรียนอ่าน/เขียนได้เฉพาะ `users/{uid}` ของตัวเอง · ครูอ่านได้ทุกคน
  - ⚠️ ตัวนับผู้เข้าชม (`stats/site`) และ presence ต้องใช้ rules เวอร์ชันใหม่ใน `firestore.rules`
    — **ต้องคัดลอกไปวางที่ Firestore → Rules ในคอนโซลแล้วกด Publish** ไม่งั้นเลขเข้าชมจะไม่ขยับ
- **อีเมลครู** (เห็นแดชบอร์ดครู): `pitukpong36@gmail.com`, `pitukpong36@brw.ac.th`
  - แก้ได้ 2 ที่พร้อมกัน: ตัวแปร `TEACHER_EMAILS` ใน `index.html` **และ** ฟังก์ชัน `isTeacher()` ใน `firestore.rules`
- `firebaseConfig` จริงใส่ใน `index.html` แล้ว (บรรทัด ~19207) — เว็บทำงานโหมด Cloud
- เวอร์ชันแคช Service Worker ปัจจุบัน: **`pkchem-v25`** (ใน `sw.js`) — เลขท้ายหน้าเว็บ (`APP_VERSION` ใน `index.html`) ตั้งเป็น v25 ไว้ให้ตรงกัน (ไม่บังคับต้องอัปทุกครั้ง แค่ใช้ดูว่าโหลดรุ่นไหน)
- ทดสอบครบวงจรแล้ว: สมัคร → ข้อมูลเข้า Firestore → ครูเห็นในแดชบอร์ด → คนนอกถูกปฏิเสธ ✅

### บัญชีทดสอบที่ยังอยู่ในระบบ
- `yo@gmail.com` (ชื่อ "เคมี") — บัญชีทดสอบ ลบได้ที่หน้า Authentication ในคอนโซล Firebase

---

## ✏️ วิธีแก้ไขเว็บจากนี้ไป (ผ่านเบราว์เซอร์ ไม่ต้องใช้เครื่อง)

1. เปิด https://github.com/pitukpong36-PK/pkchemistry แล้วล็อกอิน GitHub
2. คลิกไฟล์ที่ต้องการแก้ (ส่วนใหญ่คือ `index.html`) → กดไอคอน **ดินสอ ✏️** (Edit)
3. แก้เนื้อหา → กดปุ่ม **Commit changes** (ใส่คำอธิบายสั้น ๆ ว่าแก้อะไร)
4. **สำคัญมาก:** ทุกครั้งที่แก้เนื้อหา ให้แก้ไฟล์ `sw.js` ด้วย — เปลี่ยนเลขเวอร์ชันบรรทัดที่ 2 ขึ้นทีละหนึ่ง
   ```js
   const CACHE = 'pkchem-v25';   →   const CACHE = 'pkchem-v26';
   ```
   ถ้าไม่อัป ผู้ใช้เก่าจะเห็นหน้าเว็บเดิมค้างจากแคช
5. รอ 1–2 นาที เว็บจริงจะอัปเดตเอง (เช็กสถานะได้ที่แท็บ **Actions** ใน GitHub)

> 💡 แก้บนมือถือก็ได้ — เปิด github.com ในเบราว์เซอร์มือถือ ขั้นตอนเดียวกัน

---

## ⚠️ ข้อควรระวัง

- **โฟลเดอร์ในเครื่อง (`Desktop/06_PKchemistry website`) จะเก่ากว่าเว็บทันทีที่แก้ผ่าน GitHub**
  ถ้าวันหนึ่งกลับมาแก้ในเครื่อง ต้องดึงเวอร์ชันล่าสุดก่อนเสมอ ไม่งั้นจะทับงานที่แก้บนเว็บ:
  ```bash
  cd "~/Desktop/06_PKchemistry website" && git pull
  ```
- อย่าแก้/ลบไฟล์ `firestore.rules`, `firebase.json`, `.firebaserc`, `.nojekyll` ถ้าไม่แน่ใจ
- `apiKey` ใน `index.html` เป็นค่า public ของ Firebase Web โดยออกแบบ — อยู่ในโค้ดสาธารณะได้ ไม่ใช่ความลับ
- การเปลี่ยน Security Rules ต้อง deploy ผ่าน Firebase CLI หรือแก้ในหน้า Firestore → Rules ในคอนโซล (แก้ไฟล์ใน GitHub อย่างเดียวไม่มีผลกับเซิร์ฟเวอร์)

---

## 📊 การดูข้อมูลนักเรียน

- **ในเว็บ:** ล็อกอินด้วยอีเมลครู → เมนูผู้ใช้ (มุมขวาบน) → 👨‍🏫 แดชบอร์ดครู (ตาราง + Heatmap + Export CSV)
- **ใน Firebase Console:** ลิงก์ในตารางข้างบน — Authentication ดูรายชื่อ/ลบบัญชี · Firestore ดูข้อมูลดิบ
