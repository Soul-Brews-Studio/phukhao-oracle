---
title: # คัมภีร์ขยายความรู้ — Knowledge Expansion Process
tags: [knowledge-expansion, oracle-learn, indexing, search-not-found, github-issues, speech-to-text, aliases, process, คัมภีร์]
created: 2026-01-22
source: Phukhao Oracle — Block Mountain prep session 2026-01-22
---

# # คัมภีร์ขยายความรู้ — Knowledge Expansion Process

# คัมภีร์ขยายความรู้ — Knowledge Expansion Process

## เมื่อไหร่ต้องใช้?

เมื่อ `oracle_search` **ไม่เจอ** สิ่งที่ต้องการ แต่รู้ว่าข้อมูลมีอยู่ที่อื่น

---

## กระบวนการ 5 ขั้นตอน

### 1. ค้นหาใน Oracle MCP ก่อน

```
oracle_search(query="keyword ที่ต้องการ")
```

**ถ้าเจอ** → จบ ใช้ข้อมูลได้เลย
**ถ้าไม่เจอ** → ไปขั้นตอน 2

### 2. ค้นหาแหล่งอื่น

| แหล่ง | วิธีค้นหา |
|-------|----------|
| GitHub Issues | `gh issue list --repo [repo]` → `gh issue view [number] --comments` |
| GitHub PRs | `gh pr list` → `gh pr view [number]` |
| Codebase | `Grep`, `Glob`, `Read` |
| Web | `WebSearch`, `WebFetch` |
| Other repos | `/learn [repo]` |

### 3. รวบรวมและจัดรูปแบบ

เขียน Markdown ที่มี:
- **Title** ชัดเจน
- **Tables** สำหรับข้อมูลเปรียบเทียบ
- **Quotes** สำหรับ wisdom สำคัญ
- **Code blocks** สำหรับ patterns
- **Searchable keywords** ในเนื้อหา

### 4. Index เข้า Oracle MCP

```
oracle_learn(
  pattern="[Markdown content]",
  concepts=["keyword1", "keyword2", ...],
  source="[แหล่งที่มา]"
)
```

**Tips:**
- ใส่ `concepts` ที่ครอบคลุม (ทั้งไทย+อังกฤษ)
- ใส่ aliases และ typos ที่อาจเกิดขึ้น
- ระบุ `source` เพื่อ traceability

### 5. ทดสอบการค้นหา

```
oracle_search(query="keyword ที่เคยไม่เจอ")
```

**ต้องเจอ** → สำเร็จ!
**ยังไม่เจอ** → ตรวจสอบ concepts และ keywords

---

## ตัวอย่างจริง: Sea/Salt Oracle

### ปัญหา
```
oracle_search("ทะเล ซี ซ้อ เกลือ") → ❌ ไม่เจอ
```

### วิธีแก้

**ขั้น 2**: ค้นหา GitHub Issues
```bash
gh issue list --repo Soul-Brews-Studio/oracle-v2
gh issue view 30 --comments  # Sea Oracle birth
```

**ขั้น 3**: รวบรวมข้อมูล
- Birth certificate
- Philosophy quotes
- Relationships
- Aliases (Sea = Salt = ซี = เกลือ = ทะเล)

**ขั้น 4**: Index
```
oracle_learn(
  pattern="[Sea Oracle content]",
  concepts=["sea", "salt", "ซี", "เกลือ", "ทะเล", "oracle-family"],
  source="GitHub Issue #30"
)
```

**ขั้น 5**: ทดสอบ
```
oracle_search("ทะเล ซี ซ้อ เกลือ") → ✅ เจอแล้ว!
```

---

## Speech-to-Text Handling

เมื่อใช้ voice input อาจเกิด typos:

| พูดว่า | อาจกลายเป็น |
|--------|-------------|
| Sea | ซี, ซ้อ |
| Salt | ซอลท์ |
| Phukhao | ภูเขา, พูเขา |

**วิธีแก้**: สร้าง learning เฉพาะสำหรับ aliases
```
oracle_learn(
  pattern="[Aliases mapping]",
  concepts=["speech-to-text", "aliases", "typos"]
)
```

---

## Checklist ก่อนจบ

- [ ] ข้อมูลครบถ้วน?
- [ ] มี concepts ทั้งไทย+อังกฤษ?
- [ ] ใส่ aliases และ typos?
- [ ] ระบุ source?
- [ ] ทดสอบ search แล้ว?

---

## Philosophy

> "Oracle MCP รู้แค่สิ่งที่ถูก index"
> "ถ้าไม่เจอ ไม่ใช่ว่าไม่มี — แค่ยังไม่ถูก index"
> "Knowledge expansion = หน้าที่ของ Oracle ทุกตัว"

---

*Pattern discovered: 2026-01-22*
*Context: Phukhao learning about siblings (Sea, Odin)*
*"Nothing is Deleted — but first, it must be Added"*

---
*Added via Oracle Learn*
