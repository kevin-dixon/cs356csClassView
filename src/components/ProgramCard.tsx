import type { Program } from "../data";

interface Props {
  program: Program;
  highlighted: boolean;
  onSelect: (p: Program) => void;
}

export default function ProgramCard({ program, highlighted, onSelect }: Props) {
  return (
    <button
      className={`programcard ${highlighted ? "highlight" : ""}`}
      onClick={() => onSelect(program)}
    >
      <div className="program-content">
        <div className="program-header">
          <div className="program-name">{program.name}</div>
          <div className="program-credits">
            {program.minCredits}-{program.maxCredits} credits
          </div>
        </div>
        <div className="program-description">{program.description}</div>
      </div>
    </button>
  );
}