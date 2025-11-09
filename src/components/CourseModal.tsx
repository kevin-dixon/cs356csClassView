import type { Course } from "../data";

interface Props {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CourseModal({ course, isOpen, onClose }: Props) {
  if (!isOpen || !course) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        
        <div className="modal-body">
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
      </div>
    </div>
  );
}