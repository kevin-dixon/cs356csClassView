import type { Program } from "../data";
import ProgramCard from "./ProgramCard";

interface Props {
  programs: Program[];
  selected: Program | null;
  onSelect: (p: Program) => void;
}

export default function ProgramList({ programs, selected, onSelect }: Props) {
  return (
    <div className="program-list">
      <h2>Computer Science Programs</h2>
      <div className="programs-container">
        {programs.map(program => (
          <ProgramCard
            key={program.id}
            program={program}
            highlighted={selected ? selected.id === program.id : false}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}