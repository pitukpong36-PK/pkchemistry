# 2026-06-20 · เพิ่มแล็บ เซลล์ไฟฟ้าเคมี (กัลวานิก) c4b11 → รวม 7 แล็บ

## 🔋 เซลล์ไฟฟ้าเคมี — id `electro`
- เลือกขั้วโลหะ 2 ชนิดจาก 14 ชนิด (dropdown) หรือกด preset (เซลล์แดเนียล Zn–Cu, Cu–Ag, Mg–Cu)
- ตาราง `ELECTRO`: ค่า E° รีดักชันมาตรฐาน Li(−3.04) … Au(+1.50) พร้อมไอออน/จำนวน e⁻/ชื่อไทย
- คำนวณ: แอโนด = E° ต่ำกว่า (ออกซิเดชัน) · แคโทด = E° สูงกว่า (รีดักชัน) · E°cell = E°แคโทด − E°แอโนด
- แผนภาพเซลล์ SVG: โวลต์มิเตอร์ + ลวด + ลูกศร e⁻ (แอโนด→แคโทด) + สะพานเกลือ + 2 บีกเกอร์ + ขั้วโลหะ + ป้าย (−)/(+)
- ครึ่งปฏิกิริยา (ออกซิเดชัน/รีดักชัน) + ปฏิกิริยารวม พร้อมดุลอิเล็กตรอนอัตโนมัติ (lcm ของจำนวน e⁻)
- บอกความเกิดเอง (E°cell > 0) + เคล็ด AN-OX/RED-CAT
- กันเลือกโลหะซ้ำ (แสดงคำเตือน)

## โครงสร้าง
- `LABS` 7 รายการ · `Lab.open` สาขา electro · state ECH={a,b}
- ฟังก์ชัน: renderEch/_em/_echSvg/_gcd/echSet/echPreset
- CSS: `.lab-sel` (dropdown)

## การทดสอบ (node)
- Daniell Zn–Cu: anode Zn, cathode Cu, E°cell=1.10 V, รวม "Zn + Cu²⁺ → Zn²⁺ + Cu" ✓
- สลับข้าง (Cu ซ้าย, Zn ขวา): ยังระบุ Zn เป็นแอโนด, E°cell เท่าเดิม ✓
- Mg–Ag: anode Mg, cathode Ag, E°cell=3.17 V, รวม "Mg + 2Ag⁺ → Mg²⁺ + 2Ag" (ดุล e⁻) ✓
- `node --check` โมดูล (3628 บรรทัด) — syntax OK · backup: index.html.bak_20260620_*_labs7

## แล็บทั้งหมด (7): vsepr(c1b3)·dilute(c2b5)·rate(c3b8)·equil(c3b9)·gas(c3b7)·titrate(c4b10)·electro(c4b11)
