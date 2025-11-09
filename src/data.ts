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
    id: "cs142",
    number: 142,
    title: "Introduction to Computer Programming",
    department: "CS",
    requirement: "Core",
    credits: 3.0,
    topics: ["Programming", "Software Engineering"],
    semesters: ["Fall", "Winter"],
    prerequisites: [],
    outcomes: [
      "Understand fundamental programming concepts",
      "Write simple programs using structured programming",
      "Apply debugging and problem-solving techniques"
    ],
    description:
      "Introductory programming course covering control structures, functions, arrays, and basic problem solving."
  },
  {
    id: "cs224",
    number: 224,
    title: "Introduction to Computer Systems",
    department: "CS",
    requirement: "Core",
    credits: 3.0,
    topics: ["Systems", "Programming"],
    semesters: ["Fall", "Winter"],
    prerequisites: ["CS 142"],
    outcomes: [
      "Understand low-level programming concepts",
      "Explain computer architecture basics",
      "Write programs interacting with operating system features"
    ],
    description:
      "Overview of computer systems, assembly language, memory, and the interaction between software and hardware."
  },
  {
    id: "cs235",
    number: 235,
    title: "Data Structures and Algorithms",
    department: "CS",
    requirement: "Core",
    credits: 3.0,
    topics: ["Programming", "Theory", "Software Engineering"],
    semesters: ["Fall", "Winter"],
    prerequisites: ["CS 111", "CS 142"],
    outcomes: [
      "Implement lists, trees, and graphs",
      "Analyze time and space complexity",
      "Apply data structures to solve computational problems"
    ],
    description:
      "Classic data structures and algorithms including recursion, trees, graphs, and complexity analysis."
  },
  {
    id: "cs236",
    number: 236,
    title: "Discrete Structures",
    department: "CS",
    requirement: "Core",
    credits: 3.0,
    topics: ["Theory"],
    semesters: ["Fall", "Winter"],
    prerequisites: [],
    outcomes: [
      "Apply logic and proof techniques",
      "Understand sets, relations, and functions",
      "Use discrete math in computer science contexts"
    ],
    description:
      "Introduction to discrete mathematics with applications to logic, sets, relations, functions, and proofs."
  },
  {
    id: "cs240",
    number: 240,
    title: "Advanced Programming Concepts",
    department: "CS",
    requirement: "Core",
    credits: 4.0,
    topics: ["Programming", "Software Engineering"],
    semesters: ["Fall", "Winter", "Spring", "Summer"],
    prerequisites: ["CS 235"],
    outcomes: [
      "Apply object-oriented design principles",
      "Develop scalable and maintainable software",
      "Work effectively with advanced programming paradigms"
    ],
    description:
      "Advanced programming and software development techniques, with emphasis on object-oriented design and software quality."
  },
  {
    id: "cs252",
    number: 252,
    title: "Introduction to Computational Theory",
    requirement: "Core",
    credits: 3.0,
    topics: ["Theory"],
    semesters: ["Fall", "Winter"],
    prerequisites: ["CS 236"],
    outcomes: [
      "Understand finite automata and regular languages",
      "Explain context-free grammars",
      "Describe computational limits and undecidability"
    ],
    description:
      "Foundations of computational theory, including automata, languages, and limits of computation."
  },
  {
    id: "cs312",
    number: 312,
    title: "Algorithm Design and Analysis",
    requirement: "Core",
    credits: 3.0,
    topics: ["Theory", "Programming"],
    semesters: ["Fall", "Winter"],
    prerequisites: ["CS 235", "CS 236"],
    outcomes: [
      "Design algorithms using divide-and-conquer, greedy, and dynamic programming",
      "Prove algorithm correctness",
      "Analyze algorithmic efficiency"
    ],
    description:
      "Covers algorithm design techniques, correctness proofs, and efficiency analysis."
  },
  {
    id: "cs324",
    number: 324,
    title: "Systems Programming",
    requirement: "Core",
    credits: 3.0,
    topics: ["Systems", "Software Engineering"],
    semesters: ["Fall", "Winter"],
    prerequisites: ["CS 224"],
    outcomes: [
      "Develop programs that interact closely with operating systems",
      "Understand processes, threads, and memory management",
      "Apply systems-level debugging techniques"
    ],
    description:
      "Programming in a systems environment, covering concurrency, memory, and OS-level development."
  },
  {
    id: "cs340",
    number: 340,
    title: "Software Design",
    requirement: "Core",
    credits: 3.0,
    topics: ["Software Engineering"],
    semesters: ["Fall", "Winter"],
    prerequisites: ["CS 240"],
    outcomes: [
      "Design and implement complex software systems",
      "Apply software design patterns",
      "Work in teams using modern software engineering practices"
    ],
    description:
      "Software design principles, architecture, patterns, and collaborative development practices."
  },
  {
    id: "cs404",
    number: 404,
    title: "Ethics and Computers in Society",
    requirement: "Core",
    credits: 2.0,
    topics: ["Ethics", "Society", "Software Engineering"],
    semesters: ["Fall", "Winter"],
    prerequisites: [],
    outcomes: [
      "Evaluate ethical issues in computing",
      "Understand the societal impacts of computer technology",
      "Apply ethical reasoning in professional contexts"
    ],
    description:
      "Study of ethical issues in computer science and the broader impact of computing on society."
  },
  {
    id: "cs260",
    number: 260,
    title: "Web Programming",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Programming", "HCI", "Software Engineering"],
    semesters: ["Fall", "Winter"],
    prerequisites: ["CS 111"],
    outcomes: ["Build web applications", "Understand client-server architecture"],
    description: "Covers full-stack web programming including HTML, CSS, JS, and backend basics."
  },
  {
    id: "cs329",
    number: 329,
    title: "Testing, Analysis, and Verification",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Software Engineering"],
    semesters: [],
    prerequisites: ["CS 240"],
    outcomes: ["Apply software testing techniques", "Analyze program correctness"],
    description: "Software testing, analysis, and formal verification methods."
  },
  {
    id: "cs330",
    number: 330,
    title: "Concepts of Programming Languages",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Theory", "Programming"],
    semesters: [],
    prerequisites: ["CS 240"],
    outcomes: ["Compare programming paradigms", "Understand language design"],
    description: "Explores principles of programming languages and paradigms."
  },
  {
    id: "cs345",
    number: 345,
    title: "Operating Systems Design",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Systems", "Software Engineering"],
    semesters: ["Fall", "Winter"],
    prerequisites: ["CS 324"],
    outcomes: ["Design basic OS components", "Understand process management"],
    description: "Introduction to operating system concepts and design."
  },
  {
    id: "cs355",
    number: 355,
    title: "Interactive Graphics and Image Processing",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Data & AI", "HCI"],
    semesters: ["Fall"],   // offered only in Fall
    prerequisites: [],
    outcomes: ["Apply computer graphics techniques", "Implement image processing basics"],
    description: "Introduction to interactive graphics and image processing methods."
  },
  {
    id: "cs356",
    number: 356,
    title: "Designing the User Experience",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI", "Software Engineering"],
    semesters: ["Fall", "Winter"],
    prerequisites: ["CS 256"],
    outcomes: ["Conduct user research", "Prototype and evaluate interfaces"],
    description: "Covers principles and practices of UX design."
  },
  {
    id: "cs393",
    number: 393,
    title: "Advanced Algorithms and Problem Solving",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Theory"],
    semesters: ["Fall", "Winter"],
    prerequisites: ["CS 312"],
    outcomes: ["Apply advanced algorithmic techniques", "Solve competitive problems"],
    description: "Explores advanced algorithms and techniques for problem solving."
  },
  {
    id: "cs401r",
    number: 401,
    title: "Topics in Computer Science",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Software Engineering", "Theory", "Systems"],
    semesters: ["Fall", "Winter"],
    prerequisites: [],
    outcomes: ["Study advanced topics", "Apply concepts to modern CS issues"],
    description: "Variable topics in computer science."
  },
  {
    id: "cs412",
    number: 412,
    title: "Linear Programming and Convex Optimization",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Theory", "Data & AI"],
    semesters: ["Fall"],  // offered only in Fall
    prerequisites: [],
    outcomes: ["Formulate optimization problems", "Apply convex optimization methods"],
    description: "Introduction to optimization theory and applications."
  },
  {
    id: "cs428",
    number: 428,
    title: "Software Engineering",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Software Engineering"],
    semesters: ["Fall", "Winter"],
    prerequisites: ["CS 240"],
    outcomes: ["Work in software teams", "Apply SE processes"],
    description: "Principles and practices of modern software engineering."
  },
  {
    id: "cs431",
    number: 431,
    title: "Algorithmic Languages and Compilers",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Theory", "Programming"],
    semesters: [], // not listed in 2-year plan
    prerequisites: [],
    outcomes: ["Understand compiler design", "Build language parsers"],
    description: "Study of compilers and algorithmic languages."
  },
  {
    id: "cs450",
    number: 450,
    title: "Computer Vision",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Data & AI"],
    semesters: ["Winter"], // offered only in Winter
    prerequisites: [],
    outcomes: ["Apply computer vision algorithms", "Understand image recognition"],
    description: "Introduction to computer vision techniques and applications."
  },
  {
    id: "cs452",
    number: 452,
    title: "Database Modeling Concepts",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Systems", "Data & AI"],
    semesters: ["Fall", "Winter", "Spring"],
    prerequisites: [],
    outcomes: ["Design relational databases", "Understand SQL fundamentals"],
    description: "Database theory, modeling, and querying."
  },
  {
    id: "cs453",
    number: 453,
    title: "Fundamentals of Information Retrieval",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Data & AI"],
    semesters: [], // not listed
    prerequisites: [],
    outcomes: ["Implement search algorithms", "Understand IR systems"],
    description: "Information retrieval principles and applications."
  },
  {
    id: "cs455",
    number: 455,
    title: "Computer Graphics",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI", "Data & AI"],
    semesters: ["Winter"], // offered only in Winter
    prerequisites: [],
    outcomes: ["Render 3D graphics", "Understand rendering pipelines"],
    description: "Introduction to computer graphics and visualization."
  },
  {
    id: "cs456",
    number: 456,
    title: "Introduction to User Interface Software",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI", "Software Engineering"],
    semesters: ["Winter"], // offered only in Winter
    prerequisites: [],
    outcomes: ["Develop UI software", "Apply usability principles"],
    description: "Covers design and implementation of user interface software."
  },
  {
    id: "cs460",
    number: 460,
    title: "Computer Communications and Networking",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Systems"],
    semesters: [], // not listed
    prerequisites: [],
    outcomes: ["Understand network layers", "Implement network protocols"],
    description: "Principles of computer networks and data communications."
  },
  {
    id: "cs462",
    number: 462,
    title: "Large-Scale Distributed System Design",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Systems", "Software Engineering"],
    semesters: [], // not listed
    prerequisites: [],
    outcomes: ["Design distributed systems", "Understand scalability challenges"],
    description: "Covers design of distributed and scalable systems."
  },
  {
    id: "cs465",
    number: 465,
    title: "Computer Security",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Systems", "Software Engineering"],
    semesters: ["Fall", "Winter"],
    prerequisites: [],
    outcomes: ["Apply security principles", "Analyze vulnerabilities"],
    description: "Introduction to computer security and defensive techniques."
  },
  {
    id: "cs470",
    number: 470,
    title: "Introduction to Artificial Intelligence",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Data & AI"],
    semesters: ["Fall"], // offered only in Fall
    prerequisites: [],
    outcomes: ["Understand AI basics", "Implement search and reasoning algorithms"],
    description: "Introductory course in artificial intelligence."
  },
  {
    id: "cs471",
    number: 471,
    title: "Voice User Interfaces",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI"],
    semesters: ["Winter"], // offered only in Winter
    prerequisites: [],
    outcomes: ["Design voice interfaces", "Understand speech interaction"],
    description: "Covers the design and implementation of voice-based interfaces."
  },
  {
    id: "cs472",
    number: 472,
    title: "Introduction to Machine Learning",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Data & AI"],
    semesters: ["Fall", "Winter"],
    prerequisites: ["CS 235"],
    outcomes: ["Train ML models", "Evaluate model performance"],
    description: "Introduction to supervised and unsupervised machine learning."
  },
  {
    id: "cs474",
    number: 474,
    title: "Introduction to Deep Learning",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Data & AI"],
    semesters: ["Fall", "Winter"],
    prerequisites: ["CS 472"],
    outcomes: ["Build neural networks", "Understand deep learning architectures"],
    description: "Covers neural networks and deep learning methods."
  },
  {
    id: "cs479",
    number: 479,
    title: "(Not currently offered)",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Programming"],
    semesters: [], // not offered
    prerequisites: [],
    outcomes: [],
    description: "This course is currently not offered."
  },
  {
    id: "cs486",
    number: 486,
    title: "Verification and Validation",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Software Engineering"],
    semesters: ["Winter"], // offered only in Winter
    prerequisites: [],
    outcomes: ["Apply verification methods", "Validate software systems"],
    description: "Software verification and validation techniques."
  },
  {
    id: "cs501r",
    number: 501,
    title: "Advanced Topics in Computer Science",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Software Engineering", "Theory", "Data & AI"],
    semesters: ["Fall"], // offered only in Fall
    prerequisites: [],
    outcomes: ["Explore advanced CS topics", "Apply new research ideas"],
    description: "Rotating topics in advanced computer science."
  },
  {
    id: "cs513",
    number: 513,
    title: "Robust Control",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Theory"],
    semesters: ["Winter"], // offered only in Winter
    prerequisites: [],
    outcomes: ["Understand control theory", "Apply robust optimization methods"],
    description: "Introduction to robust control systems."
  },
  // FIXME: Add complete course data for the following courses
  {
    id: "cs111",
    number: 111,
    title: "Intro to Computer Science",
    requirement: "Core",
    credits: 3.0,
    topics: ["Programming"],
    semesters: ["Fall", "Winter"],
    prerequisites: [],
    outcomes: ["Basic programming concepts"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs191",
    number: 191,
    title: "Exploring CS",
    requirement: "Core", 
    credits: 0.5,
    topics: ["Programming"],
    semesters: ["Fall", "Winter"],
    prerequisites: [],
    outcomes: ["Explore CS fields"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs291",
    number: 291,
    title: "Careers in CS",
    requirement: "Core",
    credits: 0.5,
    topics: ["Society"],
    semesters: ["Fall", "Winter"],
    prerequisites: [],
    outcomes: ["Career awareness"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs180",
    number: 180,
    title: "Intro to Data Science",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Data & AI"],
    semesters: ["Fall", "Winter"],
    prerequisites: [],
    outcomes: ["Data analysis fundamentals"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs202",
    number: 202,
    title: "Software Engineering Lab 1",
    requirement: "Elective",
    credits: 1.0,
    topics: ["Software Engineering"],
    semesters: ["Fall", "Winter"],
    prerequisites: [],
    outcomes: ["Lab experience"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs203",
    number: 203,
    title: "Software Engineering Lab 2",
    requirement: "Elective",
    credits: 1.0,
    topics: ["Software Engineering"],
    semesters: ["Fall", "Winter"],
    prerequisites: [],
    outcomes: ["Advanced lab experience"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs204",
    number: 204,
    title: "Software Engineering Lab 3",
    requirement: "Elective",
    credits: 1.0,
    topics: ["Software Engineering"],
    semesters: ["Fall", "Winter"],
    prerequisites: [],
    outcomes: ["Expert lab experience"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs256",
    number: 256,
    title: "Introduction to HCI",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI"],
    semesters: ["Fall", "Winter"],
    prerequisites: [],
    outcomes: ["HCI fundamentals"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs270",
    number: 270,
    title: "Intro to Machine Learning",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Data & AI"],
    semesters: ["Fall", "Winter"],
    prerequisites: [],
    outcomes: ["ML basics"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs405",
    number: 405,
    title: "Software Business",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Software Engineering"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Business skills"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs416",
    number: 416,
    title: "Advanced Algorithms",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Theory"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Advanced algorithmic techniques"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs430",
    number: 430,
    title: "Formal Verification", 
    requirement: "Elective",
    credits: 3.0,
    topics: ["Theory"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Verification methods"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs466",
    number: 466,
    title: "Blockchain Technologies",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Systems"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Blockchain fundamentals"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs473",
    number: 473,
    title: "Advanced Machine Learning",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Data & AI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Advanced ML techniques"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs478",
    number: 478,
    title: "Tools for Machine Learning",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Data & AI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["ML tools"],
    description: "FIXME: Add full description - Course no longer available"
  },
  {
    id: "cs480",
    number: 480,
    title: "Soft Eng Capstone 1",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Software Engineering"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Capstone project"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs481",
    number: 481,
    title: "Soft Eng Capstone 2",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Software Engineering"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Advanced capstone"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs482",
    number: 482,
    title: "Data Science Capstone 1",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Data & AI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Data science project"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs483",
    number: 483,
    title: "Data Science Capstone 2",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Data & AI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Advanced data science project"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs493r",
    number: 493,
    title: "Computing Competitions",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Theory"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Competition skills"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs494",
    number: 494,
    title: "Capstone 1",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Software Engineering"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Capstone project"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs495",
    number: 495,
    title: "Capstone 2",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Software Engineering"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Advanced capstone"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs497r",
    number: 497,
    title: "Undergraduate Research",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Theory"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Research experience"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs498r",
    number: 498,
    title: "Undergraduate Special Projects",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Software Engineering"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Special projects"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs500",
    number: 500,
    title: "Business Career Essentials",
    requirement: "Elective",
    credits: 1.5,
    topics: ["Software Engineering"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Career skills"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs556",
    number: 556,
    title: "Inter Soft Systems",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Systems"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Interactive systems"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs574",
    number: 574,
    title: "Transformers for NLP",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Data & AI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["NLP techniques"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs575",
    number: 575,
    title: "Intro to Network Science",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Data & AI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Network analysis"],
    description: "FIXME: Add full description"
  },
  {
    id: "cs580",
    number: 580,
    title: "Theory of Predictive Modeling",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Data & AI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Predictive modeling"],
    description: "FIXME: Add full description"
  },
  // Animation courses - FIXME: Add complete data
  {
    id: "csanm150",
    number: 150,
    title: "Intro to 3D Graphics",
    requirement: "Elective",
    credits: 1.5,
    topics: ["HCI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["3D graphics basics"],
    description: "FIXME: Add full description"
  },
  {
    id: "csanm250",
    number: 250,
    title: "Interm 3D Computer Graphics",
    requirement: "Elective",
    credits: 2.0,
    topics: ["HCI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Intermediate 3D graphics"],
    description: "FIXME: Add full description"
  },
  {
    id: "csanm342",
    number: 342,
    title: "Real-time Techniques",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Real-time graphics"],
    description: "FIXME: Add full description"
  },
  {
    id: "csanm354",
    number: 354,
    title: "Materials and Surfacing",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Materials and surfacing"],
    description: "FIXME: Add full description"
  },
  {
    id: "csanm352",
    number: 352,
    title: "Animated Film Production 1",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Film production"],
    description: "FIXME: Add full description"
  },
  {
    id: "csanm450",
    number: 450,
    title: "Animated Film Production 2",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Advanced film production"],
    description: "FIXME: Add full description"
  },
  {
    id: "csanm452",
    number: 452,
    title: "Animated Film Production 3",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Expert film production"],
    description: "FIXME: Add full description"
  },
  {
    id: "csanm459",
    number: 459,
    title: "Video Game Production 1",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Game production"],
    description: "FIXME: Add full description"
  },
  {
    id: "csanm460",
    number: 460,
    title: "Video Game Production 2",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Advanced game production"],
    description: "FIXME: Add full description"
  },
  {
    id: "csanm210",
    number: 210,
    title: "Visual Narrative",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Visual storytelling"],
    description: "FIXME: Add full description"
  },
  {
    id: "csanm252",
    number: 252,
    title: "Intro 3D Animation",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["3D animation basics"],
    description: "FIXME: Add full description"
  },
  {
    id: "csanm258",
    number: 258,
    title: "Scripting for Animation",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Programming"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Animation scripting"],
    description: "FIXME: Add full description"
  },
  {
    id: "csanm340",
    number: 340,
    title: "Game Design",
    requirement: "Elective",
    credits: 2.0,
    topics: ["HCI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Game design principles"],
    description: "FIXME: Add full description"
  },
  {
    id: "csanm351r",
    number: 351,
    title: "Lighting for 3D Graphics",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["3D lighting techniques"],
    description: "FIXME: Add full description"
  },
  {
    id: "csanm353",
    number: 353,
    title: "Previsualization",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Previsualization techniques"],
    description: "FIXME: Add full description"
  },
  {
    id: "csanm355",
    number: 355,
    title: "Photography for Animation",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Photography skills"],
    description: "FIXME: Add full description"
  },
  {
    id: "csanm454",
    number: 454,
    title: "Advanced Shading",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Advanced shading techniques"],
    description: "FIXME: Add full description"
  },
  {
    id: "csanm458r",
    number: 458,
    title: "3D Visual Effects",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Visual effects"],
    description: "FIXME: Add full description"
  },
  // Non-CS courses mentioned - FIXME: Add complete data
  {
    id: "desan101",
    number: 101,
    title: "Intro to Drawing for Pre-Anim",
    requirement: "Elective",
    credits: 1.0,
    topics: ["HCI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Drawing fundamentals"],
    description: "FIXME: Add full description"
  },
  {
    id: "desan460",
    number: 460,
    title: "Business & Ethics in Animation",
    requirement: "Elective",
    credits: 2.0,
    topics: ["Ethics"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Animation business ethics"],
    description: "FIXME: Add full description"
  },
  {
    id: "desan364r",
    number: 364,
    title: "Digital Sculpting",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Digital sculpting"],
    description: "FIXME: Add full description"
  },
  // Non-CS courses mentioned in program requirements
  {
    id: "math112",
    number: 112,
    title: "Calculus 1",
    department: "MATH",
    requirement: "Core",
    credits: 4.0,
    topics: ["Theory"],
    semesters: ["Fall", "Winter", "Spring"],
    prerequisites: [],
    outcomes: ["Understand differential calculus", "Apply calculus to problem solving"],
    description: "First semester calculus covering limits, derivatives, and applications."
  },
  {
    id: "math113",
    number: 113,
    title: "Calculus 2",
    department: "MATH",
    requirement: "Core",
    credits: 4.0,
    topics: ["Theory"],
    semesters: ["Fall", "Winter", "Spring"],
    prerequisites: ["MATH 112"],
    outcomes: ["Understand integral calculus", "Apply integration techniques"],
    description: "Second semester calculus covering integration and series."
  },
  {
    id: "math213",
    number: 213,
    title: "Elementary Linear Algebra",
    department: "MATH",
    requirement: "Core",
    credits: 2.0,
    topics: ["Theory"],
    semesters: ["Fall", "Winter"],
    prerequisites: ["MATH 112"],
    outcomes: ["Matrix operations", "Vector spaces", "Linear transformations"],
    description: "Introduction to linear algebra concepts and applications."
  },
  {
    id: "math215",
    number: 215,
    title: "Computational Linear Algebra",
    department: "MATH",
    requirement: "Core",
    credits: 1.0,
    topics: ["Theory"],
    semesters: ["Fall", "Winter"],
    prerequisites: ["MATH 213"],
    outcomes: ["Computational linear algebra", "Numerical methods"],
    description: "Computational aspects of linear algebra."
  },
  {
    id: "math290",
    number: 290,
    title: "Fundamentals of Mathematics",
    department: "MATH",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Theory"],
    semesters: ["Fall", "Winter"],
    prerequisites: [],
    outcomes: ["Mathematical reasoning", "Proof techniques"],
    description: "Introduction to mathematical reasoning and proof writing."
  },
  {
    id: "math431",
    number: 431,
    title: "Probability Theory",
    department: "MATH",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Theory"],
    semesters: ["Fall", "Winter"],
    prerequisites: [],
    outcomes: ["Probability fundamentals", "Statistical reasoning"],
    description: "Introduction to probability theory and applications."
  },
  {
    id: "math485",
    number: 485,
    title: "Mathematical Cryptography",
    department: "MATH",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Theory"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Cryptographic mathematics", "Security protocols"],
    description: "Mathematical foundations of cryptography."
  },
  {
    id: "phscs121",
    number: 121,
    title: "Intro to Newtonian Mechanics",
    department: "PHSCS",
    requirement: "Core",
    credits: 3.0,
    topics: ["Theory"],
    semesters: ["Fall", "Winter", "Spring"],
    prerequisites: [],
    outcomes: ["Physics fundamentals", "Newtonian mechanics"],
    description: "Introduction to classical mechanics and physics principles."
  },
  {
    id: "wrtg316",
    number: 316,
    title: "Technical Communication",
    department: "WRTG",
    requirement: "Core",
    credits: 3.0,
    topics: ["Society"],
    semesters: ["Fall", "Winter", "Spring"],
    prerequisites: [],
    outcomes: ["Technical writing", "Communication skills"],
    description: "Writing and communication skills for technical fields."
  },
  {
    id: "stat121",
    number: 121,
    title: "Intro to Stat Data Analysis",
    department: "STAT",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Data & AI"],
    semesters: ["Fall", "Winter", "Spring"],
    prerequisites: [],
    outcomes: ["Statistical analysis", "Data interpretation"],
    description: "Introduction to statistical methods and data analysis."
  },
  {
    id: "stat201",
    number: 201,
    title: "Stat for Engineers & Scientist",
    department: "STAT",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Data & AI"],
    semesters: ["Fall", "Winter"],
    prerequisites: [],
    outcomes: ["Engineering statistics", "Scientific data analysis"],
    description: "Statistical methods for engineering and science applications."
  },
  {
    id: "stat220",
    number: 220,
    title: "Stat Modeling for Data Science",
    department: "STAT",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Data & AI"],
    semesters: ["Fall", "Winter"],
    prerequisites: [],
    outcomes: ["Statistical modeling", "Data science methods"],
    description: "Statistical modeling techniques for data science."
  },
  {
    id: "ecen220",
    number: 220,
    title: "Fund of Digital Systems",
    department: "EC EN",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Systems"],
    semesters: ["Fall", "Winter"],
    prerequisites: [],
    outcomes: ["Digital systems", "Hardware fundamentals"],
    description: "Fundamentals of digital systems and computer hardware."
  },
  {
    id: "ecen330",
    number: 330,
    title: "Intro Embedded Programming",
    department: "EC EN",
    requirement: "Elective",
    credits: 4.0,
    topics: ["Systems", "Programming"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Embedded programming", "Microcontroller systems"],
    description: "Introduction to embedded systems programming."
  },
  {
    id: "ecen425",
    number: 425,
    title: "Real-Time Operating Systems",
    department: "EC EN",
    requirement: "Elective",
    credits: 4.0,
    topics: ["Systems"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Real-time systems", "Operating system design"],
    description: "Real-time operating systems and embedded applications."
  },
  {
    id: "ecen427",
    number: 427,
    title: "Embedded Systems",
    department: "EC EN",
    requirement: "Elective",
    credits: 4.0,
    topics: ["Systems"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Embedded system design", "Hardware-software integration"],
    description: "Advanced embedded systems design and implementation."
  },
  {
    id: "is567",
    number: 567,
    title: "Cybersecurity & Pen Testing",
    department: "IS",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Systems"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Cybersecurity", "Penetration testing"],
    description: "Cybersecurity principles and penetration testing methods."
  },
  {
    id: "arthc111",
    number: 111,
    title: "Introduction to Art History",
    department: "ARTHC",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Society"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Art history", "Cultural understanding"],
    description: "Survey of art history and cultural movements."
  },
  {
    id: "arthc202",
    number: 202,
    title: "World Civilization Since 1500",
    department: "ARTHC",
    requirement: "Elective",
    credits: 3.0,
    topics: ["Society"],
    semesters: [],
    prerequisites: [],
    outcomes: ["World history", "Civilization studies"],
    description: "Study of world civilizations from 1500 to present."
  },
  {
    id: "tma294",
    number: 294,
    title: "History of Animation",
    department: "TMA",
    requirement: "Elective",
    credits: 3.0,
    topics: ["HCI", "Society"],
    semesters: [],
    prerequisites: [],
    outcomes: ["Animation history", "Media studies"],
    description: "Historical survey of animation as an art form and industry."
  }
];

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

// Export programs array for filter options
export const PROGRAMS: Program[] = programs;
