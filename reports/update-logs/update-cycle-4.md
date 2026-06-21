# Update Cycle 4 — รายงานการอัปเดต

**วันที่:** 2026-06-08  
**ผู้ดำเนินการ:** Claude Code (claude-sonnet-4-6)  
**ไฟล์หลัก:** index.html (12,407 → 12,658 บรรทัด, +251 บรรทัด)

---

## 1. ไฟล์สำรอง

| ไฟล์ | สร้างเมื่อ |
|------|-----------|
| `index.html.bak_20260608` | ก่อน Cycle 1 |
| `index.html.bak_20260608_cycle2` | ก่อน Cycle 2 |
| `index.html.bak_20260608_cycle3` | ก่อน Cycle 3 |
| `index.html.bak_20260608_cycle4` | **ก่อน Cycle 4** ✓ |

---

## 2. บทเรียนที่อัปเดต

### บทที่ 10 — กรด-เบส (c4b10, เคมี 4)
แทรกก่อน `🧠 สรุปจำง่าย (Final Summary)` (~บรรทัด 9452)

| โจทย์ | หัวข้อ | ทักษะหลัก |
|-------|--------|----------|
| I1 | pH กรดแก่ HCl, เบสแก่ NaOH, ผสมพอดี | pH=−log[H⁺], pOH, neutralization → pH=7 |
| I2 | Ka ของ CH₃COOH 0.100 M | ICE approximation, %แตกตัว, ตรวจ 5% rule |
| I3 | Buffer Henderson-Hasselbalch + เติม HCl | pH=pKa+log([A⁻]/[HA]), buffer capacity |
| I4 | Titration NH₃ + HCl: equivalence point pH | Ka(NH₄⁺)=Kw/Kb, ICE, เลือกอินดิเคเตอร์ |

### บทที่ 11 — ไฟฟ้าเคมี (c4b11, เคมี 4)
แทรกก่อน `🧠 สรุปจำง่าย` (OIL RIG section, ~บรรทัด 10474)

| โจทย์ | หัวข้อ | ทักษะหลัก |
|-------|--------|----------|
| I1 | E°cell และ ΔG°: เซลล์ Daniell Zn-Cu | E°cell=E°cat−E°an; ΔG°=−nFE°; spontaneous |
| I2 | Nernst Equation: [Zn²⁺]=0.10, [Cu²⁺]=10⁻³ | E=E°−(0.0592/n)logQ; Q=100; E=1.04V |
| I3 | Faraday's Law: ชุบ Cu 2.50A, 30 min | Q=It, mol e⁻=Q/F, mol Cu=mol e⁻/n |
| I4 | ดุล MnO₄⁻+Fe²⁺ (กรด) + คำนวณ KMnO₄ | half-reaction method, ตรวจ charge balance |

---

## 3. จุดเด่นของโจทย์ Cycle 4

### บ10-I3 Buffer
- แสดงสูตร Henderson-Hasselbalch ทั้ง 2 ขั้น: ก่อนและหลังเติม HCl
- เปรียบกับน้ำบริสุทธิ์: pH เปลี่ยน 0.09 (buffer) vs 5.00 (น้ำ)

### บ10-I4 Titration
- กรดอ่อน (NH₃) + เบสแก่ (HCl) → equivalence point pH < 7 (กรดเล็กน้อย)
- เหตุผลการเลือก/ไม่เลือก indicator พร้อมช่วง pH

### บ11-I4 Redox Balance
- ดุลสมการ MnO₄⁻/Fe²⁺ + ตรวจ charge balance + คำนวณ mole ratio → มวล KMnO₄
- เชื่อมโยง analytical chemistry (titration รีดอกซ์)

---

## 4. ตรวจสอบความถูกต้องเคมี

| โจทย์ | การตรวจสอบ |
|-------|-----------|
| บ10-I1 (pH) | HCl 0.020M→pH=1.70; NaOH 0.050M→pOH=1.30→pH=12.70; ผสมพอดี→pH=7 ✓ |
| บ10-I2 (Ka) | x=√(1.8e-5×0.1)=1.34e-3; pH=2.87; %=1.34%<5% → approx valid ✓ |
| บ10-I3 (Buffer) | pH=4.74+log(1)=4.74; หลังHCl: log(0.090/0.110)=−0.087→pH=4.65 ✓ |
| บ10-I4 (Titration) | Ka(NH₄⁺)=1e-14/1.8e-5=5.56e-10; x=√(5.56e-10×0.050)=5.27e-6; pH=5.28 ✓ |
| บ11-I1 (E°cell) | E°=0.34−(−0.76)=1.10V; ΔG°=−2×96485×1.10=−212kJ ✓ |
| บ11-I2 (Nernst) | Q=0.10/0.001=100; E=1.10−(0.0592/2)×log100=1.10−0.0592=1.04V ✓ |
| บ11-I3 (Faraday) | Q=2.50×1800=4500C; mol e⁻=4500/96485=0.04663; mol Cu=0.02332; m=1.48g ✓ |
| บ11-I4 (Redox) | charge ซ้าย=+17, ขวา=+17 ✓; n(KMnO₄)=0.1843/5=0.03686; m=5.83g ✓ |

---

## 5. สรุปโจทย์สะสมทุก Cycle

| Cycle | บท | โจทย์ใหม่ | เนื้อหาหลัก |
|-------|----|----|---|
| 1 | 4, 5 | 8 | mol/formula, สารละลาย |
| 2 | 6, 7 | 8 | stoichiometry/Hess's, gas laws |
| 3 | 8, 9 | 8 | kinetics, equilibrium |
| 4 | 10, 11 | 8 | กรด-เบส, ไฟฟ้าเคมี |
| **รวม** | **8 บท** | **32 โจทย์** | |

---

## 6. โครงสร้างไฟล์หลังจาก Cycle 4

```
PKchemistry website/
├── index.html                           ← 12,658 บรรทัด
├── index.html.bak_20260608              ← backup Cycle 1
├── index.html.bak_20260608_cycle2       ← backup Cycle 2
├── index.html.bak_20260608_cycle3       ← backup Cycle 3
├── index.html.bak_20260608_cycle4       ← backup Cycle 4 ✓
└── reports/
    └── update-logs/
        ├── update-cycle-1.md  (บ4, บ5)
        ├── update-cycle-2.md  (บ6, บ7)
        ├── update-cycle-3.md  (บ8, บ9)
        └── update-cycle-4.md  (บ10, บ11) ← ไฟล์นี้
```

---

## 7. แนะนำสำหรับ Update Cycle 5

### Cycle 5 — บทที่ 12 (เคมีอินทรีย์) + บทที่ที่เหลือ
- ตรวจสอบว่า บทที่ 12 มีเนื้อหาอะไรบ้าง (เคมี 5)
- เพิ่มโจทย์ functional groups, isomers, reaction types
- พิจารณาเพิ่ม learning objectives box ที่ต้นบทสำหรับทุกบทที่ยังขาด
- พิจารณาเพิ่ม "common mistakes" table ในบทที่ยังไม่มี
