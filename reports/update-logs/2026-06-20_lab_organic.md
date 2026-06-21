# 2026-06-20 · เพิ่มแล็บ เคมีอินทรีย์ c5b12 → รวม 10 แล็บ

## 🧬 เคมีอินทรีย์ — id `organic` (2 โหมด)

### โหมดไฮโดรคาร์บอน
- เลือกประเภท: แอลเคน / แอลคีน / แอลไคน์ + slider จำนวนคาร์บอน (1–8, แอลคีน/แอลไคน์ ≥2)
- คำนวณสูตรโมเลกุล: CₙH₂ₙ₊₂ / CₙH₂ₙ / CₙH₂ₙ₋₂ + สูตรย่อ (เช่น CH₃–CH₂–CH₃, CH₂=CH₂, CH≡CH)
- โครงสร้างแบบเส้น (skeletal SVG zigzag) + พันธะคู่/สามที่ตำแหน่ง 1
- ชื่อ IUPAC ไทย/อังกฤษ (มีเทน…ออกเทน / -อีน / -ไอน์) + สูตรทั่วไป + ดีกรีความไม่อิ่มตัว

### โหมดหมู่ฟังก์ชัน (8 ชนิด)
แอลกอฮอล์ –OH · แอลดีไฮด์ –CHO · คีโตน C=O · กรดคาร์บอกซิลิก –COOH · เอสเทอร์ –COO– ·
อีเทอร์ R–O–R · เอมีน –NH₂ · แฮโลแอลเคน –X — แสดงหมู่ฟังก์ชัน การเรียกชื่อ ตัวอย่าง และสมบัติเด่น

## โครงสร้าง
- `LABS` 10 รายการ · `Lab.open` สาขา organic · state ORG={mode,hcType,nC,fg}
- ข้อมูล: `ORG_HC` (3 ประเภท), `ORG_FG` (8 หมู่) · helper `_sub` (subscript), `_orgCond`, `_skeletal`
- ฟังก์ชัน: renderOrganic/orgMode/orgType/orgN/orgFG

## การทดสอบ (node)
- สูตร: CH₄, C₃H₈, C₈H₁₈, C₂H₄, C₃H₆, C₂H₂, C₃H₄ ✓
- สูตรย่อ: methane CH₄, propane CH₃-CH₂-CH₃, ethene CH₂=CH₂, ethyne CH≡CH, propyne ✓
- `node --check` โมดูล (3792 บรรทัด) — syntax OK · backup: index.html.bak_20260620_*_labs10

## แล็บทั้งหมด (10): atom(c1b2)·vsepr(c1b3)·dilute(c2b5)·stoich(c2b6)·rate(c3b8)·equil(c3b9)·gas(c3b7)·titrate(c4b10)·electro(c4b11)·organic(c5b12)
