# Update Cycle 5 — รายงานการอัปเดต

**วันที่:** 2026-06-08  
**ผู้ดำเนินการ:** Claude Code (claude-sonnet-4-6)  
**ไฟล์หลัก:** index.html (12,658 → 12,910 บรรทัด, +252 บรรทัด)

---

## 1. ไฟล์สำรอง

| ไฟล์ | สร้างเมื่อ |
|------|-----------|
| `index.html.bak_20260608` | ก่อน Cycle 1 |
| `index.html.bak_20260608_cycle2` | ก่อน Cycle 2 |
| `index.html.bak_20260608_cycle3` | ก่อน Cycle 3 |
| `index.html.bak_20260608_cycle4` | ก่อน Cycle 4 |
| `index.html.bak_20260608_cycle5` | **ก่อน Cycle 5** ✓ |

---

## 2. บทเรียนที่อัปเดต

### บทที่ 12 — เคมีอินทรีย์ (เคมี 5)
แทรกก่อน `🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย` (~บรรทัด 11264)

| โจทย์ | หัวข้อ | ทักษะหลัก |
|-------|--------|----------|
| I1 | กฎ Markovnikov: เติม HBr ให้ propene | H ไป C ที่มี H มากกว่า, 2° carbocation เสถียรกว่า 1° |
| I2 | Esterification: สังเคราะห์ ethyl acetate | %yield, Atom Economy, สาเหตุ %yield < 100% |
| I3 | หมู่ฟังก์ชัน 5 กลุ่ม: -OH, -CHO, -CO-, -COOH, -COO- | ตารางสรุป, เคล็ดลับแยก aldehyde vs ketone |
| I4 | Tollens test + Benedict test | oxidize aldehyde → carboxylate + Ag mirror, Cu₂O |

### บทที่ 13 — พอลิเมอร์ (เคมี 5)
แทรกก่อน `🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย` (~บรรทัด 12013)

| โจทย์ | หัวข้อ | ทักษะหลัก |
|-------|--------|----------|
| I1 | Addition Polymer: degree of polymerization PE (56,100 g/mol) | n = MW/MW(repeat), mol monomer = mol repeat unit |
| I2 | Ring-opening Polymer: Nylon-6 จาก caprolactam | MW(repeat) = MW(monomer), เปรียบ 3 ประเภท polymerization |
| I3 | โปรตีน: peptide bonds + MW polypeptide 50 AA | (n-1) bonds, MW = n×128 - (n-1)×18, primary vs secondary |
| I4 | PLA Bioplastic: Atom Economy + Green Chemistry | AE = 72.06/90.08×100 = 80.0%, by-product H₂O harmless |

---

## 3. จุดเด่นของโจทย์ Cycle 5

### บ12-I1 Markovnikov
- อธิบายผ่าน carbocation stability (2° > 1°) ไม่ใช่แค่ท่องกฎ
- ตรวจสอบ molecular formula: C₃H₆ + HBr → C₃H₇Br ✓

### บ12-I2 Esterification
- คำนวณ AE (83.0%) + %yield (80.1%) ในโจทย์เดียว
- เชื่อมโยงแนวคิด Green Chemistry (by-product H₂O)

### บ12-I3 หมู่ฟังก์ชัน
- ตาราง HTML สรุป 5 สารพร้อมกัน
- เคล็ดลับจำ: aldehyde = carbonyl ปลายโซ่, ketone = carbonyl กลางโซ่

### บ13-I2 เปรียบ 3 ประเภท Polymerization
- ตาราง addition vs ring-opening vs condensation
- ชัดเจนว่า Nylon-6 (ring-opening) ≠ Nylon-6,6 (condensation)

### บ13-I3 โปรตีน
- สองวิธีคำนวณ MW ให้ผลใกล้กัน (5,518 vs 5,500 Da)
- ตารางเปรียบ primary vs secondary structure

---

## 4. ตรวจสอบความถูกต้องเคมี

| โจทย์ | การตรวจสอบ |
|-------|-----------|
| บ12-I1 (Markovnikov) | H ไป C3 (2H) → 2° carbocation C2+ → Br ไป C2 → 2-bromopropane · สูตร C₃H₆+HBr→C₃H₇Br ✓ |
| บ12-I2 (Esterification) | n(acid)=12.0/60.05=0.200, n(alcohol)=9.20/46.07=0.200 → theo=17.6g · %yield=14.1/17.6×100=80.1% · AE=88.11/106.12×100=83.0% ✓ |
| บ12-I3 (Functional Groups) | ตรวจ: CH₃COOH มี C=O + OH ใน -COOH (กรด ไม่ใช่ ketone) · CH₃COOC₂H₅ มี -COO- (ester ≠ acid) ✓ |
| บ12-I4 (Tollens) | RCHO + 2Ag⁺ → RCOO⁻ + 2Ag⁰ · balance: 2e⁻ ส่ง (CHO→COO⁻) = 2e⁻ รับ (2Ag⁺→2Ag) ✓ |
| บ13-I1 (PE) | n=56,100/28.05=2,000 · mol(C₂H₄) สำหรับ 1kg = 1000/28.05 = 35.7 mol ✓ |
| บ13-I2 (Nylon-6) | MW(repeat)=6(12.01)+11(1.008)+14.01+16.00=113.16 · n=10,000/113.16=88.4≈88 ✓ |
| บ13-I3 (Protein) | 50 AA → 49 bonds · MW=50×128−49×18.02=6400−882=5518 Da ✓ |
| บ13-I4 (PLA) | repeat C₃H₄O₂: 3(12.01)+4(1.008)+2(16.00)=72.06 · AE=72.06/90.08×100=80.0% · check: 90.08−72.06=18.02=H₂O ✓ |

---

## 5. สรุปโจทย์สะสมทุก Cycle

| Cycle | บท | โจทย์ใหม่ | เนื้อหาหลัก |
|-------|----|----|---|
| 1 | 4, 5 | 8 | mol/formula, สารละลาย |
| 2 | 6, 7 | 8 | stoichiometry/Hess's, gas laws |
| 3 | 8, 9 | 8 | kinetics, equilibrium |
| 4 | 10, 11 | 8 | กรด-เบส, ไฟฟ้าเคมี |
| 5 | 12, 13 | 8 | เคมีอินทรีย์, พอลิเมอร์ |
| **รวม** | **10 บท** | **40 โจทย์** | |

---

## 6. โครงสร้างไฟล์หลังจาก Cycle 5

```
PKchemistry website/
├── index.html                           ← 12,910 บรรทัด
├── index.html.bak_20260608              ← backup Cycle 1
├── index.html.bak_20260608_cycle2       ← backup Cycle 2
├── index.html.bak_20260608_cycle3       ← backup Cycle 3
├── index.html.bak_20260608_cycle4       ← backup Cycle 4
├── index.html.bak_20260608_cycle5       ← backup Cycle 5 ✓
└── reports/
    └── update-logs/
        ├── update-cycle-1.md  (บ4, บ5)
        ├── update-cycle-2.md  (บ6, บ7)
        ├── update-cycle-3.md  (บ8, บ9)
        ├── update-cycle-4.md  (บ10, บ11)
        └── update-cycle-5.md  (บ12, บ13) ← ไฟล์นี้
```

---

## 7. แนะนำสำหรับ Update Cycle 6

### Cycle 6 — บทที่ 14 (เคมีกับการแก้ปัญหา) หรือทบทวนรวม
- บทที่ 14 อาจเป็นบทสรุปประยุกต์ — พิจารณาโจทย์บูรณาการหลายบท
- เพิ่ม learning objectives box ที่ต้นบทสำหรับทุกบทที่ยังขาด
- พิจารณาเพิ่ม "practice quiz" แบบ multiple-choice สั้นๆ สำหรับแต่ละบท
- Review ความถูกต้องของโจทย์ H-section เดิมในบทที่ 12–13
