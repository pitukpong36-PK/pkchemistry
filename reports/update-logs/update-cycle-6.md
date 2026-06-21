# Update Cycle 6 — รายงานการอัปเดต

**วันที่:** 2026-06-08  
**ผู้ดำเนินการ:** Claude Code (claude-sonnet-4-6)  
**ไฟล์หลัก:** index.html (12,910 → 13,170 บรรทัด, +260 บรรทัด)

---

## 1. ไฟล์สำรอง

| ไฟล์ | สร้างเมื่อ |
|------|-----------|
| `index.html.bak_20260608` | ก่อน Cycle 1 |
| `index.html.bak_20260608_cycle2` | ก่อน Cycle 2 |
| `index.html.bak_20260608_cycle3` | ก่อน Cycle 3 |
| `index.html.bak_20260608_cycle4` | ก่อน Cycle 4 |
| `index.html.bak_20260608_cycle5` | ก่อน Cycle 5 |
| `index.html.bak_20260608_cycle6` | **ก่อน Cycle 6** ✓ |

---

## 2. บทเรียนที่อัปเดต

### บทที่ 2 — อะตอมและสมบัติของธาตุ (c1b2, เคมี 1)
แทรกก่อน `🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย` (~บรรทัด 2158)

| โจทย์ | หัวข้อ | ทักษะหลัก |
|-------|--------|----------|
| I1 | มวลอะตอมเฉลี่ยของ Cl จากไอโซโทป ³⁵Cl (75.77%) / ³⁷Cl | Ā = Σ(Aᵢ × fᵢ), แปลง %→สัดส่วน |
| I2 | Electron configuration Fe + Fe³⁺ + unpaired e⁻ | Aufbau, เสีย 4s ก่อน 3d, [Ar]3d⁵ = 5 unpaired |
| I3 | IE₁ anomaly: Na (496) < Al (577) < Mg (738) kJ/mol | 3p¹ ของ Al สูงพลังงาน+ถูก screen โดย 3s² → IE ต่ำกว่า Mg |
| I4 | Zeff ด้วย Slater's Rule: Na (2.20) vs Cl (6.10) | S = 0.35/0.85/1.00, อธิบาย rₐ(Na) > rₐ(Cl) |

### บทที่ 3 — พันธะเคมี (c1b3, เคมี 1)
แทรกก่อน `🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย` (~บรรทัด 3062)

| โจทย์ | หัวข้อ | ทักษะหลัก |
|-------|--------|----------|
| I1 | Lewis Structure + formal charge ของ SO₂ | FC = V−LP−½B, resonance, bond order 1.5 |
| I2 | Bond Energy: ΔH ของ H₂ + Cl₂ → 2HCl | ΔH = ΣBE(ทำลาย) − ΣBE(สร้าง) = −184 kJ |
| I3 | VSEPR: H₂O, NH₃, BF₃, CF₄ — ตาราง geometry + ขั้ว | LP ลดมุม; สมมาตร→nonpolar |
| I4 | IMF: bp(HF) >> bp(HCl) < bp(HBr) < bp(HI) | H-bond vs London dispersion; ∝ จำนวน e⁻ |

---

## 3. จุดเด่นของโจทย์ Cycle 6

### บ2-I2 Fe³⁺ unpaired electrons
- Fe³⁺ = [Ar]3d⁵ (half-filled d) เสถียรสูง → 5 unpaired e⁻ = maximum paramagnetism
- เชื่อมกับบริบทจริง: Fe₂O₃ (สนิม) ใช้ Fe³⁺

### บ2-I3 IE₁ Anomaly
- อธิบาย 2 เหตุผลที่ IE₁(Al) < IE₁(Mg): พลังงาน 3p > 3s + screening โดย 3s²
- เสริมด้วย S/P anomaly เพื่อ pattern recognition

### บ2-I4 Slater's Rule (ปฏิบัติ)
- คำนวณเชิงตัวเลข Zeff(Na) = 2.20 vs Zeff(Cl) = 6.10
- เชื่อมกับรัศมีอะตอมจริง Na=186 pm, Cl=99 pm

### บ3-I1 SO₂ Formal Charge
- ตัวอย่าง resonance structure + non-zero formal charges (S=+1, O-=-1)
- Bond order 1.5 เกิดจาก average ของ 2 resonance structures

### บ3-I4 HX boiling points
- ข้อยกเว้นที่สำคัญ: HF bp สูงกว่า HI ทั้งที่ MW ต่ำกว่า — H-bond ชนะ London
- Table แสดง bp จริง + IMF หลักสำหรับแต่ละสาร

---

## 4. ตรวจสอบความถูกต้องเคมี

| โจทย์ | การตรวจสอบ |
|-------|-----------|
| บ2-I1 (มวล Cl) | 34.969×0.7577=26.497; 36.966×0.2423=8.957; รวม=35.454 ≈ 35.45 ✓ (ตาราง=35.45 ✓) |
| บ2-I2 (Fe config) | Fe: [Ar]3d⁶4s² (26 e⁻ ✓); Fe³⁺: เสีย 4s²+1×3d = [Ar]3d⁵ (23 e⁻ ✓); unpaired=5 (Hund rule ✓) |
| บ2-I3 (IE₁) | Na<Al<Mg: 496<577<738 ✓; Al 3p¹ สูงกว่า 3s, Mg 3s² ต้องใช้พลังงานมากกว่าลดอย่างคาดไม่ถึง ✓ |
| บ2-I4 (Zeff) | Na: S=0+6.8+2.0=8.8; Zeff=2.2 ✓; Cl: S=2.1+6.8+2.0=10.9; Zeff=6.1 ✓; ratio 6.1/2.2 อธิบาย r ต่าง ✓ |
| บ3-I1 (SO₂ FC) | รวม valence e⁻=18 ✓; FC(S)=+1, FC(O=)=0, FC(O-)=-1; net=0 ✓ |
| บ3-I2 (Bond Energy) | ΔH=678−862=−184 kJ ✓; ค่าจริงจาก ΔH°f(HCl)=−92.3→2×(−92.3)=−184.6 kJ ≈ ✓ |
| บ3-I3 (VSEPR) | H₂O: 2BP+2LP→bent~104.5° polar ✓; BF₃: 3BP→trigonal planar 120° nonpolar ✓ |
| บ3-I4 (bp HX) | HF bp=+19.5°C > HI=-35.5°C ทั้งที่ M(HI)=128>>M(HF)=20: H-bond ชนะ London ✓ |

---

## 5. สรุปโจทย์สะสมทุก Cycle

| Cycle | บท | โจทย์ใหม่ | เนื้อหาหลัก |
|-------|----|----|---|
| 1 | 4, 5 | 8 | mol/formula, สารละลาย |
| 2 | 6, 7 | 8 | stoichiometry/Hess's, gas laws |
| 3 | 8, 9 | 8 | kinetics, equilibrium |
| 4 | 10, 11 | 8 | กรด-เบส, ไฟฟ้าเคมี |
| 5 | 12, 13 | 8 | เคมีอินทรีย์, พอลิเมอร์ |
| 6 | 2, 3 | 8 | อะตอม/ตารางธาตุ, พันธะเคมี |
| **รวม** | **12 บท** | **48 โจทย์** | |

---

## 6. โครงสร้างไฟล์หลังจาก Cycle 6

```
PKchemistry website/
├── index.html                           ← 13,170 บรรทัด
├── index.html.bak_20260608              ← backup Cycle 1
├── index.html.bak_20260608_cycle2       ← backup Cycle 2
├── index.html.bak_20260608_cycle3       ← backup Cycle 3
├── index.html.bak_20260608_cycle4       ← backup Cycle 4
├── index.html.bak_20260608_cycle5       ← backup Cycle 5
├── index.html.bak_20260608_cycle6       ← backup Cycle 6 ✓
└── reports/
    └── update-logs/
        ├── update-cycle-1.md  (บ4, บ5)
        ├── update-cycle-2.md  (บ6, บ7)
        ├── update-cycle-3.md  (บ8, บ9)
        ├── update-cycle-4.md  (บ10, บ11)
        ├── update-cycle-5.md  (บ12, บ13)
        └── update-cycle-6.md  (บ2, บ3) ← ไฟล์นี้
```

---

## 7. บทที่ยังเหลือสำหรับ Update Cycle 7

### Cycle 7 — บทที่ที่ยังไม่มีโจทย์หมวด I:
- **บทที่ 1** (c1b1) — ความปลอดภัยและทักษะในปฏิบัติการเคมี (เลขนัยสำคัญ, SI units, การแยกสาร)
- **บทที่ 14** (c6b14) — เคมีกับการแก้ปัญหา (สิ่งแวดล้อม, อาหาร, Green Chemistry)

### แนวทางโจทย์สำหรับ Cycle 7:
- บ1: เลขนัยสำคัญ, Dimensional Analysis, ความเที่ยง vs ความแม่น, เทคนิคการแยกสาร
- บ14: CO₂ greenhouse effect, ฝนกรด pH, ozone depletion (CFC), Green Chemistry Atom Economy
