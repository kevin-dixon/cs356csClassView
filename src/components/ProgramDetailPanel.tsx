import type { Program } from "../data";

interface Props {
  program: Program | null;
  onViewCourses: (program: Program) => void;
}

export default function ProgramDetailPanel({ program, onViewCourses }: Props) {
  if (!program) {
    return (
      <div className="detail empty">
        <p>Select a program to see details.</p>
      </div>
    );
  }

  // Career info based on program type
  const getCareerInfo = (programId: string) => {
    switch (programId) {
      case "cs-bs":
        return [
          "Software Developer",
          "Research Scientist", 
          "Systems Architect",
          "Product Manager",
          "Data Scientist",
          "Cybersecurity Analyst"
        ];
      case "cs-animation-games-bs":
        return [
          "Animation Programmer",
          "Game Developer",
          "Visual Effects Artist",
          "Technical Director",
          "Graphics Programmer",
          "Game Engine Developer"
        ];
      default:
        return [
          "Software Developer",
          "Data Scientist", 
          "Systems Analyst",
          "Product Manager",
          "Research Scientist"
        ];
    }
  };

  return (
    <div className="detail">
      <h2>{program.name}</h2>
      <p className="desc">{program.description}</p>

      <div className="row">
        <strong>Credit Hours:</strong>
        <span>{program.minCredits} - {program.maxCredits} credits</span>
      </div>

      <div>
        <strong>Program Overview</strong>
        <p style={{ marginTop: '8px', fontSize: '14px', lineHeight: '1.4' }}>
          {program.id === "cs-bs" ? 
            "Students graduating with this degree are employed primarily in software development positions, with career paths that are highly diverse. Alumni can be found in big tech companies, startups, government research labs, and non-profit companies developing everything from web applications to AI systems." :
          program.id === "cs-animation-games-bs" ?
            "Alumni from this program work at top animation studios including Pixar, DreamWorks, Disney Animation, and major game studios. BYU animation graduates have contributed to blockbuster films and cutting-edge interactive entertainment." :
            "This program provides comprehensive education in computer science fundamentals and advanced topics. Students gain practical experience through projects, internships, and collaborative learning opportunities."
          }
        </p>
      </div>

      <div>
        <strong>Career Opportunities</strong>
        <ul className="outcomes">
          {getCareerInfo(program.id).map((career, index) => (
            <li key={index}>{career}</li>
          ))}
        </ul>
      </div>

      <div className="program-actions">
        <button 
          className="view-courses-btn"
          onClick={() => onViewCourses(program)}
        >
          View Courses
        </button>
      </div>
    </div>
  );
}