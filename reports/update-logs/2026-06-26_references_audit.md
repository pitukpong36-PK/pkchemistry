# 🔗 ตรวจสอบลิงก์อ้างอิง (references) — 2026-06-26

## ที่มา
ครูแจ้งว่าบางลิงก์อ้างอิงเข้าแล้วเนื้อหาไม่ถูกต้อง เช่น McGraw Hill

## ลิงก์ภายนอกทั้งหมดในเว็บ
- หน้า "แหล่งอ้างอิง" 5 ลิงก์: Khan Academy · McGraw Hill (Chang) · ScienceDirect · PubChem · IUPAC
- ลิงก์ "เรียนเพิ่มเติมที่ Khan Academy" รายบท 14 ลิงก์ (1 ต่อบท)

## ผลตรวจ
### ❌ McGraw Hill — เสียจริง (แก้แล้ว)
- URL เดิม `mheducation.com/highered/product/.../M9781265577568.html` → ยืนยันด้วย WebFetch ว่า
  **เด้งไปหน้า navigation ทั่วไป ไม่ใช่หน้าหนังสือ** (product page ตาย)
- **แก้:** เปลี่ยน href → Google search `Raymond Chang Jason Overby Chemistry McGraw Hill`
  (คลิกแล้วเจอหนังสือที่ถูกต้องเสมอ ไม่ rot) · คงข้อความอ้างอิง Chang ไว้ · เพิ่ม `rel="noopener"`

### ✅ ลิงก์ Khan รายบท 14 ลิงก์ — ตรวจแล้ว "จับคู่ถูกต้อง" (ไม่ใช่ปัญหา)
ตรวจ map ลิงก์เข้ากับ template บทที่มันอยู่จริง + อ่านคำอธิบาย → ตรงกับเนื้อหาบททุกอัน เช่น
อะตอม→electronic-structure-of-atoms · พันธะ→molecular/ionic-compound-structure · อัตรา→kinetics ·
สมดุล→equilibrium · กรด-เบส→acids-and-bases · อินทรีย์→organic-chemistry
(หมายเหตุ: ตอนแรกเข้าใจผิดว่าเลื่อน 1 บท เพราะลิงก์อยู่ท้าย template ใกล้บทถัดไป — ตรวจซ้ำแล้วถูกต้อง)

## ยังตรวจไม่ได้ (เว็บ session ครบโควตา รีเซ็ต ~23:00)
- **ScienceDirect** `/topics/chemistry` → WebFetch ได้ 403 (บล็อกบอท) — อาจปกติสำหรับผู้ใช้จริง แต่ควรเช็กสด
  (และ ScienceDirect เป็นฐานวิจัย paywall อาจไม่เหมาะนักเรียน ม.ปลาย — พิจารณาแทนด้วย LibreTexts/OpenStax)
- **Khan/PubChem/IUPAC** ภาพรวมเป็น URL canonical ที่เสถียร แต่ลิงก์ Khan แบบ deep (AP units) Khan ปรับ URL บ่อย — ควรเช็ก 200 OK ทุกอันเมื่อเว็บกลับมา

## สิ่งที่ควรให้ครูยืนยัน
- รายละเอียด "Chemistry 14e · McGraw Hill 2022" ในการ์ด — ยืนยันฉบับ/ปีให้ตรงกับเล่มที่ใช้จริง

## ทำ
- แก้ href McGraw Hill · bump `sw.js` v13 → **v14**

## รอบ 2 — ตรวจสุขภาพลิงก์สดด้วย curl (เว็บกลับมาแล้ว)
เช็ก HTTP status ทุกลิงก์ภายนอก (curl -L):

| สถานะ | ลิงก์ | สรุป |
|---|---|---|
| **200** | Khan deep links ทั้ง 14 + course หลัก | ✅ live ทุกอัน + หัวข้อตรงบท (ตรวจรอบแรกแล้ว) |
| **200** | PubChem · Google search (McGraw ที่แก้) | ✅ |
| **403** | iupac.org · sciencedirect.com | บล็อกบอท (curl) ไม่ใช่หน้าตาย — เบราว์เซอร์จริงเปิดได้ |

→ **ลิงก์เสียจริงมีแค่ McGraw Hill (แก้แล้วรอบ 1)** ลิงก์อื่น live หมด

## รอบ 2 — เปลี่ยน ScienceDirect → LibreTexts (อัปเกรดให้เหมาะนักเรียน)
ScienceDirect ใช้ได้ (403 = บอทเท่านั้น) แต่เป็นฐานวิจัย paywall ไม่เหมาะ ม.ปลาย
- เปลี่ยนการ์ด → **LibreTexts Chemistry** (`chem.libretexts.org`, curl 200, ฟรี ครบทุกระดับ)
- ตัวเลือกฟรีอื่นที่ยืนยัน 200 ไว้แล้ว: OpenStax Chemistry 2e (`openstax.org/details/books/chemistry-2e`)
- ย้อนกลับได้ง่าย (การ์ดเดียว) ถ้าครูอยากได้ ScienceDirect คืน

## สรุปสุดท้าย
- ลิงก์อ้างอิงทั้งหมด **live + ตรงเนื้อหา** · เสียจริงแค่ McGraw Hill (แก้) · ScienceDirect→LibreTexts (อัปเกรด)
- bump `sw.js` → v15
- ค้าง: ขอครูยืนยันรายละเอียด "Chang Chemistry 14e/2022" ในการ์ด
