# คู่มือเปิดใช้ระบบสมาชิกแบบคลาวด์ (Firebase)

ระบบสมาชิกของเว็บ **ทำงานได้ทันทีในโหมดเดโม** (เก็บข้อมูลในเครื่องนี้ผ่าน localStorage)
โดยไม่ต้องตั้งค่าอะไรเลย — เหมาะกับการทดลองใช้

หากต้องการ **บัญชีจริง + นับผู้ใช้ข้ามเครื่องทั่วโลก + ซิงก์ความคืบหน้าทุกอุปกรณ์**
ให้ทำตามขั้นตอนด้านล่าง (ใช้แพ็กเกจฟรี Spark plan เพียงพอสำหรับห้องเรียน)

---

## ขั้นตอน

### 1) สร้างโปรเจกต์ Firebase
1. ไปที่ https://console.firebase.google.com → **Add project**
2. ตั้งชื่อ (เช่น `pkchemistry`) → กด Continue จนเสร็จ (ปิด Google Analytics ได้)

### 2) เปิดระบบล็อกอินด้วยอีเมล
- เมนูซ้าย → **Build → Authentication → Get started**
- แท็บ **Sign-in method** → เปิด **Email/Password** → Save

### 3) สร้างฐานข้อมูล Firestore
- เมนูซ้าย → **Build → Firestore Database → Create database**
- เลือก location (เช่น `asia-southeast1`) → เริ่มที่ **Production mode**
- ไปแท็บ **Rules** วางกฎด้านล่างแล้วกด **Publish**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // ผู้ที่ล็อกอินแล้วอ่านจำนวนสมาชิก/ออนไลน์ได้
    match /users/{uid} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == uid;
    }
    match /presence/{uid} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

### 4) คัดลอกค่า config มาวางในเว็บ
- เมนูซ้าย → **Project settings (เฟือง)** → เลื่อนลงหา **Your apps**
- กดไอคอน **`</>` (Web)** → ตั้งชื่อ → Register app
- จะเห็นบล็อก `const firebaseConfig = { ... }` — **คัดลอกค่าทั้งหมด**
- เปิดไฟล์ `index.html` ค้นหาคำว่า `YOUR_API_KEY` (อยู่ในส่วน `<script type="module">` ท้ายไฟล์)
- แทนค่าทั้ง 6 บรรทัดด้วยของจริง:

```js
const firebaseConfig = {
  apiKey:            "AIza...",            // ← ของจริง
  authDomain:        "pkchemistry.firebaseapp.com",
  projectId:         "pkchemistry",
  storageBucket:     "pkchemistry.appspot.com",
  messagingSenderId: "1234567890",
  appId:             "1:1234567890:web:abcdef"
};
```

บันทึกไฟล์ → เปิดเว็บใหม่ ระบบจะสลับเป็น **โหมดคลาวด์อัตโนมัติ**
(มุมขวาบนของกล่องล็อกอินจะขึ้น "🔒 เชื่อมต่อระบบคลาวด์")

---

## ข้อควรรู้

| หัวข้อ | รายละเอียด |
|--------|-----------|
| **โหมดเดโม (ค่าเริ่มต้น)** | เก็บใน localStorage ของเบราว์เซอร์เครื่องนั้น ๆ ไม่ข้ามเครื่อง — ใช้ทดสอบ UI ได้เลย |
| **โหมดคลาวด์** | ต้องต่ออินเทอร์เน็ต บัญชีและความคืบหน้าตามผู้ใช้ทุกเครื่อง |
| **นับ "ออนไลน์"** | นับผู้ใช้ที่มีกิจกรรมภายใน 2 นาทีล่าสุด (อัปเดต heartbeat ทุก 45 วินาที) |
| **นับ "สมาชิก"** | นับจากจำนวนบัญชีทั้งหมดในคอลเลกชัน `users` |
| **โฮสต์ออนไลน์** | แนะนำอัปขึ้น Firebase Hosting / GitHub Pages / Netlify เพื่อให้ล็อกอินเสถียร (เปิดจากไฟล์ `file://` ใช้งานได้แต่บางเบราว์เซอร์อาจจำกัด) |
| **ความปลอดภัยรหัสผ่านโหมดเดโม** | โหมดเดโมเก็บรหัสแบบ hash อย่างง่าย ใช้สำหรับสาธิตเท่านั้น — ความปลอดภัยจริงต้องใช้โหมดคลาวด์ |

---

## โครงสร้างข้อมูลใน Firestore

```
users/{uid}
  ├─ name:       "น้องเคมี"
  ├─ email:      "x@example.com"
  ├─ createdAt:  <timestamp>
  └─ progress:
       ├─ chapters: { c1b1: <ms>, c1b2: <ms>, ... }   // บทที่เข้าศึกษา
       ├─ visits:   <number>                          // จำนวนครั้งเข้าเรียน
       └─ problems: <number>                          // จำนวนโจทย์ที่เปิดดู

presence/{uid}
  ├─ name:       "น้องเคมี"
  └─ lastActive: <timestamp>   // อัปเดตทุก 45 วิ ใช้คำนวณ "ออนไลน์"
```
