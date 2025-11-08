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

export interface Course {
  id: string;
  number: number;
  title: string;
  requirement: Requirement;
  credits: number;
  topics: Topic[];
  semesters: Semester[];
  prerequisites: string[];
  outcomes: string[];
  description: string;
}

export interface Program {
  id: string;
  name: string;
  minCredits: number;
  maxCredits: number;
  description: string;
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

export const courses: Course[] = [
  {
    id: "cs142",
    number: 142,
    title: "Introduction to Computer Programming",
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
  }  
];

export const programs: Program[] = [
  {
    id: "cs-bs",
    name: "Computer Science Bachelor of Science",
    minCredits: 120,
    maxCredits: 128,
    description: "A comprehensive program covering fundamental computer science concepts, programming, algorithms, and system design. Prepares students for careers in software development, research, and technology innovation."
  },
  {
    id: "cs-ba",
    name: "Computer Science Bachelor of Arts",
    minCredits: 115,
    maxCredits: 122,
    description: "A flexible program combining computer science with liberal arts education. Ideal for students interested in interdisciplinary applications of computing in fields like digital humanities, business, or creative technologies."
  },
  {
    id: "cs-minor",
    name: "Computer Science Minor",
    minCredits: 18,
    maxCredits: 21,
    description: "A focused program providing essential programming and computer science skills to complement any major. Perfect for students wanting to add technical expertise to their primary field of study."
  }
];
