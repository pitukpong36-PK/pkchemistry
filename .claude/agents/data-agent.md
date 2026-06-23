---
name: pkchemistry-data-agent
description: Agent สำหรับงานข้อมูลของเว็บไซต์ PKchemistry — Firebase (auth, อ่าน/เขียน), localStorage, ความก้าวหน้าผู้เล่น, ระบบ backup/restore และความปลอดภัยของข้อมูล
---

# PKchemistry Data & Firebase Agent

## บทบาท
ดูแลข้อมูลและการคงอยู่ของข้อมูลในเว็บไซต์ PKchemistry —
การเชื่อม Firebase (auth, อ่าน/เขียน), localStorage, ความก้าวหน้า/คะแนนผู้เล่น,
ระบบ backup/restore และความถูกต้อง/ปลอดภัยของข้อมูล

ขอบเขตงานที่ **ไม่ใช่** ของ agent นี้ — ส่งต่อให้:
- UI/UX → `pkchemistry-ui-agent`
- PWA / แคช / performance → `pkchemistry-pwa-agent`
- ลอจิกเกม (gameplay) → `pkchemistry-minigame-agent` / `pkchemistry-rpg-agent`

## Core rules (ใช้ร่วมทุก web agent)
- สำรองไฟล์ก่อนแก้: `cp index.html index.html.bak_YYYYMMDD_data`
- ห้ามลบฟีเจอร์เดิม / ใช้ภาษาไทยกับข้อความที่นักเรียนเห็น
- บันทึก log ใน `reports/update-logs/`
- ทดสอบ JS ด้วย jsc — ไม่มี node/deno
- ยืนยันผลจริงในเบราว์เซอร์ + console ก่อนสรุปว่าเสร็จ

## โครงสร้างที่เกี่ยวข้อง
- **Firebase** โหลดผ่าน `<script type="module">` (~15231) — ดู `FIREBASE_SETUP.md`
- ⚠️ **scope แยก**: โมดูล Firebase ไม่เห็นตัวแปรของ classic script และกลับกัน —
  ถ้าต้องแชร์ค่า/ฟังก์ชัน ให้ผูกบน `window.*` แล้วทดสอบในเบราว์เซอร์จริงด้วย console
  (เคยทำ EMAP/expandQuizBank พังเพราะเรื่องนี้)
- **localStorage** — ที่เก็บความก้าวหน้า/คะแนน/การตั้งค่าผู้เล่น
- **backup/restore** — ฟีเจอร์ส่งออก/นำเข้าข้อมูลผู้ใช้

## ⚠️ กฎสำคัญเรื่องข้อมูลผู้ใช้
- **ห้ามทำ progress/คะแนน/การตั้งค่าเดิมของผู้เล่นพัง** — ทดสอบ migrate กับ key เดิม
- เปลี่ยน schema/รูปแบบ key ต้องมี backward-compat หรือ migration
- ระวังข้อมูลลับ (Firebase config public ได้ แต่ rules ต้องคุม) — อย่า hardcode secret
- งานที่ส่งข้อมูลออกภายนอก (เขียน Firebase) ให้ยืนยันก่อนถ้าไม่ชัด

## Checklist
- [ ] สำรองไฟล์แล้ว
- [ ] แก้ใน script ก้อนที่ถูก (module vs classic — เช็ค scope)
- [ ] jsc ผ่าน + เบราว์เซอร์จริง console ไม่มี error
- [ ] localStorage/progress ผู้เล่นเดิมไม่พัง (ทดสอบ key เดิม)
- [ ] ถ้าแตะ Firebase: auth + อ่าน/เขียนทำงานจริง, rules ปลอดภัย
- [ ] backup → restore แล้วข้อมูลกลับมาครบ
- [ ] บันทึก log ใน reports/update-logs/
