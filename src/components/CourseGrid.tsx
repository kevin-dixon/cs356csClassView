import type { Course } from "../data";
import CourseCard from "./CourseCard";

interface Props {
  courses: Course[];
  matches: Set<string>;
  selected: Course | null;
  onSelect: (c: Course) => void;
}

export default function CourseGrid({ courses, matches, selected, onSelect }: Props) {
  const sections = [100, 200, 300, 400];
  return (
    <div className="gridwrap">
      {sections.map(base => {
        const inBand = courses.filter(c => Math.floor(c.number / 100) * 100 === base);
        if (inBand.length === 0) return null;
        return (
          <section key={base} className="band">
            <h3>{base}-level</h3>
            <div className="grid">
              {inBand.map(c => (
                <CourseCard
                  key={c.id}
                  course={c}
                  faded={matches.size === 0 || !matches.has(c.id)}
                  highlighted={selected ? selected.id === c.id : false}
                  onSelect={onSelect}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
