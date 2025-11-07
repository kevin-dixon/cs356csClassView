import type { Course } from "../data";

interface Props {
  course: Course | null;
}

export default function DetailPanel({ course }: Props) {
  if (!course) {
    return (
      <div className="detail empty">
        <p>Select a course to see details.</p>
      </div>
    );
  }

  return (
    <div className="detail">
      <h2>{`CS ${course.number} — ${course.title}`}</h2>
      <p className="desc">{course.description}</p>

      <div className="row"><strong>Requirement:</strong><span>{course.requirement}</span></div>
      <div className="row"><strong>Credits:</strong><span>{course.credits.toFixed(1)}</span></div>
      <div className="row"><strong>Topics:</strong><span>{course.topics.join(", ")}</span></div>
      <div className="row"><strong>Semesters:</strong><span>{course.semesters.join(", ") || "N/A"}</span></div>
      <div className="row"><strong>Prereqs:</strong><span>{course.prerequisites.length ? course.prerequisites.join(", ") : "None"}</span></div>

      <div>
        <strong>Expected Learning Outcomes</strong>
        <ul className="outcomes">
          {course.outcomes.map((o, i) => <li key={i}>{o}</li>)}
        </ul>
      </div>
    </div>
  );
}
