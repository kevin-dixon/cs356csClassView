# 📌 BYU CS Classes — Visual Map

A **React + TypeScript** project to visualize BYU Computer Science courses as an interactive map.  
Helps students explore courses by **requirement, topics, and semesters** more easily than the catalog.

---

## ✨ Features

- [x] **Course Cards** with number, title, requirement pill, and topics  
- [x] **Requirement-based borders**  
  - 🟥 Core → Red  
  - 🟩 Elective → Green  
  - 🟦 GE → Blue  
- [x] **Search bar** (by course number, title, or topic)  
- [x] **Filters**  
  - Requirement (Core / Elective / GE)  
  - Topic (Programming / Systems / Data & AI / Theory / HCI)  
  - Semester (multi-select: Fall / Winter / Spring / Summer)  
- [x] **Fading effect** → non-matching courses fade out, matches stay visible  
- [x] **Detail Panel** with description, credits, prereqs, and outcomes  

---

## 🛠 Tech Stack

| Tech        | Usage                          |
|-------------|--------------------------------|
| React + TS  | Frontend UI & components       |
| Vite        | Fast dev server & build tool   |
| CSS         | Styling & responsive layout    |
| Data.ts     | Static course dataset          |

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/byu-cs-classes-map.git
cd byu-cs-classes-map

# 2. Install dependencies
npm install

# 3. Run locally
npm run dev
# ➡ Open http://localhost:5173

# 4. Build for production
npm run build