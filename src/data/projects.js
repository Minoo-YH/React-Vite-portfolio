import crudImg from "../assets/add.png";
import empImg from "../assets/2.png";
import pyImg from "../assets/python.png";
import travelImg from "../assets/travel.png";
import wpImg from "../assets/1.png";
import bankImg from "../assets/bnk.png";
import rnImg from "../assets/vesko.png";
import flightImg from "../assets/flightgame.jpeg";
import barbershop from "../assets/barbershop.jpeg";
import react19Img from "../assets/react19.png";
import aiRouterImg from "../assets/AI.png";
import luxurywebImg from "../assets/luxuryweb.png";
import helpCimage from "../assets/helpC.png";
import lastflight from "../assets/lastflight.png";
import webImg from "../assets/web.png";
import javaImg from "../assets/java.png";
import javaprojectImg from "../assets/evcharg.png";
import appImg from "../assets/app.png";
import petImg from "../assets/petv.png";
import currencyImg from "../assets/4.png";
import junitImg from "../assets/junit.png";
import jcurrencyImg from "../assets/currency.png";
import lambdaImg from "../assets/t1.png";
import tddImg from "../assets/ttd2.png";
import helpDeskImg from "../assets/full.png";

export const myProjects = [
  /* ===========================================================
     FEATURED PROJECTS
  =========================================================== */

  {
    projectTitle: "APUA — Help & Support Mobile App",
    group: "featured",
    category: ["react native", "typescript", "expo", "mobile", "ui/ux"],
    imgPaths: [appImg],
    subtitle:
      "A mobile help platform built with React Native, TypeScript and Expo",
    description:
      "APUA is my own mobile application project focused on creating a modern and accessible help and support platform. I designed and developed the application using React Native, TypeScript and Expo, with a strong focus on clean UI/UX, reusable components and scalable mobile development. The project is actively under development.",
    githubLink: "https://github.com/ProjectHelpConnect",
  },

  {
    projectTitle: "HelpDesk Ticket System API",
    group: "featured",
    category: [
      "asp.net core",
      "c#",
      "ef core",
      "sql server",
      "jwt",
      "bcrypt",
      "docker",
      "swagger",
    ],
    imgPaths: [helpDeskImg],
    subtitle:
      "Secure HelpDesk REST API with authentication and role-based authorization",
    description:
      "A backend HelpDesk Ticket Management System built with ASP.NET Core 8 Web API. It includes secure user registration and login, BCrypt password hashing, JWT authentication, role-based authorization for users and admins, complete ticket management, ticket priorities and statuses, ticket comments, Entity Framework Core with SQL Server, Dockerized database support, health checks, and Swagger/OpenAPI documentation.",
    githubLink: "https://github.com/Minoo-YH/HelpDeskTicketSystem",
  },

  {
    projectTitle: "Full-Stack Travel Website",
    group: "featured",
    category: ["react", "node", "express", "mongodb", "stripe"],
    imgPaths: [travelImg],
    subtitle: "Group project — Travel website",
    description:
      "A full-stack travel agency platform developed as a group project using React, Node.js, Express, and MongoDB. The application includes Stripe payments, an admin dashboard, API-based image handling, authentication, security features, and unit testing.",
    githubLink: "https://github.com/oliviaskye/travel-site",
  },

  {
    projectTitle: "Help Connect",
    group: "featured",
    category: ["react", "tailwind", "frontend", "figma", "ui/ux"],
    imgPaths: [helpCimage],
    subtitle: "Community help & support platform",
    description:
      "A university project developed at Metropolia University of Applied Sciences. I created the original project idea, designed the UI/UX prototype in Figma, and developed the frontend using React and Tailwind CSS.",
    githubLink: "https://github.com/MiksuNy/web-project",
    demoLink: "https://web-project-k172.onrender.com/",
    figmaLink:
      "https://www.figma.com/make/qMKm053W5kn1JNJOwQ51h0/Help-App?t=hXBCaRWimu2RI1rC-1",
  },

  {
    projectTitle: "Teacher's Gradebook & Report Card System",
    group: "featured",
    category: [
      "team project",
      "ui/ux",
      "figma",
      "gradebook",
      "education",
      "in progress",
    ],
    imgPaths: [javaImg],
    subtitle: "Team project — Grade management and report card system",
    description:
      "An ongoing team project for building a Teacher's Gradebook and Report Card System. The system is designed to help teachers manage student grades and generate report cards. The project is currently under active development, with the UI/UX design available as a live Figma prototype.",
    githubLink:
      "https://github.com/Marakusa/Teacher-s-Gradebook-and-Report-Card-System",
    figmaLink:
      "https://www.figma.com/make/gPlhZATNbB8Zn8HscQfPc4/Gradebook-and-Report-Card-System?code-node-id=0-6&p=f&t=ihnBsnRfhWHZj0Mw-0&fullscreen=1",
  },

  /* ===========================================================
     PROFESSIONAL EXPERIENCE
  =========================================================== */

  {
    projectTitle: "CoreOrient OY Website",
    group: "experience",
    category: ["wordpress", "php", "seo", "cybersecurity"],
    imgPaths: [wpImg],
    subtitle: "Website renewal, security improvements and SEO",
    description:
      "During my first internship at CoreOrient OY, I worked as a web developer and renewed their existing WordPress website. I improved website security, resolved spam-related issues, enhanced SEO, and also developed a PHP website from scratch. Final internship evaluation: 5/5.",
    githubLink: "https://github.com/Minoo-YH/Coreorient-website",
  },

  {
    projectTitle: "Vesko Mobile App Internship",
    group: "experience",
    category: ["react native", "expo", "typescript"],
    imgPaths: [rnImg],
    subtitle: "React Native frontend mobile development",
    description:
      "During my second internship, I worked as a React Native frontend developer. I implemented a notification feature inspired by modern social applications and contributed to UI design and color improvements. Final internship evaluation: 5/5.",
    githubLink: null,
    isPrivate: true,
  },

  /* ===========================================================
     WEB DEVELOPMENT
  =========================================================== */

  {
    projectTitle: "CRUD",
    group: "web",
    category: ["react", "node", "express", "vite"],
    imgPaths: [crudImg],
    subtitle: "React + Node CRUD app with GitHub Pages deployment",
    description:
      "A full-stack CRUD application built with React, Node.js, and Express. Users can add, edit, and manage products along with supplier information. The project demonstrates REST API integration, state management, and deployment using GitHub Pages.",
    githubLink: "https://github.com/Minoo-YH/Crud",
    demoLink: "https://minoo-yh.github.io/Crud/",
  },

  {
    projectTitle: "Metropolia Web Development Course",
    group: "web",
    category: ["react", "node", "express", "mongodb"],
    imgPaths: [webImg],
    subtitle: "Full-stack web development course",
    description:
      "University coursework covering modern full-stack web development concepts and technologies through practical assignments.",
    githubLink: "https://github.com/Minoo-YH/Metropolia-W-D-C-Tasks",
  },

  {
    projectTitle: "Metropolia JavaScript Course — Practical Tasks",
    group: "web",
    category: [
      "javascript",
      "html",
      "web development",
      "frontend",
      "university",
    ],
    imgPaths: [webImg],
    subtitle:
      "Practical JavaScript programming tasks from Metropolia University",
    description:
      "A collection of practical JavaScript course exercises completed at Metropolia University of Applied Sciences. The repository demonstrates hands-on practice with JavaScript and HTML through course assignments focused on building a strong foundation in frontend web development.",
    githubLink: "https://github.com/Minoo-YH/Metropolia-javaScript1",
  },

  {
    projectTitle: "Employee Management",
    group: "web",
    category: ["react"],
    imgPaths: [empImg],
    subtitle: "Web application for managing employee data",
    description:
      "A university project focused on building a React application for managing and displaying employee data.",
    githubLink: "https://github.com/Abdullah22-22/crud",
  },

  {
    projectTitle: "Bank Management System",
    group: "web",
    category: ["c++"],
    imgPaths: [bankImg],
    subtitle: "Bank management system",
    description:
      "A university C++ project focused on implementing the core functionality of a bank management system.",
    githubLink: "https://github.com/Minoo-YH/BankManagmentSystem-C-",
  },

  {
    projectTitle: "Barbershop Website",
    group: "web",
    category: ["react", "tailwind"],
    imgPaths: [barbershop],
    subtitle: "Responsive landing website",
    description:
      "A modern barbershop website built with React and Tailwind CSS, featuring a clean responsive layout and reusable component-based architecture.",
    githubLink: "https://github.com/IraQ-N/barber-shop",
  },

  {
    projectTitle: "React 19 Workshop — Future Front Development",
    group: "web",
    category: ["react", "react 19", "workshop"],
    imgPaths: [react19Img],
    subtitle: "Hands-on React 19 workshop",
    description:
      "A hands-on React 19 workshop focused on exploring newer React features, patterns, APIs, and modern frontend development practices through a practical demo project.",
    githubLink: "https://github.com/Minoo-YH/React-19-workshop",
    isWorkshop: true,
  },

  {
    projectTitle: "LuxeScents Perfume Store",
    group: "web",
    category: ["react", "tailwind", "frontend"],
    imgPaths: [luxurywebImg],
    subtitle: "Modern responsive perfume landing page",
    description:
      "A modern responsive perfume store landing page built with React and Tailwind CSS. The project focuses on clean UI design, reusable components, responsive layouts, featured product sections, and smooth user experience.",
    githubLink: "https://github.com/Minoo-YH/luxescents-perfume-site",
    demoLink: "https://minoo-yh.github.io/luxescents-perfume-site/",
  },

  /* ===========================================================
     AI / PYTHON
  =========================================================== */

  {
    projectTitle: "Gemini LLM — Text Generation & Dynamic Prompts",
    group: "python",
    category: [
      "gemini",
      "llm",
      "ai",
      "node.js",
      "express",
      "rest api",
      "postman",
    ],
    imgPaths: [aiRouterImg],
    subtitle:
      "Google Gemini LLM integration with static and dynamic prompt generation",
    description:
      "An AI and LLM project focused on integrating Google Gemini into a backend application. The project demonstrates text generation with static and dynamic prompts, structured responses, REST API endpoints, input validation, error handling, and testing with Postman.",
    githubLink: "https://github.com/Minoo-YH/Gemini",
  },

  {
    projectTitle: "Metropolia AI Service Router",
    group: "python",
    category: ["flask", "python", "ai-concept"],
    imgPaths: [aiRouterImg],
    subtitle: "AI-style assistant concept for Metropolia students",
    description:
      "A Flask web application that simulates an AI assistant for helping Metropolia students find the correct university service. The application analyzes free-text questions, identifies intent, recommends services and useful links, and generates example emails.",
    githubLink: "https://github.com/Minoo-YH/metropolia-ai-service-router",
    demoLink: "https://minoo-yh.github.io/metropolia-ai-service-router/",
  },

  {
    projectTitle: "Python Programming",
    group: "python",
    category: ["python"],
    imgPaths: [pyImg],
    subtitle: "Python course with multiple programming projects",
    description:
      "Metropolia University coursework covering Python programming concepts through practical exercises and projects.",
    githubLink: "https://github.com/Minoo-YH/PythonOhjeimisto2",
  },

  {
    projectTitle: "Flight Game — Python Flight Booking Simulation",
    group: "python",
    category: ["python", "mysql", "cli"],
    imgPaths: [flightImg],
    subtitle: "Group project — Console application",
    description:
      "A Python-based flight simulation where users can travel between destinations, track total distance, and unlock membership tiers including Silver, Gold, and Diamond. The application includes database-backed queries and user-related functionality.",
    githubLink:
      "https://github.com/Minoo-YH/Metropoli-ohjelmointi1-python-project-.git",
  },

  {
    projectTitle: "Last Flight — Python Flight Game Simulation",
    group: "python",
    category: ["python", "mysql", "ui/ux", "figma"],
    imgPaths: [lastflight],
    subtitle: "University project — UI/UX and frontend contribution",
    description:
      "A university group project focused on building a flight game simulation using Python and MySQL. I was responsible for designing the full UI/UX in Figma and implementing the frontend. Players travel between destinations, track distance, and unlock Silver, Gold, and Diamond membership levels.",
    githubLink: "https://github.com/Basharski/Ohjelmisto-2_Projekti",
    figmaLink:
      "https://www.figma.com/make/7SxDNBC0Jch0x6F1WOdugf/last-flight-prototype?t=JdOdb190KCtCgLW0-20&fullscreen=1",
  },

  /* ===========================================================
     JAVA
  =========================================================== */

  {
    projectTitle: "Metropolia Java Courses",
    group: "java",
    category: ["java", "javafx", "intellij"],
    imgPaths: [javaImg],
    subtitle: "University Java coursework",
    description:
      "A collection of Metropolia University Java coursework covering Java fundamentals, object-oriented programming, JavaFX, development tools, and practical programming exercises.",
    githubLink: "https://github.com/Minoo-YH/java-course",
  },

  {
    projectTitle: "ASCII UI — Abstract Factory",
    group: "java",
    category: [
      "java",
      "design patterns",
      "abstract factory",
      "oop",
      "ascii ui",
    ],
    imgPaths: [javaImg],
    subtitle: "Java implementation of the Abstract Factory design pattern",
    description:
      "A Java project created to practice the Abstract Factory design pattern. The application generates ASCII-based UI elements including buttons, text fields, and checkboxes using two different UI styles. It demonstrates factory-based object creation, shared UI abstractions, object-oriented programming, and switching between UI families without changing the client code.",
    githubLink: "https://github.com/Minoo-YH/ascii-ui-abstract-factory",
  },

  {
    projectTitle: "Organization Structure — Composite Pattern",
    group: "java",
    category: ["java", "design patterns", "composite pattern", "oop", "xml"],
    imgPaths: [javaImg],
    subtitle: "Java implementation of the Composite design pattern",
    description:
      "A Java project created to practice the Composite design pattern by modeling an organization with departments and employees. Departments can contain employees and nested departments, while employees act as leaf components. The application supports adding and removing components, calculating the organization's total salary, and printing the organization structure in XML format.",
    githubLink: "https://github.com/Minoo-YH/organization-composite",
  },

  {
    projectTitle: "JUnit Testing & Maven Setup",
    group: "java",
    category: ["java", "junit5", "maven", "testing"],
    imgPaths: [junitImg],
    subtitle: "Java unit testing project with Maven and JUnit 5",
    description:
      "A university Java project focused on software testing, JUnit 5, Maven project structure, and clean development workflow. The project demonstrates automated unit testing, Git branching, and professional documentation practices.",
    githubLink:
      "https://github.com/Minoo-YH/java-course/tree/junit-testing-assignment",
  },

  {
    projectTitle: "EV Charging Station Simulation",
    group: "java",
    category: ["java", "javafx", "oop"],
    imgPaths: [javaprojectImg],
    subtitle: "University Java simulation project",
    description:
      "A university Java group project focused on object-oriented programming and the simulation of an EV charging station system.",
    githubLink: "https://github.com/Marakusa/java-oop-project",
  },

  {
    projectTitle: "JPA Currency Converter",
    group: "java",
    category: ["java", "javafx", "hibernate", "jpa", "mariadb"],
    imgPaths: [jcurrencyImg],
    subtitle: "Desktop currency manager with JavaFX and Hibernate ORM",
    description:
      "A desktop currency converter and management application built with JavaFX, Hibernate ORM, JPA, and MariaDB. The project demonstrates DAO architecture, object-relational mapping, database transactions, persistence handling, and multi-window JavaFX development.",
    githubLink:
      "https://github.com/Minoo-YH/java-course/tree/feature/jpa-currency-converter",
  },

  {
    projectTitle: "🐾 Virtual Pet (JavaFX)",
    group: "java",
    category: ["java", "javafx", "mvc", "animation"],
    imgPaths: [petImg],
    subtitle: "Interactive JavaFX virtual pet simulation",
    description:
      "An interactive JavaFX application where a virtual pet follows the user's mouse cursor on a canvas. The project uses MVC architecture, JavaFX Canvas, AnimationTimer, mouse events, dynamic movement speed, and bounce animations.",
    githubLink:
      "https://github.com/Minoo-YH/java-course/tree/feature/virtual-pet",
  },

  {
    projectTitle: "Simple Dictionary (JavaFX)",
    group: "java",
    category: ["java", "javafx", "mvc", "maven"],
    imgPaths: [javaImg],
    subtitle: "Desktop dictionary application with JavaFX",
    description:
      "A desktop dictionary application built with JavaFX and Maven. Users can search for words and meanings and add new dictionary entries. The project demonstrates JavaFX UI development, MVC architecture, and Maven project structure.",
    githubLink:
      "https://github.com/Minoo-YH/java-course/tree/dictionary-project",
  },

  {
    projectTitle: "Currency Converter (JavaFX + MariaDB)",
    group: "java",
    category: ["java", "javafx", "jdbc", "mariadb", "mvc"],
    imgPaths: [currencyImg],
    subtitle: "Desktop currency converter with database integration",
    description:
      "A JavaFX currency converter that retrieves exchange rates from a MariaDB database using JDBC. The application supports multiple currencies and demonstrates MVC and DAO architecture, database connectivity, and error handling.",
    githubLink:
      "https://github.com/Minoo-YH/java-course/tree/feature/jdbc-integration",
  },

  {
    projectTitle: "Currency Converter JPA",
    group: "java",
    category: ["java", "javafx", "hibernate", "jpa", "mariadb"],
    imgPaths: [currencyImg],
    subtitle: "Desktop currency converter with Hibernate ORM",
    description:
      "A JavaFX currency converter built with Hibernate ORM, JPA, and MariaDB. The project demonstrates entity relationships, DAO architecture, object-relational mapping, schema generation, transaction persistence, and relational database integration.",
    githubLink:
      "https://github.com/Minoo-YH/java-course/tree/feature/jpa-transactions",
  },

  {
    projectTitle: "Lambda Exercises in Java",
    group: "java",
    category: ["java", "lambda", "functional-programming", "maven"],
    imgPaths: [lambdaImg],
    subtitle: "Java lambda expressions and collection operations",
    description:
      "A practical Java project focused on Lambda Expressions, functional interfaces, and collection manipulation. It includes sorting, filtering, Comparator usage, replaceAll(), removeIf(), and functional-style programming using Java lambdas.",
    githubLink:
      "https://github.com/Minoo-YH/java-course/tree/feature/lambda-assignment",
  },

  {
    projectTitle: "Test-Driven Development (TDD) in Java",
    group: "java",
    category: ["java", "junit5", "testing", "maven", "tdd"],
    imgPaths: [tddImg],
    subtitle: "JUnit 5 and Maven testing project",
    description:
      "A university Java project focused on Test-Driven Development using JUnit 5 and Maven. The project includes a Palindrome Checker and Shopping Cart system developed using a test-first workflow, automated testing, refactoring, assertions, and clean code practices.",
    githubLink:
      "https://github.com/Minoo-YH/java-course/tree/feature/tdd-assignment",
  },
];
