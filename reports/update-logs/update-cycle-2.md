# Update Cycle 2 — รายงานการอัปเดต

**วันที่:** 2026-06-08  
**ผู้ดำเนินการ:** Claude Code (claude-sonnet-4-6)  
**ไฟล์หลัก:** index.html (11,868 → 12,121 บรรทัด, +253 บรรทัด)

---

## 1. ไฟล์สำรอง

| ไฟล์ | สร้างเมื่อ | หมายเหตุ |
|------|-----------|---------|
| `index.html.bak_20260608` | Cycle 1 | Backup ก่อน Cycle 1 |
| `index.html.bak_20260608_cycle2` | Cycle 2 | **Backup ก่อน Cycle 2** |

---

## 2. บทเรียนที่อัปเดต

### บทที่ 6 — ปริมาณสัมพันธ์ (c2b6, เคมี 2)
แทรกหัวข้อใหม่ `✏️ แบบฝึกหัดประยุกต์รวม (Update Cycle 2)` ก่อนส่วนสรุป (~บรรทัด 5115)

| โจทย์ | หัวข้อ | ทักษะหลัก |
|-------|--------|----------|
| I1 | Limiting Reagent: เผา Mg 4.86 g + O₂ 4.80 g | หาร n ด้วยสัมประสิทธิ์, excess reagent, อนุรักษ์มวล |
| I2 | %Yield: สังเคราะห์ NaCl จาก Na + Cl₂ | theoretical vs actual yield, สาเหตุ %yield < 100% |
| I3 | Mass-Mass: เผา Fe 55.8 g → Fe₂O₃ | mole ratio 4:3:2, O₂ ที่ใช้, อนุรักษ์มวล |
| I4 | Hess's Law: ΔH ของ C → CO | กลับสมการ, รวม ΔH, ตรวจสอบย้อนกลับ |

### บทที่ 7 — แก๊ส (c3b7, เคมี 3)
แทรกหัวข้อใหม่ `✏️ แบบฝึกหัดประยุกต์รวม (Update Cycle 2)` ก่อนส่วนสรุป (~บรรทัด 6599)

| โจทย์ | หัวข้อ | ทักษะหลัก |
|-------|--------|----------|
| I1 | กฎแก๊สรวม: ลูกบอลสูบลม | P₁V₁/T₁ = P₂V₂/T₂, แปลง °C→K, ตีความผล |
| I2 | PV=nRT: ถัง O₂ ในโรงพยาบาล | n=PV/RT, มวล O₂, คำนวณเวลาใช้งาน |
| I3 | Dalton's Law: แก๊สผสม N₂/O₂ | Pᵢ = nᵢRT/V, P_total, mole fraction |
| I4 | Graham's Law: CH₄ vs SO₂ | r₁/r₂ = √(M₂/M₁), ระยะทาง, ประยุกต์ฉุกเฉิน |

---

## 3. รูปแบบโจทย์ที่เพิ่ม

ทุกโจทย์มีครบตาม Project Rules:
- **problem statement** + **given information** — รวมในกล่อง `problem-statement`
- **concept/formula** — ต้นแต่ละวิธีทำ (`สูตร/แนวคิดที่ใช้:`)
- **step-by-step solution** — ขั้นที่ 1, 2, 3, 4 ทีละขั้น
- **final answer** — bold สีตัวหนา
- **quick check** — `ตรวจสอบเร็ว:` หรือ `ตรวจสอบเหตุผล:`
- ข้อเชื่อมต่อชีวิตจริง — 💡 tip ที่บริบทได้ (โรงพยาบาล, สิ่งแวดล้อม, ความปลอดภัย)

---

## 4. ตรวจสอบความถูกต้องเคมี

| โจทย์ | การตรวจสอบ |
|-------|-----------|
| บ6-I1 (Limiting Reagent) | n(Mg)=0.200, n(O₂)=0.150; Mg/2=0.100 < O₂/1=0.150 → Mg=LR ✓; mass balance: 4.86+4.80=9.66g = 8.06+1.60=9.66g ✓ |
| บ6-I2 (%Yield) | n(Na)=0.200, n(Cl₂)=0.100 (ratio 2:1 พอดี); theoretical=11.7g; %yield=10.5/11.7×100=89.7% ✓ |
| บ6-I3 (Mass-Mass) | n(Fe)=1.00; Fe:Fe₂O₃=4:2 → n=0.500; m=79.9g; O₂=0.750mol, 24.0g; 55.8+24.0≈79.8≈79.9g ✓ |
| บ6-I4 (Hess's) | ΔH=−393.5+(+283.0)=−110.5 kJ/mol; ตรวจย้อน: −110.5+(−283.0)=−393.5 ✓ |
| บ7-I1 (กฎรวม) | V₂=(1.50×2.00×308)/(293×1.00)=924/293=3.15L ✓ |
| บ7-I2 (PV=nRT) | n=(120×10.0)/(0.08206×298)=49.1mol; m=1571g; V@1atm=1200L; t=600min=10h ✓ |
| บ7-I3 (Dalton) | P(N₂)=3.94atm, P(O₂)=0.985atm, P_total=4.93atm; X(O₂)=0.200 ✓ |
| บ7-I4 (Graham) | √(64.07/16.05)=√3.993=1.998≈2.00; d(CH₄)=20.0cm ✓ |

---

## 5. โครงสร้างไฟล์หลังจาก Cycle 2

```
PKchemistry website/
├── index.html                           ← 12,121 บรรทัด (แก้ไขแล้ว)
├── index.html.bak_20260608              ← backup ก่อน Cycle 1
├── index.html.bak_20260608_cycle2       ← backup ก่อน Cycle 2 ✓
├── .claude/
│   └── agents/
│       ├── content-agent.md
│       └── review-agent.md
└── reports/
    └── update-logs/
        ├── update-cycle-1.md            ← บ4, บ5
        └── update-cycle-2.md            ← บ6, บ7 (ไฟล์นี้)
```

---

## 6. แนะนำสำหรับ Update Cycle 3

### Cycle 3 — บทที่ 8 (จลนศาสตร์เคมี) + บทที่ 9 (สมดุลเคมี)
- เพิ่มโจทย์ Rate Law จากข้อมูลทดลอง (หาอันดับปฏิกิริยา)
- เพิ่มโจทย์ Arrhenius equation — คำนวณ Ea จาก k₁, k₂, T₁, T₂
- เพิ่มโจทย์ ICE Table ครบ (หา Keq, [x] เมื่อสมดุล)
- เพิ่มโจทย์ Le Châtelier — ทำนายทิศทางการเปลี่ยนแปลง

### Cycle 4 — บทที่ 10 (กรด-เบส)
- เพิ่มโจทย์ pH, Ka, Kb
- เพิ่มโจทย์ Buffer solution (Henderson-Hasselbalch)
- เพิ่มโจทย์ Titration (จุด equivalence point)
