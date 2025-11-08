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

export const courses: Course[] = [
  {
    id: "cs142",
    number: 142,
    title: "Introduction to Computer Programming", // FIXME: This should be replaced by CS 111
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
    title: "Adv Software Construction", // Updated to match real data
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
  }
];

export const programs: Program[] = [
  {
    id: "cs-bs",
    name: "Computer Science (BS)",
    minCredits: 74,
    maxCredits: 75,
    description: "Computer Science studies the theory and practice of computing in society. Because computing is embedded in nearly every aspect of society, a degree in computer science can lead you to practicing in a wide variety of fields.",
    courseIds: [
      // Core Requirements (Requirement 1)
      "cs111", "cs191", "cs224", "cs235", "cs236", "cs240", "cs252", "cs260", "cs291", 
      "cs312", "cs324", "cs340", "cs404",
      // Math/Science Requirements (Requirements 2-4) - External courses not tracked
      // Electives (Requirement 5) - Common selections
      "cs329", "cs330", "cs345", "cs355", "cs356", "cs393", "cs401r", "cs412", "cs416",
      "cs428", "cs430", "cs431", "cs450", "cs452", "cs453", "cs455", "cs456", "cs460",
      "cs462", "cs465", "cs466", "cs470", "cs471", "cs473", "cs474", "cs479", "cs486",
      "cs501r", "cs513", "cs556", "cs574", "cs575", "cs580",
      // Additional options
      "cs180", "cs202", "cs203", "cs204", "cs256", "cs270", "cs405", "cs478",
      "cs480", "cs481", "cs482", "cs483", "cs493r", "cs494", "cs495", "cs497r", "cs498r"
    ]
  },
  {
    id: "cs-animation-games-bs",
    name: "Computer Science: Animation and Games (BS)",
    minCredits: 77,
    maxCredits: 81.5,
    description: "The Computer Science Animation and Games Emphasis gives students the opportunity to learn both the technical and artistic side of creating and implementing digital animation and games, preparing them for technical careers with animation and game programming studios.",
    courseIds: [
      // Prerequisites (Requirement 1)
      "cs111", "cs191", "cs235", "cs291", "csanm150", "desan101",
      // Core after admission (Requirement 2)
      "cs224", "cs236", "cs240", "cs312", "cs324", "cs355", "cs455", "csanm250",
      // Supporting courses and requirements 3-5 are external
      // Animation specialization (Requirements 6-8)
      "csanm342", "csanm354", "cs404", "desan460",
      "csanm352", "csanm450", "csanm452", "csanm459", "csanm460",
      // CS Electives (Requirement 9)
      "cs252", "cs256", "cs260", "cs270", "cs329", "cs330", "cs340", "cs345", 
      "cs356", "cs393", "cs401r", "cs412", "cs416", "cs428", "cs430", "cs431",
      "cs450", "cs452", "cs453", "cs456", "cs460", "cs462", "cs465", "cs466",
      "cs470", "cs471", "cs473", "cs474", "cs478", "cs479", "cs486", "cs556",
      "cs574", "cs575",
      // Additional electives (Requirement 10)
      "cs498r", "cs500", "cs501r", "cs513", "cs580",
      "csanm210", "csanm252", "csanm258", "csanm340", "csanm351r", "csanm353",
      "csanm355", "csanm452", "csanm454", "csanm458r", "desan364r"
    ]
  },
  {
    id: "cs-bioinformatics-bs",
    name: "Computer Science: Bioinformatics (BS)",
    minCredits: 72,
    maxCredits: 78,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Focuses on computational biology and data analysis.",
    courseIds: [
      "cs111", "cs235", "cs240", "cs312", "cs324", "cs340", "cs404", "cs470", "cs472"
    ]
  },
  {
    id: "cs-software-engineering-bs",
    name: "Computer Science: Software Engineering (BS)",
    minCredits: 75,
    maxCredits: 80,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation. Emphasizes large-scale software development practices.",
    courseIds: [
      "cs111", "cs235", "cs240", "cs312", "cs324", "cs340", "cs404", "cs428", "cs329"
    ]
  },
  {
    id: "machine-learning-bs",
    name: "Machine Learning (BS)",
    minCredits: 76,
    maxCredits: 82,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate. Focuses on AI and machine learning technologies.",
    courseIds: [
      "cs111", "cs235", "cs240", "cs312", "cs470", "cs472", "cs474", "cs473", "cs450"
    ]
  },
  {
    id: "cs-minor",
    name: "Computer Science (Minor)",
    minCredits: 18,
    maxCredits: 21,
    description: "A focused program providing essential programming and computer science skills to complement any major. Perfect for students wanting to add technical expertise to their primary field of study.",
    courseIds: [
      "cs111", "cs235", "cs240", "cs260", "cs324", "cs340"
    ]
  },
  {
    id: "cs-teaching-minor",
    name: "Computer Science Teaching (Minor)",
    minCredits: 15,
    maxCredits: 18,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt. Prepares students to teach computer science concepts.",
    courseIds: [
      "cs111", "cs235", "cs240", "cs260", "cs340"
    ]
  }
];

// Export programs array for filter options
export const PROGRAMS: Program[] = programs;
