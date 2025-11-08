import type { Course } from "../data";
import CourseCard from "./CourseCard";

interface Props {
  courses: Course[];
  matches: Set<string>;
  selected: Course | null;
  onSelect: (c: Course) => void;
}

export default function CourseGrid({ courses, matches, selected, onSelect }: Props) {
  // Group courses by department
  const coursesByDepartment = courses.reduce((acc, course) => {
    const dept = course.department || "CS"; // Default to CS for courses without department
    if (!acc[dept]) {
      acc[dept] = [];
    }
    acc[dept].push(course);
    return acc;
  }, {} as Record<string, Course[]>);

  // Sort departments with CS first, then alphabetically
  const sortedDepartments = Object.keys(coursesByDepartment).sort((a, b) => {
    if (a === "CS") return -1;
    if (b === "CS") return 1;
    return a.localeCompare(b);
  });

  return (
    <div className="gridwrap">
      {sortedDepartments.map(department => {
        const deptCourses = coursesByDepartment[department];
        
        // Group by level within department
        const sections = [100, 200, 300, 400, 500];
        const hasAnyCourses = sections.some(base => 
          deptCourses.some(c => Math.floor(c.number / 100) * 100 === base)
        );
        
        if (!hasAnyCourses) return null;

        return (
          <div key={department} className="department-section">
            <h2 className="department-header">{department} Courses</h2>
            {sections.map(base => {
              const inBand = deptCourses.filter(c => Math.floor(c.number / 100) * 100 === base);
              if (inBand.length === 0) return null;
              
              return (
                <section key={`${department}-${base}`} className="band">
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
      })}
    </div>
  );
}
