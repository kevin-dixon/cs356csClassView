export type Requirement = "Core" | "Elective" | "GE";
export type Topic =
  | "Programming"
  | "Systems"
  | "Data & AI"
  | "Theory"
  | "HCI"
  | "Software Engineering"
  | "Ethics"
  | "Society";

export type Semester = "Fall" | "Winter" | "Spring" | "Summer";
export type Department = "CS" | "MATH" | "PHSCS" | "WRTG" | "STAT" | "EC EN" | "IS" | "ARTHC" | "TMA" | "DESAN" | "CSANM";

export interface Course {
  id: string;
  number: number;
  title: string;
  department?: Department;
  requirement: Requirement;
  credits: number;
  topics: Topic[];
  semesters: Semester[];
  prerequisites: string[];
  outcomes: string[];
  description: string;
}

export interface ProgramRequirement {
  title: string;
  description?: string;
  courses: string[];
}

export interface Program {
  id: string;
  name: string;
  type: 'Major' | 'Minor';
  college: string;
  description: string;
  shortDescription: string;
  totalHours: string;
  careers: string;
  requirements: ProgramRequirement[];
  courseIds: string[];
}

export const REQUIREMENTS: Requirement[] = ["Core", "Elective", "GE"];
export const TOPICS: Topic[] = [
  "Programming",
  "Systems",
  "Data & AI",
  "Theory",
  "HCI",
  "Software Engineering",
  "Ethics",
  "Society"
];
export const SEMESTERS: Semester[] = ["Fall", "Winter", "Spring", "Summer"];
export const DEPARTMENTS: Department[] = ["CS", "MATH", "PHSCS", "WRTG", "STAT", "EC EN", "IS", "ARTHC", "TMA", "DESAN", "CSANM"];

export const courses: Course[] = [
  {
    "id": "cs111",
    "number": 111,
    "title": "Introduction to Computer Science",
    "department": "CS",
    "requirement": "Core",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [],
    "prerequisites": [
      "CS 110"
    ],
    "outcomes": [],
    "description": "Course description for Introduction to Computer Science."
  },
  {
    "id": "cs142",
    "number": 142,
    "title": "Introduction to Computer Programming",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Computer Programming."
  },
  {
    "id": "cs180",
    "number": 180,
    "title": "Introduction to Data Science",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Data & AI"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [
      "CS 110"
    ],
    "outcomes": [],
    "description": "Course description for Introduction to Data Science."
  },
  {
    "id": "cs191",
    "number": 191,
    "title": "Exploring Computer Science",
    "department": "CS",
    "requirement": "Core",
    "credits": 0.5,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Exploring Computer Science."
  },
  {
    "id": "cs202",
    "number": 202,
    "title": "Software Engineering Lab 1",
    "department": "CS",
    "requirement": "Elective",
    "credits": 1,
    "topics": [
      "Programming",
      "Software Engineering"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Software Engineering Lab 1."
  },
  {
    "id": "cs203",
    "number": 203,
    "title": "Software Engineering Lab 2",
    "department": "CS",
    "requirement": "Elective",
    "credits": 1,
    "topics": [
      "Programming",
      "Software Engineering"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Software Engineering Lab 2."
  },
  {
    "id": "cs204",
    "number": 204,
    "title": "Software Engineering Lab 3",
    "department": "CS",
    "requirement": "Elective",
    "credits": 1,
    "topics": [
      "Programming",
      "Software Engineering"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Software Engineering Lab 3."
  },
  {
    "id": "cs224",
    "number": 224,
    "title": "Introduction to Computer Systems",
    "department": "CS",
    "requirement": "Core",
    "credits": 3,
    "topics": [
      "Systems"
    ],
    "semesters": [
      "Fall",
      "Winter",
      "Summer"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Computer Systems."
  },
  {
    "id": "cs235",
    "number": 235,
    "title": "Data Structures and Algorithms",
    "department": "CS",
    "requirement": "Core",
    "credits": 3,
    "topics": [
      "Theory"
    ],
    "semesters": [
      "Fall",
      "Winter",
      "Spring"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Data Structures and Algorithms."
  },
  {
    "id": "cs236",
    "number": 236,
    "title": "Discrete Structures",
    "department": "CS",
    "requirement": "Core",
    "credits": 3,
    "topics": [
      "Theory"
    ],
    "semesters": [
      "Fall",
      "Winter",
      "Spring"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Discrete Structures."
  },
  {
    "id": "cs240",
    "number": 240,
    "title": "Advanced Software Construction",
    "department": "CS",
    "requirement": "Core",
    "credits": 4,
    "topics": [
      "Programming"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Advanced Software Construction."
  },
  {
    "id": "cs252",
    "number": 252,
    "title": "Introduction to Computational Theory",
    "department": "CS",
    "requirement": "Core",
    "credits": 3,
    "topics": [
      "Theory"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Computational Theory."
  },
  {
    "id": "cs256",
    "number": 256,
    "title": "Introduction to Human Computer Interaction",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Human Computer Interaction."
  },
  {
    "id": "cs260",
    "number": 260,
    "title": "Web Programming",
    "department": "CS",
    "requirement": "Core",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Web Programming."
  },
  {
    "id": "cs270",
    "number": 270,
    "title": "Introduction to Machine Learning",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Data & AI"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Machine Learning."
  },
  {
    "id": "cs291",
    "number": 291,
    "title": "Careers in Computer Science",
    "department": "CS",
    "requirement": "Core",
    "credits": 0.5,
    "topics": [
      "Society"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Careers in Computer Science."
  },
  {
    "id": "cs312",
    "number": 312,
    "title": "Algorithm Design and Analysis",
    "department": "CS",
    "requirement": "Core",
    "credits": 3,
    "topics": [
      "Theory"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Algorithm Design and Analysis."
  },
  {
    "id": "cs324",
    "number": 324,
    "title": "Systems Programming",
    "department": "CS",
    "requirement": "Core",
    "credits": 3,
    "topics": [
      "Programming",
      "Systems"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Systems Programming."
  },
  {
    "id": "cs329",
    "number": 329,
    "title": "Quality Assurance and Developer Operations",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Software Engineering"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Quality Assurance and Developer Operations."
  },
  {
    "id": "cs330",
    "number": 330,
    "title": "Concepts of Programming Languages",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Concepts of Programming Languages."
  },
  {
    "id": "cs340",
    "number": 340,
    "title": "Software Design",
    "department": "CS",
    "requirement": "Core",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Software Design."
  },
  {
    "id": "cs345",
    "number": 345,
    "title": "Operating Systems Design",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Systems"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Operating Systems Design."
  },
  {
    "id": "cs355",
    "number": 355,
    "title": "Interactive Graphics and Image Processing",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Interactive Graphics and Image Processing."
  },
  {
    "id": "cs356",
    "number": 356,
    "title": "Advanced Techniques in Human Computer Interaction",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Advanced Techniques in Human Computer Interaction."
  },
  {
    "id": "cs393",
    "number": 393,
    "title": "Collaborative Problem Solving",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Collaborative Problem Solving."
  },
  {
    "id": "cs404",
    "number": 404,
    "title": "Ethics and Computers in Society",
    "department": "CS",
    "requirement": "Core",
    "credits": 2,
    "topics": [
      "Ethics",
      "Society"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Ethics and Computers in Society."
  },
  {
    "id": "cs405",
    "number": 405,
    "title": "Creating and Managing a Software Business",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming",
      "Society"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Creating and Managing a Software Business."
  },
  {
    "id": "cs401r",
    "number": 401,
    "title": "Topics in Computer Science",
    "department": "CS",
    "requirement": "Elective",
    "credits": 1,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Topics in Computer Science."
  },
  {
    "id": "cs412",
    "number": 412,
    "title": "Linear Programming and Convex Optimization",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Linear Programming and Convex Optimization."
  },
  {
    "id": "cs416",
    "number": 416,
    "title": "Advanced Algorithms",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Theory"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Advanced Algorithms."
  },
  {
    "id": "cs428",
    "number": 428,
    "title": "Software Engineering",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming",
      "Software Engineering"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Software Engineering."
  },
  {
    "id": "cs430",
    "number": 430,
    "title": "Formal Verification",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Software Engineering"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Formal Verification."
  },
  {
    "id": "cs431",
    "number": 431,
    "title": "Algorithmic Languages and Compilers",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Theory"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Algorithmic Languages and Compilers."
  },
  {
    "id": "cs450",
    "number": 450,
    "title": "Computer Vision",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Data & AI"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Computer Vision."
  },
  {
    "id": "cs452",
    "number": 452,
    "title": "Database Modeling Concepts",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter",
      "Spring"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Database Modeling Concepts."
  },
  {
    "id": "cs453",
    "number": 453,
    "title": "Fundamentals of Information Retrieval",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Spring"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Fundamentals of Information Retrieval."
  },
  {
    "id": "cs455",
    "number": 455,
    "title": "Computer Graphics",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Computer Graphics."
  },
  {
    "id": "cs456",
    "number": 456,
    "title": "Mobile and Ubiquitous Human-Computer Interaction",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Mobile and Ubiquitous Human-Computer Interaction."
  },
  {
    "id": "cs460",
    "number": 460,
    "title": "Computer Communications and Networking",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Computer Communications and Networking."
  },
  {
    "id": "cs462",
    "number": 462,
    "title": "Large-Scale Distributed System Design",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Large-Scale Distributed System Design."
  },
  {
    "id": "cs465",
    "number": 465,
    "title": "Computer Security",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Computer Security."
  },
  {
    "id": "cs466",
    "number": 466,
    "title": "Blockchain Technologies",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Blockchain Technologies."
  },
  {
    "id": "cs470",
    "number": 470,
    "title": "Introduction to Artificial Intelligence",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Data & AI"
    ],
    "semesters": [
      "Fall",
      "Winter",
      "Spring"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Artificial Intelligence."
  },
  {
    "id": "cs471",
    "number": 471,
    "title": "Voice User Interfaces",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Voice User Interfaces."
  },
  {
    "id": "cs472",
    "number": 472,
    "title": "Introduction to Machine Learning",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Data & AI"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Machine Learning."
  },
  {
    "id": "cs473",
    "number": 473,
    "title": "Advanced Machine Learning",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Data & AI"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Advanced Machine Learning."
  },
  {
    "id": "cs474",
    "number": 474,
    "title": "Introduction to Deep Learning",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Data & AI"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Deep Learning."
  },
  {
    "id": "cs479",
    "number": 479,
    "title": "Introduction to Machine Translation",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Machine Translation."
  },
  {
    "id": "cs486",
    "number": 486,
    "title": "Verification and Validation",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Software Engineering"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Verification and Validation."
  },
  {
    "id": "cs493r",
    "number": 493,
    "title": "Computing Competitions",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Computing Competitions."
  },
  {
    "id": "cs494",
    "number": 494,
    "title": "Capstone 1",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Software Engineering"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Capstone 1."
  },
  {
    "id": "cs495",
    "number": 495,
    "title": "Capstone 2",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Software Engineering"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Capstone 2."
  },
  {
    "id": "cs497r",
    "number": 497,
    "title": "Undergraduate Research",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Undergraduate Research."
  },
  {
    "id": "cs498r",
    "number": 498,
    "title": "Undergraduate Special Projects",
    "department": "CS",
    "requirement": "Elective",
    "credits": 1,
    "topics": [
      "Programming"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Undergraduate Special Projects."
  },
  {
    "id": "cs500",
    "number": 500,
    "title": "(C S-Chem-Geol-Math-MthEd-Phscs-Stat) Business Career Essentials in Science and Math",
    "department": "CS",
    "requirement": "Elective",
    "credits": 1.5,
    "topics": [
      "Society"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for (C S-Chem-Geol-Math-MthEd-Phscs-Stat) Business Career Essentials in Science and Math."
  },
  {
    "id": "cs501r",
    "number": 501,
    "title": "Advanced Topics in Computer Science",
    "department": "CS",
    "requirement": "Elective",
    "credits": 1,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Advanced Topics in Computer Science."
  },
  {
    "id": "cs513",
    "number": 513,
    "title": "Robust Control",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Robust Control."
  },
  {
    "id": "cs556",
    "number": 556,
    "title": "Research Methods and Study Design in Human-Computer Interaction",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Research Methods and Study Design in Human-Computer Interaction."
  },
  {
    "id": "cs574",
    "number": 574,
    "title": "Transformer Models for Natural Language Processing",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Transformer Models for Natural Language Processing."
  },
  {
    "id": "cs575",
    "number": 575,
    "title": "Introduction to Graph Data Science",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Data & AI"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Graph Data Science."
  },
  {
    "id": "cs580",
    "number": 580,
    "title": "Theory of Predictive Modeling",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Theory"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Theory of Predictive Modeling."
  },
  {
    "id": "cs480",
    "number": 480,
    "title": "Software Engineering Capstone 1",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming",
      "Software Engineering"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Software Engineering Capstone 1."
  },
  {
    "id": "cs481",
    "number": 481,
    "title": "Software Engineering Capstone 2",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming",
      "Software Engineering"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Software Engineering Capstone 2."
  },
  {
    "id": "cs482",
    "number": 482,
    "title": "Data Science Capstone 1",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Data & AI",
      "Software Engineering"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Data Science Capstone 1."
  },
  {
    "id": "cs483",
    "number": 483,
    "title": "Data Science Capstone 2",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Data & AI",
      "Software Engineering"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Data Science Capstone 2."
  },
  {
    "id": "cs477r",
    "number": 477,
    "title": "Secondary Minor Student Teaching",
    "department": "CS",
    "requirement": "Elective",
    "credits": 4,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter",
      "Spring"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Secondary Minor Student Teaching."
  },
  {
    "id": "csanm150",
    "number": 150,
    "title": "Introduction to Three-Dimensional Computer Graphics",
    "department": "CSANM",
    "requirement": "Elective",
    "credits": 1.5,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Three-Dimensional Computer Graphics."
  },
  {
    "id": "csanm210",
    "number": 210,
    "title": "Visual Narrative for Animation",
    "department": "CSANM",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Visual Narrative for Animation."
  },
  {
    "id": "csanm250",
    "number": 250,
    "title": "Intermediate Three-Dimensional Computer Graphics",
    "department": "CSANM",
    "requirement": "Elective",
    "credits": 2,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Intermediate Three-Dimensional Computer Graphics."
  },
  {
    "id": "csanm252",
    "number": 252,
    "title": "Introduction to Three-Dimensional Animation",
    "department": "CSANM",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Three-Dimensional Animation."
  },
  {
    "id": "csanm258",
    "number": 258,
    "title": "Scripting for Animation",
    "department": "CSANM",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Scripting for Animation."
  },
  {
    "id": "csanm340",
    "number": 340,
    "title": "Introduction to Game Design",
    "department": "CSANM",
    "requirement": "Elective",
    "credits": 2,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Game Design."
  },
  {
    "id": "csanm342",
    "number": 342,
    "title": "Real-time Techniques",
    "department": "CSANM",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Real-time Techniques."
  },
  {
    "id": "csanm351r",
    "number": 351,
    "title": "Lighting for Three-Dimensional Graphics",
    "department": "CSANM",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Lighting for Three-Dimensional Graphics."
  },
  {
    "id": "csanm352",
    "number": 352,
    "title": "Animated Film Production 1",
    "department": "CSANM",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Animated Film Production 1."
  },
  {
    "id": "csanm353",
    "number": 353,
    "title": "Previsualization",
    "department": "CSANM",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Previsualization."
  },
  {
    "id": "csanm354",
    "number": 354,
    "title": "Materials and Surfacing",
    "department": "CSANM",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Materials and Surfacing."
  },
  {
    "id": "csanm355",
    "number": 355,
    "title": "Photography for Animation",
    "department": "CSANM",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Spring"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Photography for Animation."
  },
  {
    "id": "csanm450",
    "number": 450,
    "title": "Animated Film Production 2",
    "department": "CSANM",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Animated Film Production 2."
  },
  {
    "id": "csanm452",
    "number": 452,
    "title": "Animated Film Production 3",
    "department": "CSANM",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Animated Film Production 3."
  },
  {
    "id": "csanm454",
    "number": 454,
    "title": "Advanced Shading",
    "department": "CSANM",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Advanced Shading."
  },
  {
    "id": "csanm458r",
    "number": 458,
    "title": "Three-Dimensional Visual Effects",
    "department": "CSANM",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Spring"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Three-Dimensional Visual Effects."
  },
  {
    "id": "csanm459",
    "number": 459,
    "title": "Video Game Production 1",
    "department": "CSANM",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Video Game Production 1."
  },
  {
    "id": "csanm460",
    "number": 460,
    "title": "Video Game Production 2",
    "department": "CSANM",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Video Game Production 2."
  },
  {
    "id": "math112",
    "number": 112,
    "title": "Calculus 1",
    "department": "MATH",
    "requirement": "Core",
    "credits": 4,
    "topics": [
      "Theory"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Calculus 1."
  },
  {
    "id": "math113",
    "number": 113,
    "title": "Calculus 2",
    "department": "MATH",
    "requirement": "Elective",
    "credits": 4,
    "topics": [
      "Theory"
    ],
    "semesters": [
      "Fall",
      "Winter",
      "Spring",
      "Summer"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Calculus 2."
  },
  {
    "id": "math213",
    "number": 213,
    "title": "Elementary Linear Algebra",
    "department": "MATH",
    "requirement": "Core",
    "credits": 2,
    "topics": [
      "Theory"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Elementary Linear Algebra."
  },
  {
    "id": "math215",
    "number": 215,
    "title": "Computational Linear Algebra",
    "department": "MATH",
    "requirement": "Core",
    "credits": 1,
    "topics": [
      "Theory"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Computational Linear Algebra."
  },
  {
    "id": "math290",
    "number": 290,
    "title": "Fundamentals of Mathematics",
    "department": "MATH",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Theory"
    ],
    "semesters": [
      "Fall",
      "Winter",
      "Spring"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Fundamentals of Mathematics."
  },
  {
    "id": "math314",
    "number": 314,
    "title": "Calculus of Several Variables",
    "department": "MATH",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Theory"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Calculus of Several Variables."
  },
  {
    "id": "math380",
    "number": 380,
    "title": "Mathematical Foundations of Data Science",
    "department": "MATH",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Data & AI",
      "Theory"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Mathematical Foundations of Data Science."
  },
  {
    "id": "math411",
    "number": 411,
    "title": "Numerical Methods",
    "department": "MATH",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Theory"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Numerical Methods."
  },
  {
    "id": "math413",
    "number": 413,
    "title": "Advanced Linear Algebra",
    "department": "MATH",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Theory"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Advanced Linear Algebra."
  },
  {
    "id": "math431",
    "number": 431,
    "title": "Probability Theory",
    "department": "MATH",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Theory"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Probability Theory."
  },
  {
    "id": "math485",
    "number": 485,
    "title": "Mathematical Cryptography",
    "department": "MATH",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Theory"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Mathematical Cryptography."
  },
  {
    "id": "math522",
    "number": 522,
    "title": "Mathematical Foundations of Deep Learning",
    "department": "MATH",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Data & AI",
      "Theory"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Mathematical Foundations of Deep Learning."
  },
  {
    "id": "phscs121",
    "number": 121,
    "title": "Introduction to Newtonian Mechanics",
    "department": "PHSCS",
    "requirement": "Core",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter",
      "Spring"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Newtonian Mechanics."
  },
  {
    "id": "wrtg316",
    "number": 316,
    "title": "Technical Communication",
    "department": "WRTG",
    "requirement": "Core",
    "credits": 3,
    "topics": [
      "Society"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Technical Communication."
  },
  {
    "id": "stat121",
    "number": 121,
    "title": "Introduction to Statistical Data Analysis",
    "department": "STAT",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter",
      "Spring",
      "Summer"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Statistical Data Analysis."
  },
  {
    "id": "stat201",
    "number": 201,
    "title": "Statistics for Engineers and Scientists",
    "department": "STAT",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter",
      "Spring"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Statistics for Engineers and Scientists."
  },
  {
    "id": "stat220",
    "number": 220,
    "title": "Statistical Modeling for Data Science",
    "department": "STAT",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Data & AI"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Statistical Modeling for Data Science."
  },
  {
    "id": "stat240",
    "number": 240,
    "title": "Probability and Inference 1",
    "department": "STAT",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Probability and Inference 1."
  },
  {
    "id": "stat251",
    "number": 251,
    "title": "Introduction to Bayesian Statistics",
    "department": "STAT",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Bayesian Statistics."
  },
  {
    "id": "stat330",
    "number": 330,
    "title": "Statistical Modeling 2",
    "department": "STAT",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Statistical Modeling 2."
  },
  {
    "id": "stat340",
    "number": 340,
    "title": "Probability and Inference 2",
    "department": "STAT",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Probability and Inference 2."
  },
  {
    "id": "stat386",
    "number": 386,
    "title": "Data Science Process",
    "department": "STAT",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Data & AI"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Data Science Process."
  },
  {
    "id": "ecen330",
    "number": 330,
    "title": "Introduction to Embedded System Programming",
    "department": "EC EN",
    "requirement": "Elective",
    "credits": 4,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Embedded System Programming."
  },
  {
    "id": "ecen427",
    "number": 427,
    "title": "Embedded Systems",
    "department": "EC EN",
    "requirement": "Elective",
    "credits": 4,
    "topics": [
      "Systems"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Embedded Systems."
  },
  {
    "id": "is567",
    "number": 567,
    "title": "Cybersecurity and Penetration Testing",
    "department": "IS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Software Engineering"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Cybersecurity and Penetration Testing."
  },
  {
    "id": "desan101",
    "number": 101,
    "title": "Introduction to Drawing for Pre-Animation",
    "department": "DESAN",
    "requirement": "Elective",
    "credits": 1,
    "topics": [
      "HCI"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Drawing for Pre-Animation."
  },
  {
    "id": "desan364r",
    "number": 364,
    "title": "Digital Sculpting",
    "department": "DESAN",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Digital Sculpting."
  },
  {
    "id": "desan460",
    "number": 460,
    "title": "Business and Ethics in Animation",
    "department": "DESAN",
    "requirement": "Elective",
    "credits": 2,
    "topics": [
      "HCI",
      "Ethics",
      "Society"
    ],
    "semesters": [
      "Fall"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Business and Ethics in Animation."
  },
  {
    "id": "arthc111",
    "number": 111,
    "title": "Introduction to Art History",
    "department": "ARTHC",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Society"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Art History."
  },
  {
    "id": "arthc202",
    "number": 202,
    "title": "World Civilization Since 1500",
    "department": "ARTHC",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Society"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for World Civilization Since 1500."
  },
  {
    "id": "tma294",
    "number": 294,
    "title": "History of Animation",
    "department": "TMA",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "HCI",
      "Society"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for History of Animation."
  },
  {
    "id": "bio130",
    "number": 130,
    "title": "Biology",
    "department": "CS",
    "requirement": "Elective",
    "credits": 4,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Biology."
  },
  {
    "id": "bio165",
    "number": 165,
    "title": "Introduction to Bioinformatics",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [
      "BIO 100",
      "BIO 130",
      "CELL 120",
      "MMBIO 121"
    ],
    "outcomes": [],
    "description": "Course description for Introduction to Bioinformatics."
  },
  {
    "id": "bio250",
    "number": 250,
    "title": "Evolutionary Medicine",
    "department": "CS",
    "requirement": "Elective",
    "credits": 2,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter",
      "Spring"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Evolutionary Medicine."
  },
  {
    "id": "bio264",
    "number": 264,
    "title": "Statistical Analysis for Biologists",
    "department": "CS",
    "requirement": "Elective",
    "credits": 4,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Statistical Analysis for Biologists."
  },
  {
    "id": "bio364",
    "number": 364,
    "title": "Bacterial Pathogenesis.",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Bacterial Pathogenesis.."
  },
  {
    "id": "bio420",
    "number": 420,
    "title": "Evolutionary Biology",
    "department": "CS",
    "requirement": "Elective",
    "credits": 4,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [
      "BIO 350"
    ],
    "outcomes": [],
    "description": "Course description for Evolutionary Biology."
  },
  {
    "id": "bio463",
    "number": 463,
    "title": "Immunology",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Immunology."
  },
  {
    "id": "bio465",
    "number": 465,
    "title": "Virology",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Virology."
  },
  {
    "id": "mmbio240",
    "number": 240,
    "title": "Molecular Biology",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter",
      "Spring"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Molecular Biology."
  },
  {
    "id": "pws340",
    "number": 340,
    "title": "Genetics",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Genetics."
  },
  {
    "id": "chem105",
    "number": 105,
    "title": "General College Chemistry 1 with Lab (Integrated)",
    "department": "CS",
    "requirement": "Elective",
    "credits": 4,
    "topics": [
      "Programming"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for General College Chemistry 1 with Lab (Integrated)."
  },
  {
    "id": "econ378",
    "number": 378,
    "title": "Statistics for Economists",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Statistics for Economists."
  },
  {
    "id": "econ388",
    "number": 388,
    "title": "Introduction to Econometrics",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Introduction to Econometrics."
  },
  {
    "id": "ling581",
    "number": 581,
    "title": "Natural Language Processing",
    "department": "CS",
    "requirement": "Elective",
    "credits": 3,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Fall",
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Natural Language Processing."
  },
  {
    "id": "tes377",
    "number": 377,
    "title": "Teaching Methods in Technology Education",
    "department": "CS",
    "requirement": "Elective",
    "credits": 2,
    "topics": [
      "Programming"
    ],
    "semesters": [
      "Winter"
    ],
    "prerequisites": [],
    "outcomes": [],
    "description": "Course description for Teaching Methods in Technology Education."
  }
];

// Programs data (copied from original data.ts)
export const programs: Program[] = [
  {
    id: 'cs-bs',
    name: 'Computer Science (BS)',
    type: 'Major',
    college: 'Physical and Mathematical Sciences',
    description: 'Computer Science studies the theory and practice of computing in society. Because computing is embedded in nearly every aspect of society, a degree in computer science can lead you to practicing in a wide variety of fields.',
    shortDescription: 'Comprehensive computer science degree covering theory and practice of computing across diverse fields.',
    totalHours: '74-75',
    careers: 'Students graduating with one of our degrees are employed primarily in software development positions, with career paths that are highly diverse, depending on where their interest lies. Computer science alumni can be found in big tech companies, startups, government research labs, and non-profit companies. Alumni may be developing web or mobile applications, using machine learning to develop medical diagnostic algorithms, designing secure software for a bank, creating a new game, or developing software to control a swarm of drones. Alumni work in diverse industries, including finance, automotive, retail, health, and government contracting. Students also use a B.S. in Computer Science as a foundation to pursue graduate school in computer science, a career in academia, or a law degree.',
    requirements: [
      {
        title: 'Requirement 1 — Complete 13 Core Courses',
        courses: ['CS 111 - Intro to Computer Science', 'CS 191 - Exploring CS', 'CS 224 - Computer Systems', 'CS 235 - Data Structures', 'CS 236 - Discrete Structure', 'CS 240 - Adv Software Construction', 'CS 252 - Intro to Computational Theory', 'CS 260 - Web Programming', 'CS 291 - Careers in CS', 'CS 312 - Algorithm Design & Analysis', 'CS 324 - Systems Programming', 'CS 340 - Software Design', 'CS 404 - Ethics & Computers in Society']
      },
      {
        title: 'Requirement 2 — Complete 5 Supporting Courses',
        courses: ['MATH 112 - Calculus 1', 'MATH 213 - Elementary Linear Algebra', 'MATH 215 - Computational Linear Algebra', 'PHSCS 121 - Intro to Newtonian Mechanics', 'WRTG 316 - Technical Communication']
      },
      {
        title: 'Requirement 3 — Complete 1 of 3 Statistics Courses',
        courses: ['MATH 431 - Probability Theory', 'STAT 121 - Intro to Stat Data Analysis', 'STAT 201 - Stat for Engineers & Scientist']
      },
      {
        title: 'Requirement 4 — Complete 1 of 3 Advanced Math Courses',
        courses: ['MATH 113 - Calculus 2', 'MATH 290 - Fundamentals of Mathematics', 'STAT 220 - Stat Modeling for Data Science']
      },
      {
        title: 'Requirement 5 — Complete 21 hours from Advanced CS Courses',
        description: 'Choose from multiple options below:',
        courses: [
          'CS 329 - QA & DevOps', 'CS 330 - Concepts of Programng Lang', 'CS 345 - Operating Systems Design', 'CS 355 - Graphics and Image Processing', 'CS 356 - Advanced Techniques in HCI', 'CS 393 - Collaborative Probl Solving', 'CS 401R - Topics in Computer Science', 'CS 412 - Linear Prog/Convx Optimization', 'CS 416 - Advanced Algorithms', 'CS 428 - Software Engineering', 'CS 430 - Formal Verification', 'CS 431 - Algorithmic Lang & Compilers', 'CS 450 - Computer Vision', 'CS 452 - Database Modeling Concepts', 'CS 453 - Fund of Information Retrieval', 'CS 455 - Computer Graphics', 'CS 456 - Mobile and Ubiquitous HCI', 'CS 460 - Comp Comms & Networking', 'CS 462 - Distributed System Design', 'CS 465 - Computer Security', 'CS 466 - Blockchain Technologies', 'CS 470 - Intro Artificial Intelligence', 'CS 471 - Voice Interfaces', 'CS 473 - Advanced Machine Learning', 'CS 474 - Deep Learning', 'CS 479 - Intro to Machine Translation', 'CS 486 - Verification and Validation', 'CS 501R - Adv Topics in Computer Sci', 'CS 513 - Robust Control', 'CS 556 - Inter Soft Systems', 'CS 574 - Transformers for NLP', 'CS 575 - Intro to Network Science', 'CS 580 - Theory of Predictive Modeling',
          'CS 180 - Intro to Data Science', 'CS 202 - Software Engineering Lab 1', 'CS 203 - Software Engineering Lab 2', 'CS 204 - Software Engineering Lab 3', 'CS 256 - Introduction to HCI', 'CS 270 - Intro to Machine Learning', 'CS 405 - Software Business', 'CS 478 - Tools for Machine Learning', 'EC EN 220 - Fund of Digital Systems',
          'EC EN 330 - Intro Embedded Programming', 'EC EN 427 - Embedded Systems', 'IS 567 - Cybersecurity & Pen Testing', 'MATH 485 - Mathematical Cryptography',
          'CS 480 - Soft Eng Capstone 1', 'CS 481 - Soft Eng Capstone 2', 'CS 482 - Data Science Capstone 1', 'CS 483 - Data Science Capstone 2', 'CS 493R - Computing Competitions', 'CS 494 - Capstone 1', 'CS 495 - Capstone 2', 'CS 497R - Undergraduate Research', 'CS 498R - Undergraduate Special Projects'
        ]
      },
      {
        title: 'Requirement 6 — Senior Exit Interview',
        courses: ['Complete Senior Exit Interview with the CS department during your last semester or term']
      }
    ],
    courseIds: [
      // Requirement 1 - Core courses (13 courses)
      'cs111', 'cs191', 'cs224', 'cs235', 'cs236', 'cs240', 'cs252', 'cs260', 'cs291', 'cs312', 'cs324', 'cs340', 'cs404',
      // Requirement 2 - Supporting courses (5 courses)
      'math112', 'math213', 'math215', 'phscs121', 'wrtg316',
      // Requirement 3 - Statistics option (1 of 3)
      'math431', 'stat121', 'stat201',
      // Requirement 4 - Math option (1 of 3)
      'math113', 'math290', 'stat220',
      // Requirement 5 - Advanced CS courses (21 hours from multiple options)
      'cs329', 'cs330', 'cs345', 'cs355', 'cs356', 'cs393', 'cs401r', 'cs412', 'cs416', 'cs428', 'cs430', 'cs431', 'cs450', 'cs452', 'cs453', 'cs455', 'cs456', 'cs460', 'cs462', 'cs465', 'cs466', 'cs470', 'cs471', 'cs473', 'cs474', 'cs479', 'cs486', 'cs501r', 'cs513', 'cs556', 'cs574', 'cs575', 'cs580',
      'cs180', 'cs202', 'cs203', 'cs204', 'cs256', 'cs270', 'cs405', 'cs478', 'ecen220',
      'ecen330', 'ecen427', 'is567', 'math485',
      'cs480', 'cs481', 'cs482', 'cs483', 'cs493r', 'cs494', 'cs495', 'cs497r', 'cs498r'
    ]
  },
  {
    id: 'cs-animation-games-bs',
    name: 'Computer Science: Animation and Games (BS)',
    type: 'Major',
    college: 'Physical and Mathematical Sciences',
    description: 'The Computer Science Animation and Games Emphasis gives students the opportunity to learn both the technical and artistic side of creating and implementing digital animation and games, preparing them for technical careers with animation and game programming studios. Students in the program collaborate regularly with students in the Animation BFA. Students and faculty who work on both the CS emphasis and the Animation BFA are part of BYU\'s Center for Animation.',
    shortDescription: 'Combines computer science with animation and game development for careers in entertainment and interactive media.',
    totalHours: '77-81.5',
    careers: 'A valuable feature of the Animation and Games Emphasis is that students earn a degree in computer science. This qualifies them for software development in a wide variety of areas. Many of the alumni from this program have accepted positions at animation studios. Alumni are employed with some of the top studios in the industry, including Pixar, DreamWorks, Disney Animation, EntertainmentArts, Industrial Light + Magic, Avalanche Studios, and LucasFilmsAnimation. Alumni students have contributed to a number of recent blockbuster films, including Pirates of the Caribbean: Curse of the Dead Man\'s Chest, Chronicles of Narnia: The Lion the Witch and the Wardrobe, Chronicles of Narnia: Prince Caspian, Cars, Ratatouille, Shrek 3, and Transformers.',
    requirements: [
      {
        title: 'Requirement 1 — Complete 6 Prerequisite Courses',
        courses: ['CS 111 - Intro to Computer Science', 'CS 191 - Exploring CS', 'CS 235 - Data Structures', 'CS 291 - Careers in CS', 'CSANM 150 - Intro to 3D Graphics', 'DESAN 101 - Intro to Drawing for Pre-Anim']
      },
      {
        title: 'Program Admission',
        courses: ['Be admitted to the program']
      },
      {
        title: 'Requirement 2 — Complete 8 Core Courses After Admission',
        courses: ['CS 224 - Computer Systems', 'CS 236 - Discrete Structure', 'CS 240 - Adv Software Construction', 'CS 312 - Algorithm Design & Analysis', 'CS 324 - Systems Programming', 'CS 355 - Graphics and Image Processing', 'CS 455 - Computer Graphics', 'CSANM 250 - Interm 3D Computer Graphics']
      },
      {
        title: 'Requirement 3 — Complete 5 Supporting Courses',
        courses: ['MATH 112 - Calculus 1', 'MATH 213 - Elementary Linear Algebra', 'MATH 215 - Computational Linear Algebra', 'PHSCS 121 - Intro to Newtonian Mechanics', 'WRTG 316 - Technical Communication']
      },
      {
        title: 'Requirement 4 — Complete 1 of 2 Statistics Courses',
        courses: ['STAT 121 - Intro to Stat Data Analysis', 'STAT 201 - Stat for Engineers & Scientist']
      },
      {
        title: 'Requirement 5 — Complete 1 of 3 Math Options',
        courses: ['MATH 113 - Calculus 2', 'MATH 290 - Fundamentals of Mathematics', 'STAT 220 - Stat Modeling for Data Science']
      },
      {
        title: 'Requirement 6 — Complete 1 of 2 Animation Specialization Courses',
        courses: ['CSANM 342 - Real-time Techniques', 'CSANM 354 - Materials and Surfacing']
      },
      {
        title: 'Requirement 7 — Complete 1 of 2 Ethics Courses',
        courses: ['CS 404 - Ethics & Computers in Society', 'DESAN 460 - Business & Ethics in Animation']
      },
      {
        title: 'Requirement 8 — Complete 6 hours from Production Courses',
        courses: ['CSANM 352 - Animated Film Production 1', 'CSANM 450 - Animated Film Production 2', 'CSANM 452 - Animated Film Production 3', 'CSANM 459 - Video Game Production 1', 'CSANM 460 - Video Game Production 2']
      },
      {
        title: 'Requirement 9 — Complete 6 hours from CS Electives',
        courses: ['CS 252 - Intro to Computational Theory', 'CS 256 - Introduction to HCI', 'CS 260 - Web Programming', 'CS 270 - Intro to Machine Learning', 'CS 329 - QA & DevOps', 'CS 330 - Concepts of Programing Lang', 'CS 340 - Software Design', 'CS 345 - Operating Systems Design', 'CS 356 - Advanced Techniques in HCI', 'CS 393 - Collaborative Probl Solving', 'CS 401R - Topics in Computer Science', 'CS 412 - Linear Prog/Convx Optimization', 'CS 416 - Advanced Algorithms', 'CS 428 - Software Engineering', 'CS 430 - Formal Verification', 'CS 431 - Algorithmic Lang & Compilers', 'CS 450 - Computer Vision', 'CS 452 - Database Modeling Concepts', 'CS 453 - Fund of Information Retrieval', 'CS 456 - Mobile and Ubiquitous HCI', 'CS 460 - Comp Comms & Networking', 'CS 462 - Distributed System Design', 'CS 465 - Computer Security', 'CS 466 - Blockchain Technologies', 'CS 470 - Intro Artificial Intelligence', 'CS 471 - Voice Interfaces', 'CS 473 - Advanced Machine Learning', 'CS 474 - Deep Learning', 'CS 478 - Tools for Machine Learning', 'CS 479 - Intro to Machine Translation', 'CS 486 - Verification and Validation', 'CS 556 - Inter Soft Systems', 'CS 574 - Transformers for NLP', 'CS 575 - Intro to Network Science']
      },
      {
        title: 'Requirement 10 — Complete 6 hours from Additional Electives',
        courses: ['CS 401R - Topics in Computer Science', 'CS 412 - Linear Prog/Convx Optimization', 'CS 416 - Advanced Algorithms', 'CS 428 - Software Engineering', 'CS 430 - Formal Verification', 'CS 431 - Algorithmic Lang & Compilers', 'CS 450 - Computer Vision', 'CS 452 - Database Modeling Concepts', 'CS 453 - Fund of Information Retrieval', 'CS 456 - Mobile and Ubiquitous HCI', 'CS 460 - Comp Comms & Networking', 'CS 462 - Distributed System Design', 'CS 465 - Computer Security', 'CS 466 - Blockchain Technologies', 'CS 470 - Intro Artificial Intelligence', 'CS 471 - Voice Interfaces', 'CS 473 - Advanced Machine Learning', 'CS 474 - Deep Learning', 'CS 479 - Intro to Machine Translation', 'CS 486 - Verification and Validation', 'CS 498R - Undergraduate Special Projects', 'CS 500 - Business Career Essentials', 'CS 501R - Adv Topics in Computer Sci', 'CS 513 - Robust Control', 'CS 556 - Inter Soft Systems', 'CS 574 - Transformers for NLP', 'CS 575 - Intro to Network Science', 'CS 580 - Theory of Predictive Modeling', 'CSANM 210 - Visual Narrative', 'CSANM 252 - Intro 3D Animation', 'CSANM 258 - Scripting for Animation', 'CSANM 340 - Game Design', 'CSANM 342 - Real-time Techniques', 'CSANM 351R - Lighting for 3D Graphics', 'CSANM 353 - Previsualization', 'CSANM 354 - Materials and Surfacing', 'CSANM 355 - Photography for Animation', 'CSANM 452 - Senior Film Production 2', 'CSANM 454 - Advanced Shading', 'CSANM 458R - 3D Visual Effects', 'DESAN 364R - Digital Sculpting', 'EC EN 425 - Real-Time Operating Systems']
      },
      {
        title: 'Requirement 11 — Complete 1 of 3 Art History Courses',
        courses: ['ARTHC 111 - Introduction to Art History', 'ARTHC 202 - World Civilization Since 1500', 'TMA 294 - History of Animation']
      },
      {
        title: 'Requirement 12 — Senior Exit Interview',
        courses: ['Complete Senior Exit interview with the CS department during your last semester or term']
      }
    ],
    courseIds: [
      // Requirement 1 - Prerequisites (6 courses)
      'cs111', 'cs191', 'cs235', 'cs291', 'csanm150', 'desan101',
      // Requirement 2 - Core after admission (8 courses)
      'cs224', 'cs236', 'cs240', 'cs312', 'cs324', 'cs355', 'cs455', 'csanm250',
      // Requirement 3 - Supporting courses (5 courses)
      'math112', 'math213', 'math215', 'phscs121', 'wrtg316',
      // Requirement 4 - Statistics (1 of 2)
      'stat121', 'stat201',
      // Requirement 5 - Math option (1 of 3)
      'math113', 'math290', 'stat220',
      // Requirement 6 - Animation specialization (1 of 2)
      'csanm342', 'csanm354',
      // Requirement 7 - Ethics (1 of 2)
      'cs404', 'desan460',
      // Requirement 8 - Production courses (6 hours)
      'csanm352', 'csanm450', 'csanm452', 'csanm459', 'csanm460',
      // Requirement 9 - CS Electives (6 hours)
      'cs252', 'cs256', 'cs260', 'cs270', 'cs329', 'cs330', 'cs340', 'cs345', 'cs356', 'cs393', 'cs401r', 'cs412', 'cs416', 'cs428', 'cs430', 'cs431', 'cs450', 'cs452', 'cs453', 'cs456', 'cs460', 'cs462', 'cs465', 'cs466', 'cs470', 'cs471', 'cs473', 'cs474', 'cs478', 'cs479', 'cs486', 'cs556', 'cs574', 'cs575',
      // Requirement 10 - Additional electives (6 hours)
      'csanm210', 'csanm252', 'csanm258', 'csanm340', 'csanm351r', 'csanm353', 'csanm355', 'csanm454', 'csanm458r', 'desan364r', 'ecen425',
      'cs498r', 'cs500', 'cs501r', 'cs513', 'cs580',
      // Requirement 11 - Art History (1 of 3)
      'arthc111', 'arthc202', 'tma294'
    ]
  },
  {
    id: 'cs-bioinformatics-bs',
    name: 'Computer Science: Bioinformatics (BS)',
    type: 'Major',
    college: 'Physical and Mathematical Sciences',
    description: 'Bioinformatics is an interdisciplinary field that uses techniques from computer science to study problems in genetics and molecular biology. Brigham Young University offers two paths to studying Bioinformatics: The Bioinformatics degree in the Biology department and The Computer Science emphasis in Bioinformatics. Both degrees provide an entry into careers in computational biology, with the Biology program providing more depth in Biology courses and the CS degree providing more depth in computer science classes.',
    shortDescription: 'Interdisciplinary program combining computer science with biology and genetics for computational biology careers.',
    totalHours: '79-81',
    careers: 'Students are prepared for software development with a specialty in biotechnology. Students can also pursue a graduate degree in Business, Law, Medicine (general medicine, dentistry and veterinary medicine) Computer Science and the Sciences (Biology, Bioinformatics, Biomedical Engineering, Computational Biology and Genetics).',
    requirements: [
      {
        title: 'Complete 10 Computer Science Core Courses',
        courses: ['CS 111', 'CS 191', 'CS 224', 'CS 235', 'CS 236', 'CS 240', 'CS 270', 'CS 291', 'CS 312', 'CS 404']
      },
      {
        title: 'Complete 7 Biology Core Courses',
        courses: ['BIO 130', 'BIO 165', 'BIO 264', 'BIO 364', 'BIO 465', 'MMBIO 240', 'PWS 340']
      },
      {
        title: 'Complete 5 Supporting Courses',
        courses: ['CHEM 105', 'MATH 112', 'MATH 213', 'MATH 215', 'WRTG 316']
      },
      {
        title: 'Complete 1 of 2 Evolution Courses',
        courses: ['BIO 250', 'BIO 420']
      },
      {
        title: 'Complete 1 of 2 Advanced Machine Learning Courses',
        courses: ['CS 473', 'CS 474']
      },
      {
        title: 'Complete 12 hours of electives from approved course list',
        courses: ['Various elective options available']
      },
      {
        title: 'Complete Senior Exit Interview',
        courses: ['Complete Senior Exit Interview with the CS department']
      }
    ],
    courseIds: [
      // Requirement 1 - CS Core (10 courses)
      'cs111', 'cs191', 'cs224', 'cs235', 'cs236', 'cs240', 'cs270', 'cs291', 'cs312', 'cs404',
      // Requirement 2 - Biology Core (7 courses)
      'bio130', 'bio165', 'bio264', 'bio364', 'bio465', 'mmbio240', 'pws340',
      // Requirement 3 - Supporting courses (5 courses)
      'chem105', 'math112', 'math213', 'math215', 'wrtg316',
      // Requirement 4 - Evolution (1 of 2)
      'bio250', 'bio420',
      // Requirement 5 - Advanced ML (1 of 2)
      'cs473', 'cs474',
      // Requirement 6 - Electives (12 hours)
      'bio463', 'cs256', 'cs260', 'cs329', 'cs330', 'cs345', 'cs355', 'cs356', 'cs393', 'cs401r', 'cs405', 'cs412', 'cs416', 'cs428', 'cs430', 'cs431', 'cs450', 'cs452', 'cs453', 'cs455', 'cs456', 'cs460', 'cs462', 'cs465', 'cs466', 'cs470', 'cs471', 'cs478', 'cs479', 'cs480', 'cs481', 'cs482', 'cs483', 'cs486', 'cs493r', 'cs513', 'cs556', 'cs574', 'cs575', 'cs580',
      'cs497r', 'cs498r'
    ]
  },
  {
    id: 'cs-software-engineering-bs',
    name: 'Computer Science: Software Engineering (BS)',
    type: 'Major',
    college: 'Physical and Mathematical Sciences',
    description: 'Software engineering is a branch of computer science that uses methods and principles of design, engineering and testing to create and maintain large and sophisticated software products. Modern software is often composed from distributed components, communicating over the Internet, requiring sophisticated designs to ensure they operate efficiently. Software engineers have a variety of concerns, including customer requirements, user interfaces, management and team dynamics, maintenance, reliability, and budgets. Software developers are among the most highly paid and highly sought-after employees in today\'s workforce.',
    shortDescription: 'Focuses on large-scale software development, engineering principles, and project management for enterprise applications.',
    totalHours: '74-76',
    careers: 'The day-to-day tasks of a software engineer are varied and diverse. Some of the tasks that such professionals perform include: Creating Software Plans and Designs, Working and communicating with large groups of people, Creating new software products, Developing new software features for existing products, Upgrading systems to ensure continued and future compatibility, Working with very large code bases, Integrating smaller pieces of software into larger and more complex systems. Software engineer roles include: Programmer/Software Engineer, Quality Assurance Engineer, UI/UX Designer, Software Architect, Manager, Software Engineering Director, VP of Technology, Chief Technology Officer (CTO).',
    requirements: [
      { title: 'Complete 19 Core Courses', courses: ['CS 111', 'CS 191', 'CS 202', 'CS 203', 'CS 204', 'CS 224', 'CS 235', 'CS 236', 'CS 240', 'CS 260', 'CS 291', 'CS 312', 'CS 324', 'CS 329', 'CS 340', 'CS 404', 'CS 452', 'CS 480', 'CS 481'] },
      { title: 'Complete 5 Supporting Courses', courses: ['MATH 112', 'MATH 213', 'MATH 215', 'PHSCS 121', 'WRTG 316'] },
      { title: 'Complete 1 of 2 Statistics Courses', courses: ['STAT 121', 'STAT 201'] },
      { title: 'Complete 1 of 3 Math Options', courses: ['MATH 113', 'MATH 290', 'STAT 220'] },
      { title: 'Complete 2 of 11 Software Engineering Focus Courses', courses: ['CS 256', 'CS 270', 'CS 330', 'CS 345', 'CS 356', 'CS 453', 'CS 456', 'CS 460', 'CS 462', 'CS 465', 'CS 473', 'CS 486'] },
      { title: 'Complete 3 hours of additional electives', courses: ['Various elective options available'] },
      { title: 'Complete Senior Exit Interview', courses: ['Complete Senior Exit Interview with the CS department'] }
    ],
    courseIds: [
      // Requirement 1 - Core courses (19 courses)
      'cs111', 'cs191', 'cs202', 'cs203', 'cs204', 'cs224', 'cs235', 'cs236', 'cs240', 'cs260', 'cs291', 'cs312', 'cs324', 'cs329', 'cs340', 'cs404', 'cs452', 'cs480', 'cs481',
      // Requirement 2 - Supporting courses (5 courses)
      'math112', 'math213', 'math215', 'phscs121', 'wrtg316',
      // Requirement 3 - Statistics (1 of 2)
      'stat121', 'stat201',
      // Requirement 4 - Math option (1 of 3)
      'math113', 'math290', 'stat220',
      // Requirement 5 - SE Focus courses (2 of 11)
      'cs256', 'cs270', 'cs330', 'cs345', 'cs356', 'cs453', 'cs456', 'cs460', 'cs462', 'cs465', 'cs473', 'cs486',
      // Requirement 6 - Additional electives (3 hours)
      'cs252', 'cs355', 'cs393', 'cs401r', 'cs405', 'cs412', 'cs416', 'cs430', 'cs450', 'cs455', 'cs466', 'cs470', 'cs471', 'cs474', 'cs479', 'cs493r', 'cs497r', 'cs498r', 'cs501r', 'cs513', 'cs556', 'cs574', 'cs575', 'cs580',
      'ecen424', 'ecen425', 'itc567', 'math411', 'math431', 'math485'
    ]
  },
  {
    id: 'machine-learning-bs',
    name: 'Machine Learning (BS)',
    type: 'Major',
    college: 'Physical and Mathematical Sciences',
    description: 'Machine Learning is the fundamental technology that enables computer programs to mimic the ability of humans to learn and reason. This technology powers things like self-driving cars, facial recognition, algorithms to identify what is in a photo, fraud detection for credit card companies, systems that identify which traffic entering a network might be malicious, programs that decide whether a medical image indicates a sign of a significant disease, and chat bots.',
    shortDescription: 'Specialized degree in machine learning, AI, and data science for cutting-edge technology careers.',
    totalHours: '74',
    careers: 'The BYU Machine Learning major prepares students for competitive positions in many of the world\'s best companies. The major also serves as excellent preparation for graduate work in machine learning and the broader field of artificial intelligence. Graduates of this program will be able to curate and maintain data, build models to effectively analyze this data, and understand the principles of modeling and the basis of the models themselves in order to draw accurate conclusions from these analyses. Graduates will be able to provide insight into how machine learning can be used in a variety of applications, and will be able to follow ethical and responsible practices when designing applications.',
    requirements: [
      { title: 'Complete 12 Core CS Courses', courses: ['CS 111', 'CS 180', 'CS 191', 'CS 235', 'CS 236', 'CS 240', 'CS 270', 'CS 291', 'CS 312', 'CS 404', 'CS 473', 'CS 474'] },
      { title: 'Complete 3 Math Core Courses', courses: ['MATH 112', 'MATH 290', 'MATH 380'] },
      { title: 'Complete 2 Linear Algebra Courses', courses: ['MATH 213', 'MATH 215'] },
      { title: 'Complete 1 of 2 Statistics Foundation Courses', courses: ['STAT 121', 'STAT 201'] },
      { title: 'Complete 1 of 3 Advanced Statistics Courses', courses: ['ECON 388', 'STAT 220', 'STAT 330'] },
      { title: 'Complete 3 of 7 ML Specialization Courses', courses: ['CS 412', 'CS 450', 'CS 470', 'CS 471', 'CS 479', 'CS 574', 'MATH 522'] },
      { title: 'Complete 6 hours from Capstone options', courses: ['CS 482', 'CS 483', 'CS 497R'] },
      { title: 'Complete 9 hours of additional electives', courses: ['Various elective options available'] },
      { title: 'Complete Senior Exit Interview', courses: ['Complete Senior Exit Interview with the CS department'] }
    ],
    courseIds: [
      // Requirement 1 - Core CS (12 courses)
      'cs111', 'cs180', 'cs191', 'cs235', 'cs236', 'cs240', 'cs270', 'cs291', 'cs312', 'cs404', 'cs473', 'cs474',
      // Requirement 2 - Math Core (3 courses)
      'math112', 'math290', 'math380',
      // Requirement 3 - Linear Algebra (2 courses)
      'math213', 'math215',
      // Requirement 4 - Statistics foundation (1 of 2)
      'stat121', 'stat201',
      // Requirement 5 - Advanced Statistics (1 of 3)
      'econ388', 'stat220', 'stat330',
      // Requirement 6 - ML Specialization (3 of 7)
      'cs412', 'cs450', 'cs470', 'cs471', 'cs479', 'cs574', 'math522',
      // Requirement 7 - Capstone options
      'cs482', 'cs483', 'cs497r',
      // Requirement 8 - Additional electives (9 hours)
      'cs452', 'cs453', 'cs513', 'cs575', 'cs580',
      'econ378', 'ling581', 'math113', 'math314', 'math413', 'math431',
      'stat240', 'stat251', 'stat340', 'stat386'
    ]
  },
  {
    id: 'cs-minor',
    name: 'Computer Science (Minor)',
    type: 'Minor',
    college: 'Physical and Mathematical Sciences',
    description: 'A Computer Science minor provides students from other majors with a way to demonstrate that they have a basic level of competency in computing. As technology becomes increasingly ubiquitous, affecting everything from medical breakthroughs to the appliances in our kitchens, it is critical for the general student population to gain computing skills. Training in computer science gives students skills they can use in the workplace and enables students to develop computational solutions in various fields of study.',
    shortDescription: 'Essential computer science foundation for students from other majors seeking computing skills.',
    totalHours: '19',
    careers: 'The minor provides students with 13 hours (four courses) of training. This foundation is complemented by six additional hours (two courses) of electives in computer science that will deepen the student\'s knowledge in an area of computing most appropriate for their area of interest. For example, there are options for students wishing to emphasize web development, programming languages, computer systems, machine learning, algorithms, and a variety of other fields.',
    requirements: [
      { title: 'Complete 4 Core Courses', courses: ['CS 111', 'CS 235', 'CS 236', 'CS 240'] },
      { title: 'Complete 6 hours from approved CS electives', courses: ['Various elective options available'] },
      { title: 'Maintain grades of C- or better', courses: ['Maintain grades of C- or better in all minor courses'] }
    ],
    courseIds: [
      // Requirement 1 - Core (4 courses)
      'cs111', 'cs235', 'cs236', 'cs240',
      // Requirement 2 - Electives (6 hours from many options)
      'cs180', 'cs201r', 'cs252', 'cs256', 'cs260', 'cs270', 'cs301r', 'cs312', 'cs324', 'cs329', 'cs330', 'cs340', 'cs345', 'cs355', 'cs356', 'cs393', 'cs401r', 'cs412', 'cs416', 'cs428', 'cs430', 'cs431', 'cs450', 'cs452', 'cs453', 'cs455', 'cs456', 'cs460', 'cs462', 'cs465', 'cs466', 'cs470', 'cs471', 'cs473', 'cs474', 'cs479', 'cs486',
      'cs224', 'ecen224'
    ]
  },
  {
    id: 'cs-teaching-minor',
    name: 'Computer Science Teaching (Minor)',
    type: 'Minor',
    college: 'Physical and Mathematical Sciences',
    description: 'The Computer Science Teaching minor is only offered to education majors and is designed to prepare students to teach in public schools. A teaching minor may only be received by students graduating with a teaching major. In order to graduate with this minor, students are required to complete Utah State Office of Education licensing requirements.',
    shortDescription: 'Prepares education majors to teach computer science in public schools with Utah licensing.',
    totalHours: '22',
    careers: 'This minor prepares education majors to teach computer science in public schools and meets the educational requirements designed to lead to an occupationally required professional license or certificate in the state of Utah.',
    requirements: [
      { title: 'Complete 6 Core Courses', courses: ['CS 111', 'CS 224', 'CS 235', 'CS 236', 'CS 240', 'TES 377'] },
      { title: 'Complete Student Teaching Course', courses: ['CS 477R'] },
      { title: 'Complete background clearance', courses: ['Complete FBI fingerprinting and background clearance'] },
      { title: 'Maintain academic standards', courses: ['Maintain grades of C or better', 'Maintain cumulative GPA of 2.7 or higher'] },
      { title: 'Complete licensing requirements', courses: ['Complete Utah State Office of Education licensing requirements'] }
    ],
    courseIds: [
      // Requirement 1 - Core courses (6 courses)
      'cs111', 'cs224', 'cs235', 'cs236', 'cs240', 'tes377',
      // Requirement 2 - Student Teaching (1 course)
      'cs477r'
    ]
  }
];

export const PROGRAMS: Program[] = programs;
