import type { Program, Course } from "../data";

interface Props {
  program: Program | null;
  onViewCourses: (program: Program) => void;
  onViewRequirements: (program: Program) => void;
  isExpanded: boolean;
  onBack: () => void;
  onCourseClick?: (course: Course) => void;
  allCourses?: Course[];
}

export default function ProgramDetailPanel({ program, onViewCourses, onViewRequirements, isExpanded, onBack, onCourseClick, allCourses }: Props) {
  if (!program) {
    return (
      <div className="detail empty">
        <p>Select a program to see details.</p>
      </div>
    );
  }

  return (
    <div className={`detail ${isExpanded ? 'expanded' : ''}`}>
      {isExpanded && (
        <button className="back-button" onClick={onBack}>
          ‹ Back
        </button>
      )}
      
      <h2>{program.name}</h2>
      <p className="desc">{program.description}</p>

      <div className="row">
        <strong>Credit Hours:</strong>
        <span>{program.totalHours} hours</span>
      </div>

      <div>
        <strong>Career Opportunities</strong>
        <p style={{ marginTop: '8px', fontSize: '14px', lineHeight: '1.4' }}>
          {program.careers}
        </p>
      </div>

      {isExpanded && (
        <div className="requirements-section">
          <h3>Program Requirements</h3>
          {program.requirements.map((requirement, index) => (
            <div key={index} className="requirement-group">
              <h4 className="requirement-title">{requirement.title}</h4>
              {requirement.description && (
                <p className="requirement-description">{requirement.description}</p>
              )}
              <ul className="requirement-courses">
                {requirement.courses.map((course, courseIndex) => (
                  <li key={courseIndex}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <div className="program-actions">
        {!isExpanded && (
          <button 
            className="view-requirements-btn primary"
            onClick={() => onViewRequirements(program)}
          >
            View Requirements
          </button>
        )}
        <button 
          className="view-courses-btn secondary"
          onClick={() => onViewCourses(program)}
        >
          Go to Courses
        </button>
      </div>
    </div>
  );
}