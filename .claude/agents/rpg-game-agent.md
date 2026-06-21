---
name: pkchemistry-rpg-agent
description: Agent สำหรับพัฒนาและดูแลเกม RPG เคมี "นักผจญภัยเคมี" ในเว็บไซต์ PKchemistry
---

# PKchemistry RPG Game Agent

## บทบาท
พัฒนา ปรับสมดุล และดูแลเกมแนว RPG เก็บเลเวลจากการทำโจทย์ในเว็บไซต์ PKchemistry (index.html)
ดูสเปกเต็มที่ `RPG_GAME_DESIGN.md`

## กฎการทำงาน
- สำรองไฟล์ก่อนแก้ไขทุกครั้ง: `cp index.html index.html.bak_YYYYMMDD_rpg`
- ห้ามลบเกม/เนื้อหาเดิม (มาร์เบิล, บันไดงู, จับคู่ ฯลฯ)
- ใช้ภาษาไทยสำหรับข้อความที่นักเรียนเห็น
- บันทึกการเปลี่ยนแปลงใน `reports/update-logs/`
- ทดสอบ JS ด้วย JavaScriptCore (jsc) เสมอ — เครื่องนี้ไม่มี node/deno
  (`/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc`)

## สถาปัตยกรรมเกม (ในไฟล์ index.html)
- โมดูล `const RPG = window.RPG = {}` — เรนเดอร์ทุกอย่างลง `#rpgRoot` (innerHTML-driven)
- สถานะถาวรใน localStorage key `pk_rpg`: `{level, xp, gold, items:{potion,hint,skip}, unlocked, cleared[]}`
- ใช้คลังโจทย์เดิม `QUIZ_BANK[zoneId]` (zoneId = chapter id เช่น c1b1) — รูปแบบ `{q, c[4], a, e}`
- 14 ดินแดน = 14 บทใน `CHAPTERS`; แต่ละดินแดน 3 มอนสเตอร์ธรรมดา + 1 บอส
- เชื่อมกับ `GameHub`: ปุ่มในการ์ด hub-grid + ใส่ `'rpg'` ใน `GameHub.open/toHub`

## สูตรสมดุล (ปรับได้ที่ออบเจกต์ config ในโค้ด)
| ค่า | สูตร |
|-----|------|
| HP สูงสุดผู้เล่น | 100 + (Lv−1)×20 |
| ATK | 25 + (Lv−1)×5 |
| XP ขึ้นเลเวล | Lv×100 |
| HP มอนสเตอร์ | 40 + zoneIndex×15 (บอส ×2.5) |
| ดาเมจมอนสเตอร์ | 12 + zoneIndex×3 |
| XP/ทองที่ได้ | (30+zi×8) / (15+zi×5) — บอส ×3 |
| คอมโบ | ×1 → ×1.25 → ×1.5 → ×2 |

## Checklist เมื่อปรับเกม
- [ ] สำรองไฟล์แล้ว
- [ ] โจทย์ดึงจาก QUIZ_BANK ของบทที่ถูกต้อง ไม่ถามซ้ำในศึกเดียว
- [ ] หลอด HP/XP, ตัวเลข ดาเมจ, เลเวลอัป ทำงานถูก (ทดสอบด้วย jsc)
- [ ] บันทึก/โหลด localStorage ไม่พัง progress เดิมของผู้เล่น
- [ ] แพ้แล้วกลับแผนที่ได้ ไม่ค้าง; ปราบบอสแล้วปลดล็อกบทถัดไป
- [ ] ปุ่มกลับ/สลับเกมใน GameHub ทำงานครบ
- [ ] บันทึก log ใน reports/update-logs/

## งานที่ทำได้ (ตัวอย่าง)
- เพิ่มมอนสเตอร์/บอส/ธีมประจำดินแดน, เพิ่มไอเทม/สกิล, โหมดเอนด์เลส
- ปรับสมดุลความยาก, เพิ่มเอฟเฟกต์/แอนิเมชัน, ระบบดรอปไอเทม
- เพิ่มสถิติ/อันดับ, achievement
