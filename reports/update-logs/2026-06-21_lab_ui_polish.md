# 2026-06-21 · ปรับ UI ห้องแล็บให้สวยขึ้น (CSS polish)

ปรับเฉพาะหน้าตา ไม่แตะ logic — ใช้ CSS token เดิม รองรับ dark mode

## สิ่งที่ปรับ
- **การ์ดฮับ (.lab-card)**: มุมโค้ง 18px, แถบ accent ไล่สีด้านบนโผล่ตอน hover (::before), ไอคอนอยู่ในแบดจ์สี่เหลี่ยมมน, เงา/ยกตัวตอน hover นุ่มขึ้น
- **แถบหัวแล็บใหม่ (.lab-head/.lab-back)**: ใช้ร่วมทุกแล็บ — เปลี่ยน `Lab._labHead` ให้ใช้คลาส + ปรับ VSEPR ให้ใช้ `_labHead` ด้วย (เดิมเขียน header เอง)
- **เวที (.vsepr-stage)**: พื้นกราฟจุด (radial-gradient dotted) + border + จัดกึ่งกลางแนวตั้ง + min-height
- **แผงข้อมูล (.vs-info)**: การ์ดขาวเงานุ่ม + ค่าหลัก (.vs-axe) เป็นแบนเนอร์ไล่สีเขียว ตัวอักษรขาว
- **.vs-stat**: เส้นคั่นแบบ dashed, สี label/ค่าแยกชัด
- **.vs-chip / .vs-btn**: hover/active โดดเด่นขึ้น (เงา, ยกตัว)
- **animation labFade** ตอน render + **responsive** (≤640px stack เป็นคอลัมน์เดียว)

## ทดสอบ
- `node --check` โมดูล — OK
- headless render ทั้ง 12 แล็บ — 12/12 OK (รวม hub + การโต้ตอบ)
- เปิด http://localhost:8765 ตรวจในเบราว์เซอร์จริง · backup: index.html.bak_20260621_*_labui
