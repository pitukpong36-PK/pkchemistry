# บันทึกการเพิ่มแผนที่โลกแบบเดินได้ (Overworld) เกม RPG — 2026-06-17

ไฟล์: index.html | สำรอง: index.html.bak_20260617_rpg_world

## สิ่งที่เพิ่ม
แผนที่โลกแบบ **เดินตัวละครไปมาระหว่างดินแดน** (overworld trail)
- ตัวละคร 🧙 ยืนบนเส้นทางที่เชื่อม 14 ดินแดนเรียงกัน เลื่อนแนวนอนได้
- เดินด้วยปุ่ม ◀ เดิน / เดิน ▶ หรือคลิกที่ดินแดน (เฉพาะที่ปลดล็อก) → ตัวละครสไลด์เดิน (แอนิเมชัน rpgWalk)
- ยืนบนดินแดนใด แสดงการ์ดข้อมูล (ธีม/บท/สถานะ) + ปุ่ม "⚔️ เข้าดินแดน"
- ดินแดนที่ล็อกเป็น 🔒 เดินเข้าไม่ได้ · ดินแดนที่เคลียร์มี ✅ · ดินแดนที่ยืนอยู่มีวงแหวนสีส้ม (here)
- auto-scroll ให้ตัวละครอยู่กลางจอ
- สลับมุมมองได้: 🗺️ แผนที่เดิน (ค่าเริ่มต้น) ↔ 📋 รายการบท (กริดเดิมจัดกลุ่มตามเล่ม)

## จุดที่แก้ใน index.html
- state: `_default/load/save` เพิ่ม `pos` (ตำแหน่งตัวละคร) และ `mapView` ('world'|'list')
- `showMap`: กลายเป็น dispatcher (heal+clamp pos แล้วเรียก renderWorld/renderList)
- เพิ่ม `renderWorld` (เส้นทาง+ตัวละคร+ปุ่มเดิน+การ์ดข้อมูล), `renderList` (กริดเดิม), `_mapTail` (เอนด์เลส+ปุ่มล่าง+toggle)
- เพิ่ม `move/walkTo/setView/_worldInfoHTML/_renderHero/_scrollWorld` (DOM ops มี guard `typeof document`)
- `enterZone`: ตั้ง RS.pos = zi
- CSS: world-wrap/trail/line/node/hero (+ rpgWalk), world-ctrl/pos, world-info
- `RPG_NODEW=92` ระยะห่างต่อดินแดน

## ตรวจสอบ (jsc + Chrome headless)
- ค่าเริ่มต้น pos=0 mapView=world เรนเดอร์ world-trail+hero
- ขอบเขตเดิน: เดินเกินช่วงปลดล็อกไม่ได้ (บล็อกถูกต้อง), คลิกดินแดนที่ล็อกไม่เดิน
- enterZone ตั้ง pos, view toggle world↔list ใช้ได้, persistence pos/mapView ครบ
- pos ถูก clamp เมื่อ unlocked เปลี่ยน
- เคลียร์ครบ 14 ดินแดนผ่านแผนที่เดินได้จริง (driver flow ถูกต้อง)
- syntax <script> ผ่าน · ภาพจริง: ตัวละครยืนบนเส้นทาง + การ์ดข้อมูล + สลับมุมมองรายการได้
