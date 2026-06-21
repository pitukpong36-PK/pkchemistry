# บันทึก: จุดพักฟื้น + หีบลึกลับของหายาก เกม RPG — 2026-06-17

ไฟล์: index.html | สำรอง: index.html.bak_20260617_rpg_rest_rare

## สิ่งที่เพิ่ม
### 1) จุดพักฟื้น ⛲ (NPC น้ำพุศักดิ์สิทธิ์) — 2 จุดบนเส้นทาง (after 2, 8)
- ใช้ซ้ำได้ · ฟื้น HP/MP เต็ม + สุ่ม "พร" 1 อย่างสำหรับดินแดนถัดไป:
  - 🙏 ATK +25% ตลอดศึก · 🙏 ลดดาเมจศัตรู 30% · 🙏 เริ่มศึกพร้อมเกราะธาตุ
- พรเก็บใน RS.buff ใช้ตอน enterZone (เซ็ต RB.atkMul/dmgMul/shield + buffName) แล้วล้างค่า แสดงชิป 🙏 ในหน้าต่อสู้

### 2) หีบลึกลับ 💎 (ของหายาก) — 2 ใบ (after 6, 10)
- เปิดได้ครั้งเดียว สุ่มรางวัลตามความหายาก:
  - 55% ทอง 60–140 · 30% ไอเทมสุ่ม 2 ชิ้น · 12% ชุดของหายาก (ยา×2 คำใบ้×2 +ทอง80)
  - 3% **ของถาวร (legendary)**: ⚔️ ATK +3 / 🔮 MP สูงสุด +10 / 🛡️ HP สูงสุด +20 (ถาวร)
- โบนัสถาวรเก็บใน RS.bonus → รวมเข้าสูตรพลังผ่าน helper `RPG.atk()/maxHP()/maxMP()`

## จุดที่แก้ใน index.html
- state: เพิ่ม `buff` (พรชั่วคราว) + `bonus{atk,hp,mp}` (ถาวร) + `stats.mystery` (_default/load/save)
- เพิ่ม helper `RPG.atk()/maxHP()/maxMP()` (สูตรพื้นฐาน + bonus) และ refactor ทุกจุดที่ใช้พลังให้เรียก helper
- combat: ดาเมจตอบถูก/สกิล ×RB.atkMul · ดาเมจตอบผิด ×RB.dmgMul
- เพิ่ม `RPG_MYSTERY/RPG_RESTS` + `RPG.openMystery/RPG.rest`; วาง after ไม่ทับหีบเดิม (ตรวจแล้ว)
- renderWorld: วาดหีบลึกลับ 💎 + จุดพักฟื้น ⛲ บนเส้นทาง
- enterZone: ใช้พร (buff) แล้วล้าง · renderBattle: แสดงชิปพร
- showStats: แสดงโบนัสถาวร + achievement 💎 ขุมทรัพย์ลึกลับ (เปิดหีบลึกลับครบ 2); ปรับ achievement นักล่าสมบัติให้นับเฉพาะหีบปกติ 6 ใบ
- CSS: world-rest, world-chest.mystery (เรืองแสงม่วง), rpg-buff

## ตรวจสอบ (jsc + Chrome headless)
- ไม่มีตำแหน่งทับกัน (chest 1,3,5,7,9,11 · rest 2,8 · mystery 6,10)
- helper พลัง+โบนัส: ฐาน 25/100/30 → +bonus = 28/120/40 ถูกต้อง
- หีบลึกลับสุ่มครบทุกชั้น (ทอง/ไอเทม/ชุด/legendary ถาวร), reachability + กันเปิดซ้ำ
- จุดพักฟื้น: ฟื้นเต็ม + สุ่มพร, ใช้ซ้ำได้, ยังไม่ถึงใช้ไม่ได้
- พรทำงานในศึก (atkMul/shield/dmgMul) แล้วล้างค่า · guard ลดดาเมจ 12→8 ถูกต้อง
- persistence buff/bonus ครบ · regression เคลียร์ครบ 14 บทยังผ่าน
- syntax <script> ผ่าน · ภาพจริง: ⛲ + 💎 บนเส้นทาง, MP 70/70 (รวมโบนัส +10)
