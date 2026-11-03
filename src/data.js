export const personalInfo = {
  name: "Aaron Nader",
  title: "Software Engineer",
  location: "Utah",
  email: "aaronnader1996@gmail.com",
  birthday: "1996-04-23",
  websiteCreated: "2022-12-01",
  intro:
    "I'm a Software Engineer with 3+ years of experience building, testing, and deploying web applications with TypeScript, JavaScript, React, Angular, Node.js, and SQL. At Capital One I build internal applications on an Agile Scrum team using CI/CD, including a Jira-style app used by about 5,000 people across 8+ business units. I use AI as a development tool, including Claude, Gemini, and GitHub Copilot, for debugging, prototyping, and migrations. Outside my day job, I founded Immaculate Heart Tech, which designs web solutions and applications for clients, and I own and lead development of ParishFlow, a digital bulletin platform for parishes.",
  links: {
    resume: "/resume.pdf",
    linkedin: "https://www.linkedin.com/in/aaron-nader-1a6073238/",
    github: "https://github.com/AaronNader96",
    sourceCode: "https://github.com/AaronNader96/aaronnader-portfolio-v2",
  },
};

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "React Native", "Angular 18+", "Vue", "HTML5", "CSS3"],
  },
  { category: "Backend", items: ["Node.js"] },
  { category: "Databases", items: ["PostgreSQL", "MSSQL", "MySQL"] },
  {
    category: "DevOps & Cloud",
    items: [
      "CI/CD",
      "Jenkins",
      "GitLab CI/CD",
      "Docker",
      "Kubernetes",
      "AWS",
      "Microsoft Azure",
      "Git",
    ],
  },
  { category: "AI Tools", items: ["Claude", "Gemini", "GitHub Copilot"] },
  {
    category: "Methodologies",
    items: ["Agile", "Scrum", "Jira", "Story Points", "Sprint Planning", "SDLC"],
  },
  {
    category: "Also Familiar With",
    items: ["Spring Boot", "Django", "Flask", "Ember.js", "C", "C++"],
  },
];

export const techStack = skills
  .filter((g) => !["Methodologies", "Also Familiar With"].includes(g.category))
  .flatMap((g) => g.items);

export const projects = [
  {
    id: 1,
    title: "ParishFlow",
    description:
      "Digital bulletin platform where parishes share Mass times, announcements, events, and weekly updates. Built with React and React Native, using Claude as a tool for most backend development.",
    technologies: ["React", "React Native", "Claude"],
    github: null,
    demo: "https://parishflow.com/",
    image: "assets/parishflow.png",
  },
  {
    id: 2,
    title: "Immaculate Heart Tech",
    description:
      "Technology company I founded that designs web solutions and applications for clients.",
    technologies: ["React", "Chakra UI", "JavaScript"],
    github: null,
    demo: "https://immaculateheart.tech/",
    image: "assets/iht.png",
  },
  {
    id: 3,
    title: "Be A Light Photography",
    description: "Portfolio site for Be A Light Photography.",
    technologies: ["React JavaScript", "Chakra UI", "Vite"],
    github: null,
    demo: "https://bealightphotography.com/",
    image: "assets/bealight.png",
  },
  {
    id: 4,
    title: "React To Do List",
    description: "A simple React-based to-do list app.",
    technologies: ["React", "CSS", "JavaScript"],
    github: null,
    demo: "https://todolist.aaronnader.com/",
    image: "assets/ToDo.png",
  },
  {
    id: 5,
    title: "FitMate - Fitness App",
    description: "Fitness tracking and planning app.",
    technologies: ["React", "Chakra UI", "JavaScript"],
    github: null,
    demo: "https://fitness.aaronnader.com/",
    image: "assets/FitMate.png",
  },
  {
    id: 6,
    title: "DayZ GTA SA-MP",
    description: "DayZ mod for GTA SA-MP multiplayer.",
    technologies: ["PAWN", "C++", "MySQL"],
    github: "https://github.com/AaronNader96/Project-DayZ-SAMP",
    demo: null,
    image: "assets/dayzPhoto.jpg",
  },
  {
    id: 7,
    title: "Zombie Command Line Game",
    description: "Text-based zombie survival game.",
    technologies: ["Python"],
    github: "https://github.com/AaronNader96/Zombie-Command-Line-script",
    demo: null,
    image: "assets/zombie.png",
  },
  {
    id: 8,
    title: "Tic Tac Toe",
    description: "Classic Tic Tac Toe game in the browser.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: null,
    demo: "http://aaronnader.com/tictactoe/",
    image: "assets/ticTac.jpg",
  },
  {
    id: 9,
    title: "aaronnader.com (this website)",
    description: "Personal portfolio website.",
    technologies: ["React", "Vite", "Chakra UI"],
    github: null,
    demo: "http://www.aaronnader.com/",
    image: "assets/portfolio.png",
  },
  {
    id: 10,
    title: "Stay True Dog Training",
    description: "Dog training business website.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    github: null,
    demo: "http://staytruedog.aaronnader.com/",
    image: "assets/staytrue.png",
  },
  {
    id: 11,
    title: "Login System",
    description: "Node.js/Express/EJS login system.",
    technologies: ["JavaScript", "Node JS", "EJS"],
    github: "https://github.com/AaronNader96/Login-System-Node-JS-Express-EJS",
    demo: null,
    image: "assets/login.png",
  },
  {
    id: 12,
    title: "AI Cooking Game",
    description: "Basic AI cooking game in JavaScript.",
    technologies: ["JavaScript", "HTML"],
    github: "https://github.com/AaronNader96/AI-Basic-Cooking-Game-JS",
    demo: null,
    image: "assets/aiCooking.jpg",
  },
  {
    id: 13,
    title: "Miller Campus Cafeteria - Internship Project",
    description: "Cafeteria menu and ordering system.",
    technologies: ["JavaScript", "HTML", "PHP"],
    github: null,
    demo: "https://www.aaronnader.slccwebdev.com/internship/cafe/index.php",
    image: "assets/miller.png",
  },
];

export const timeline = [
  {
    id: 1,
    date: "Feb 2023 - Present",
    title: "Software Engineer",
    company: "Capital One",
    description:
      "Build, test, and deploy internal web applications on an Agile Scrum team.",
    highlights: [
      "Developed an internal Jira-style application for about 5,000 users across 8+ business units to cut costs.",
      "Develop applications using TypeScript with Angular, plus JavaScript, React, and Node.js.",
      "Led remediation of security vulnerabilities to meet security and risk requirements.",
      "Design, code, test, and deploy new features using CI/CD best practices.",
      "Identify and troubleshoot system and software issues and develop solutions.",
      "Use SQL to manage databases and maintain data integrity.",
      "Test and validate programs with QA to improve performance and meet quality standards.",
      "Work with an Agile Scrum team to plan and review sprints, using Jira and story point estimates.",
      "Apply AI as a tool for debugging, prototyping, and migrations, including Claude, Gemini, and GitHub Copilot.",
    ],
    skills: [
      "TypeScript",
      "Angular",
      "JavaScript",
      "React",
      "Node.js",
      "SQL",
      "CI/CD",
      "Jira",
      "Claude",
      "Gemini",
      "GitHub Copilot",
    ],
  },
  {
    id: 2,
    date: "Present",
    title: "Owner & Lead Developer",
    company: "ParishFlow",
    description:
      "Built a digital bulletin platform for parishes with React and React Native, using Claude as a tool for most backend development. Parishes share Mass times, announcements, events, and weekly updates.",
    skills: ["React", "React Native", "Claude"],
  },
  {
    id: 3,
    date: "Present",
    title: "Founder",
    company: "Immaculate Heart Tech",
    description:
      "Founded a technology company that designs web solutions and applications for clients.",
    skills: ["Web Development", "Leadership", "Client Relations"],
  },
];

export const education = [
  {
    id: 1,
    date: "2023",
    title: "Bachelor of Science in Computer Science",
    school: "University of Utah",
    kind: "degree",
  },
  {
    id: 2,
    date: "2023",
    title: "Web Development Certification",
    school: null,
    kind: "certification",
  },
  {
    id: 3,
    date: "2019",
    title: "Associate of Science in General Education",
    school: "Salt Lake Community College",
    kind: "degree",
  },
];
