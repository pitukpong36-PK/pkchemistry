# แผนสร้าง Interactive Labs (โหมดอัตโนมัติ) — resumable

อัปเดตล่าสุด: 2026-06-20 · ทำทีละแล็บให้จบ (build→test node→backup→tick ที่นี่) เพื่อกลับมาทำต่อได้ถ้า context หมด

## วิธีกลับมาทำต่อ (ถ้า session ใหม่)
1. อ่านไฟล์นี้ดูว่าแล็บไหนยัง `[ ]`
2. โครงสร้าง: โมดูล `Lab` (window.Lab) ใน `<script type="module">` ก่อนบล็อก RPG · แท็บ `#tool-lab` > `#labRoot` มีแล้ว
3. เพิ่มแล็บ = (ก) มีใน `LABS` array แล้ว (ข) เพิ่ม case ใน `Lab.open(id)` (ค) เขียน render fn + handlers (ง) เพิ่ม CSS
4. ทดสอบ: `node --check` บล็อกโมดูล + validate logic ด้วย node · แล้ว backup `index.html.bak_*_<lab>`
5. ดู [[interactive-labs]] memory + reports/update-logs/2026-06-20_lab_vsepr.md เป็นแม่แบบ

## สถานะ
- [x] **VSEPR** (c1b3) — รูปร่างโมเลกุล · เสร็จ 2026-06-20 (update-log: 2026-06-20_lab_vsepr.md)
- [x] **Dilution เจือจางสารละลาย** (c2b5) — id `dilute` · เสร็จ 2026-06-20 · node math OK (v2=100,m2=1)
- [x] **Gas Laws กฎแก๊ส** (c3b7) — id `gas` · เสร็จ 2026-06-20 · node math OK (Boyle P=2.463, PV=nRT)
- [x] **Titration ไทเทรต** (c4b10) — id `titrate` · เสร็จ 2026-06-20 · node math OK (pH 1→7→12.5)

- [x] **Reaction Rate อัตราการเกิดปฏิกิริยา** (c3b8) — id `rate` · เสร็จ 2026-06-20 · node OK (×2/10°C, powder+cat=7.5) · กราฟ [A]-เวลา + แผนภาพ Ea
- [x] **Equilibrium สมดุลเคมี** (c3b9) — id `equil` · เสร็จ 2026-06-20 · node OK (เลอชาเตอลิเอ N₂+3H₂⇌2NH₃, shift stoich 1:3:2)

- [x] **Electrochem เซลล์ไฟฟ้าเคมี** (c4b11) — id `electro` · เสร็จ 2026-06-20 · node OK (Daniell 1.10V, Mg-Ag 3.17V ดุล e⁻)

- [x] **Atom โครงสร้างอะตอม** (c1b2) — id `atom` · เสร็จ 2026-06-20 · node OK (econfig Na 2,8,1; ไอออน Na⁺/O²⁻=2,8) · แบบจำลองโบร์ + ไอโซโทป/ไอออน

- [x] **Stoichiometry ปริมาณสัมพันธ์** (c2b6) — id `stoich` · เสร็จ 2026-06-20 · node OK (limiting reagent, ξ, excess) · 4 ปฏิกิริยา

- [x] **Organic เคมีอินทรีย์** (c5b12) — id `organic` · เสร็จ 2026-06-20 · node OK (สูตร/สูตรย่อ/ชื่อ ไฮโดรคาร์บอน) · 2 โหมด: ไฮโดรคาร์บอน + หมู่ฟังก์ชัน 8 ชนิด

- [x] **Polymer พอลิเมอร์** (c5b13) — id `polymer` · เสร็จ 2026-06-20 · node OK (เติม→ไม่มีผลพลอยได้, ควบแน่น→น้ำ) · 10 พอลิเมอร์ + สายโซ่
- [x] **Environment เคมีกับสิ่งแวดล้อม** (c6b14) — id `enviro` · เสร็จ 2026-06-20 · node OK (carbon footprint) · 2 โหมด: ปัญหา 6 เรื่อง + คาร์บอนฟุตพรินต์

## ✅ เสร็จครบ 12 แล็บแล้ว — ครบทุกบทเนื้อหา c1b2–c6b14 (2026-06-20)
(c1b1 ความปลอดภัยแล็บ ไม่ต้องทำ sim) · build + node --check + validate + backup (index.html.bak_*_labs12)
update-logs: _labs_all, _labs_rate_equil, _lab_electro, _lab_atom, _lab_stoich, _lab_organic, _lab_polymer_enviro

## หมายเหตุ design (อ้างอิงตอนสร้าง)
- Dilution: input C₁,V₁ + เติมน้ำ → V₂,M₂,dilution factor · สีของเหลว opacity ∝ ความเข้มข้น · บีกเกอร์ SVG 2 ใบ
- Gas: เลือกโหมด (ตัวแปรคงที่) → ปรับ 1 ตัว คำนวณตัวตาม ผ่าน PV=nRT (R=0.0821) · กระบอกสูง ∝ V · อนุภาค N ∝ n · ความเร็วสั่น ∝ T (CSS) · เกจ P
- Titration: 25 mL 0.1 M HCl + 0.1 M NaOH · pH จากโมล H⁺/OH⁻ เหลือ/ส่วนเกิน · จุดสมมูล 25 mL pH 7 · กราฟ SVG polyline pH0–14 vs V0–50 · ฟีนอล์ฟทาลีน ไม่มีสี→ชมพู (~pH8.2)
