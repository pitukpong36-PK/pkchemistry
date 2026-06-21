# Update Cycle 1 — รายงานการอัปเดต

**วันที่:** 2026-06-08  
**ผู้ดำเนินการ:** Claude Code (claude-sonnet-4-6)  
**ไฟล์หลัก:** index.html (11,643 → 11,779 บรรทัด หลังเพิ่ม)

---

## 1. สแกนโครงสร้างโปรเจกต์

| ไฟล์ | ขนาด | สถานะ |
|------|------|--------|
| index.html | 974 KB | ไฟล์หลัก — แก้ไขแล้ว |
| chemistry-learning-center.html | ~974 KB | ต้นฉบับที่อัปโหลด — ไม่แตะ |
| index.html.bak_20260608 | 974 KB | **ไฟล์สำรอง** (สร้างก่อนแก้ไข) |
| CLAUDE_CODE_PROMPT.md | — | คำสั่งการทำงาน |
| README.md | — | คู่มือการเปิด |

---

## 2. โครงสร้างเว็บไซต์ (ก่อนแก้ไข)

เว็บไซต์เป็น **Single-page HTML** ระบบ page switching ด้วย JavaScript  
มี 4 หน้าหลัก: หน้าแรก (welcome), เนื้อหาวิชา (home), สื่อการเรียน (media), ใบความรู้ (docs)

บทเรียนในระบบ (chapters object):
| Chapter ID | บทเรียน | บรรทัดโดยประมาณ |
|---|---|---|
| c2b1 | ความปลอดภัยในห้องปฏิบัติการ | 797–1511 |
| c2b2 | โครงสร้างอะตอมและตารางธาตุ | 1513–2197 |
| c2b3 | พันธะเคมี | 2199–2978 |
| c2b4 | ปริมาณสารสัมพันธ์ (มวลและโมล) | 2980–3551 |
| c2b5 | สารละลาย | 3587–4203 |
| c2b6 | ดุลสมการและสโตอิคิโอเมทรี | 4247–5014 |
| c2b7 | แก๊ส | 5016–6292 |
| c2b8 | จลนศาสตร์เคมี | 6294–7072 |
| c2b9 | สมดุลเคมี | 7074–7819 |
| c2b10 | กรด-เบส | 7821+ |

---

## 3. งานที่ดำเนินการใน Cycle 1

### 3.1 สำรองไฟล์
- [x] สร้าง `index.html.bak_20260608` ก่อนแก้ไขทุกอย่าง

### 3.2 สร้าง Work Zones (directories)
- [x] `reports/update-logs/` — บันทึกการเปลี่ยนแปลง
- [x] `.claude/agents/` — agent definitions

### 3.3 เพิ่มโจทย์พร้อมเฉลยละเอียด

#### บทที่ 4 — ปริมาณสารสัมพันธ์ (หมวด I)
แทรกก่อน `<h3>🧠 สรุปจำง่าย...</h3>` (เดิมบรรทัด 3553)

| โจทย์ | หัวข้อ | แนวคิดหลัก |
|-------|--------|------------|
| I1 | CaCO₃ ในแคลเซียมเม็ด 50.0 g | n=m/M, N=n×Nₐ, นับอะตอม O |
| I2 | Combustion Analysis — หา empirical formula | วิเคราะห์ CO₂, H₂O → %C, %H, %O → ratio |
| I3 | % โดยมวลของยูเรีย (CH₄N₂O) | %X = (n_X·M_X / M_compound)×100 |
| I4 | หา Molecular Formula จาก % + MW | empirical × n, n = MW/EW |

#### บทที่ 5 — สารละลาย (หมวด I)
แทรกก่อน `<h3>🧠 สรุปจำง่าย...</h3>` (เดิมบรรทัด 4205)

| โจทย์ | หัวข้อ | แนวคิดหลัก |
|-------|--------|------------|
| I1 | เตรียม NaOH 0.500 M จากผง | n=M×V, m=n×M, ขั้นตอนการเตรียม volumetric |
| I2 | เจือจาง HCl 12.0 M → 0.100 M | M₁V₁=M₂V₂, ความปลอดภัย "Add Acid to Aqueous" |
| I3 | ΔTf ของสารละลาย glucose | m=n/kg, ΔTf=i·Kf·m, ประเมิน antifreeze |
| I4 | ppm ของ Pb ในน้ำดื่ม vs WHO | ppm=mg/L, ppb=μg/L, เกณฑ์ WHO 0.010 mg/L |

### 3.4 สร้าง Agent Definitions
- [x] `.claude/agents/content-agent.md` — agent เพิ่มเนื้อหา/โจทย์
- [x] `.claude/agents/review-agent.md` — agent ตรวจความถูกต้อง

---

## 4. รูปแบบโจทย์ที่เพิ่ม (ตาม Project Rules)

ทุกโจทย์มีครบตามมาตรฐาน:
- **problem statement** — คำถามชัดเจน
- **given information** — ข้อมูลที่กำหนดให้
- **concept/formula used** — สูตร/แนวคิดที่ใช้
- **step-by-step solution** — วิธีทำทีละขั้น (ขั้นที่ 1, 2, 3...)
- **final answer** — คำตอบสุดท้ายเน้นด้วย bold
- **quick check** — ตรวจสอบเร็ว (dimensional analysis หรือ back-calculation)

---

## 5. การตรวจสอบความถูกต้อง

| โจทย์ | คำนวณตรวจแล้ว | หมายเหตุ |
|-------|--------------|---------|
| บ4-I1 | ✓ | M(CaCO₃)=100.09, n=0.500, N=3.01×10²³ |
| บ4-I2 | ✓ | combustion analysis → CH₂O (EW=30) |
| บ4-I3 | ✓ | M(urea)=60.06, %N=46.6% |
| บ4-I4 | ✓ | C₃H₆O₃ MW=90.08 (lactic acid) |
| บ5-I1 | ✓ | 5.000 g NaOH → 0.500 M / 250 mL |
| บ5-I2 | ✓ | 12.0×25.0=0.100×3000 → V₂=3000 mL |
| บ5-I3 | ✓ | ΔTf=1.86°C, Tf=−1.86°C |
| บ5-I4 | ✓ | 0.015 ppm > 0.010 ppm WHO |

---

## 6. ไฟล์ที่สร้าง/แก้ไขใน Cycle 1

```
PKchemistry website/
├── index.html                          ← แก้ไขแล้ว (เพิ่มโจทย์)
├── index.html.bak_20260608             ← ไฟล์สำรองใหม่ ✓
├── .claude/
│   └── agents/
│       ├── content-agent.md            ← สร้างใหม่ ✓
│       └── review-agent.md             ← สร้างใหม่ ✓
└── reports/
    └── update-logs/
        └── update-cycle-1.md           ← ไฟล์นี้ ✓
```

---

## 7. แนะนำสำหรับ Update Cycle ถัดไป

### Cycle 2 — บทที่ 6 (ดุลสมการ) + บทที่ 7 (แก๊ส)
- เพิ่มโจทย์ Limiting Reagent แบบ step-by-step
- เพิ่มโจทย์ PV=nRT พร้อมหน่วยครบ
- เพิ่มโจทย์ Dalton's Law of Partial Pressure

### Cycle 3 — บทที่ 8 (จลนศาสตร์) + บทที่ 9 (สมดุล)
- เพิ่มโจทย์ Arrhenius equation คำนวณ Ea
- เพิ่มโจทย์ ICE table ครบ 3 กรณี
- เพิ่มโจทย์ Le Châtelier พร้อมเหตุผล

### Cycle 4 — บทที่ 10 (กรด-เบส)
- เพิ่มโจทย์ pH, Ka, buffer solution
- เพิ่มโจทย์ titration curve
