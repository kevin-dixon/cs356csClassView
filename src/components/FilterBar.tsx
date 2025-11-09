import { useState } from "react";
import type { Requirement, Topic, Semester, Program } from "../data";
import { REQUIREMENTS, TOPICS, SEMESTERS, PROGRAMS } from "../data";

interface Props {
  q: string;
  setQ: (q: string) => void;
  req: Requirement | null;
  setReq: (r: Requirement | null) => void;
  topic: Topic | null;
  setTopic: (t: Topic | null) => void;
  sem: Semester[];
  setSem: (s: Semester[]) => void;
  program: Program | null;
  setProgram: (p: Program | null) => void;
  clear: () => void;
}

export default function FilterBar({
  q, setQ,
  req, setReq,
  topic, setTopic,
  sem, setSem,
  program, setProgram,
  clear
}: Props) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="filterbar">
      {/* Collapsible header */}
      <div className="filterbar-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h3>Filters</h3>
        <span className={`dropdown-arrow ${isExpanded ? 'expanded' : ''}`}>▼</span>
      </div>

      {/* Filters content */}
      {isExpanded && (
        <div className="filterbar-content">
          {/* Search input */}
      <input
        type="text"
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search by course name, number, or topic..."
      />

      {/* Requirement filter */}
      <div className="filter-group">
        <span className="filter-label">Requirement:</span>
        <div className="chips">
          {REQUIREMENTS.map(r => (
            <button
              key={r}
              className={`chip ${req === r ? "active" : ""}`}
              onClick={() => setReq(req === r ? null : r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Topic filter */}
      <div className="filter-group">
        <span className="filter-label">Topic:</span>
        <div className="chips">
          {TOPICS.map(t => (
            <button
              key={t}
              className={`chip ${topic === t ? "active" : ""}`}
              onClick={() => setTopic(topic === t ? null : t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Semester filter */}
      <div className="filter-group">
        <span className="filter-label">Semester:</span>
        <div className="chips">
          {SEMESTERS.map(s => (
            <button
              key={s}
              className={`chip ${sem.includes(s) ? "active" : ""}`}
              onClick={() => {
                if (sem.includes(s)) {
                  setSem(sem.filter(x => x !== s));
                } else {
                  setSem([...sem, s]);
                }
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Program filter */}
      <div className="filter-group">
        <span className="filter-label">Program:</span>
        <div className="chips">
          {PROGRAMS.map(p => (
            <button
              key={p.id}
              className={`chip ${program && program.id === p.id ? "active" : ""}`}
              onClick={() => setProgram(program && program.id === p.id ? null : p)}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Clear button */}
      <div className="filter-actions">
        <button className="clear" onClick={clear}>Clear All</button>
      </div>
        </div>
      )}
    </div>
  );
}
