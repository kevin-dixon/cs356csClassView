import { useMemo, useState, useEffect } from "react";
import FilterBar from "./components/FilterBar";
import CourseGrid from "./components/CourseGrid";
import DetailPanel from "./components/DetailPanel";
import type { Course, Requirement, Topic, Semester } from "./data";
import { courses as ALL } from "./data";
import "./index.css";

export default function App() {
  const [q, setQ] = useState("");
  const [req, setReq] = useState<Requirement | null>(null);
  const [topic, setTopic] = useState<Topic | null>(null);
  const [sem, setSem] = useState<Semester[]>([]);
  const [selected, setSelected] = useState<Course | null>(null);

  // ✅ Combined matches: search + filters
  const matches = useMemo(() => {
    const set = new Set<string>();
    ALL.forEach(c => {
      const query = q.toLowerCase();
      const hitQ =
        !q ||
        c.title.toLowerCase().includes(query) ||
        String(c.number).includes(query) ||
        `cs${c.number}`.includes(query) ||
        `cs ${c.number}`.includes(query) ||
        c.topics.some(t => t.toLowerCase().includes(query));

      const hitReq = !req || c.requirement === req;
      const hitTopic = !topic || c.topics.includes(topic);
      const hitSem = sem.length === 0 || sem.some(s => c.semesters.includes(s));

      if (hitQ && hitReq && hitTopic && hitSem) {
        set.add(c.id);
      }
    });
    return set;
  }, [q, req, topic, sem]);

  const clear = () => {
    setQ("");
    setReq(null);
    setTopic(null);
    setSem([]);
  };

  useEffect(() => {
    if (selected && !ALL.find(c => c.id === selected.id)) {
      setSelected(null);
    }
  }, [selected]);

  return (
    <div className="app">
      <header><h1>BYU CS Classes — Visual Map</h1></header>

      <main className="layout">
        <aside className="left">
          <CourseGrid
            courses={ALL}
            matches={matches}
            selected={selected}
            onSelect={setSelected}
          />
        </aside>

        <section className="right">
          <FilterBar
            q={q} setQ={setQ}
            req={req} setReq={setReq}
            topic={topic} setTopic={setTopic}
            sem={sem} setSem={setSem}
            clear={clear}
          />
          <DetailPanel course={selected} />
        </section>
      </main>
    </div>
  );
}
