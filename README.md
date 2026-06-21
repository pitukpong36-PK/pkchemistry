# PKchemistry website

ไฟล์สำคัญ:
- index.html : ไฟล์หลักสำหรับเปิดเว็บไซต์ (ข้อมูลคลังสื่อฝังอยู่ในไฟล์นี้แล้ว ที่บล็อก `id="media-data"`)
- data/media.json : สำเนาข้อมูลสื่อสำหรับใช้ตอนอัปขึ้นเว็บจริง (แก้แล้วเห็นผลโดยไม่ต้องแตะ HTML)
- sw.js, manifest.webmanifest, icon.svg : ไฟล์สำหรับระบบ PWA (เปิดเป็นแอป/ออฟไลน์)
- chemistry-learning-center.html : ไฟล์ต้นฉบับที่อัปโหลดมา

วิธีเปิดบน Mac (ออฟไลน์):
ดับเบิลคลิก `index.html` ได้เลย — ใช้งานได้ครบทุกหน้ารวมถึง "คลังสื่อ"
(เพราะข้อมูลสื่อฝังอยู่ในไฟล์แล้ว ไม่ต้องรันเซิร์ฟเวอร์)

แก้/เพิ่มสื่อ (ตอนใช้ออฟไลน์):
แก้ที่บล็อก `<script type="application/json" id="media-data">` ในไฟล์ `index.html`

วิธีอัปขึ้นเว็บจริง (ภายหลัง):
อัปโหลดทุกไฟล์รวมโฟลเดอร์ `data/` ขึ้นโฮสต์ที่เสิร์ฟผ่าน https เช่น
GitHub Pages / Netlify / Firebase Hosting
- เมื่อเปิดผ่าน http(s) เว็บจะดึง `data/media.json` มาใช้แทนข้อมูลที่ฝังในหน้าโดยอัตโนมัติ
- ดังนั้นถ้าจะแก้สื่อหลังอัปขึ้นเว็บ ให้แก้ที่ `data/media.json` (service worker ตั้งเป็น network-first จึงเห็นผลทันที)
- แนะนำให้ข้อมูลในบล็อก `media-data` กับ `data/media.json` ตรงกัน

วิธีเปิดด้วย Claude Code:
cd "/Users/pitukpong.kumdang/Desktop/PKchemistry website"
claude

หมายเหตุ:
หากคำสั่ง claude ใช้ไม่ได้ ให้ติดตั้ง Claude Code ให้เสร็จก่อน แล้วตรวจด้วย:
claude --version
