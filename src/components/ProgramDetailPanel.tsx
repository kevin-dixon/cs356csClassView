import type { Program } from "../data";

interface Props {
  program: Program | null;
}

export default function ProgramDetailPanel({ program }: Props) {
  if (!program) {
    return (
      <div className="detail empty">
        <p>Select a program to see details.</p>
      </div>
    );
  }

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
          This program provides comprehensive education in computer science fundamentals 
          and advanced topics. Students will gain practical experience through projects, 
          internships, and collaborative learning opportunities.
        </p>
      </div>

      <div>
        <strong>Career Opportunities</strong>
        <ul className="outcomes">
          <li>Software Developer</li>
          <li>Data Scientist</li>
          <li>Systems Analyst</li>
          <li>Product Manager</li>
          <li>Research Scientist</li>
        </ul>
      </div>
    </div>
  );
}