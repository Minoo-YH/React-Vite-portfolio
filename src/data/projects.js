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
//import lighthouseImg from "../assets/lighthouse.png";
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

export const myProjects = [
  {
    projectTitle: "CRUD",
    category: ["react", "node", "express", "vite"],
    imgPaths: [crudImg],
    subtitle: "React + Node CRUD app with GitHub Pages deployment",
    description:
      "A full-stack CRUD application built with React, Node.js, and Express. Users can add, edit, and manage products along with supplier information. The project demonstrates REST API integration, state management, and deployment using GitHub Pages.",
    githubLink: "https://github.com/Minoo-YH/Crud",
    demoLink: "https://minoo-yh.github.io/Crud/",
  },
  {
    projectTitle: "Metropolia web development course  ",
    category: ["react", "node", "express", "mongodb"],
    imgPaths: [webImg],
    subtitle: "Full-stack web development course",
    description: "School project",
    githubLink: "https://github.com/Minoo-YH/Metropolia-W-D-C-Tasks",
  },
  {
    projectTitle: "Employee management",
    category: ["react"],
    imgPaths: [empImg],
    subtitle: "Web app for managing data",
    description: "School project",
    githubLink: "https://github.com/Abdullah22-22/crud",
  },
  {
    projectTitle: "Python",
    category: ["python"],
    imgPaths: [pyImg],
    subtitle: "Python full course with different projects",
    description: "Metropolia university full task with python",
    githubLink: "https://github.com/Minoo-YH/PythonOhjeimisto2",
  },
  {
    projectTitle: "Full-stack website",
    category: ["react", "node", "express", "mongodb"],
    imgPaths: [travelImg],
    subtitle: "Group project — Travel website",
    description:
      "As a group, we built a full-stack travel agency project using React, Node.js, Express, and MongoDB. We integrated Stripe for payments and included an admin panel with a dashboard. The site handles images via an API, and we ensured security with unit tests and token authentication. Working as a team, we faced many challenges but gained valuable experience building this project from scratch.",
    githubLink: "https://github.com/oliviaskye/travel-site",
  },
  {
    projectTitle: "CoreOrient OY website",
    category: ["WordPress with plugins"],
    imgPaths: [wpImg],
    subtitle: "Update the website + add cyber security + SEO",
    description:
      "For my first internship, I joined Coreorient OY as a web developer. I renewed their old website in WordPress, fixed security/spam issues, improved SEO, and even built a PHP site from scratch. Final evaluation: 5/5.",
    githubLink: "https://github.com/Minoo-YH/Coreorient-website",
  },
  {
    projectTitle: "Bank management system",
    category: ["c++"],
    imgPaths: [bankImg],
    subtitle: "Bank management system",
    description: "School project with C++",
    githubLink: "https://github.com/Minoo-YH/BankManagmentSystem-C-",
  },
  {
    projectTitle: "React native frontend mobile developer with expo",
    category: ["react native expo", "typescript"],
    imgPaths: [rnImg],
    subtitle: "Vesko mobile app internship",
    description:
      "My second internship. I quickly learned React Native and delivered the notifications feature (similar to Instagram), plus design/color improvements. Final evaluation: 5/5.",
    githubLink: null,
    isPrivate: true,
  },
  {
    projectTitle: "Flight Game — Python Flight Booking Simulation",
    category: ["python", "mysql", "cli"],
    imgPaths: [flightImg],
    subtitle: "Group project (3 contributors) — Console app",
    description:
      "A Python-based flight booking simulation. Travel between destinations, track total KM, and unlock membership tiers (Silver/Gold/Diamond). Includes login/register (WIP), user profile, and DB-backed queries.",
    githubLink:
      "https://github.com/Minoo-YH/Metropoli-ohjelmointi1-python-project-.git",
  },
  {
    projectTitle: "Barbershop website",
    category: ["react", "tailwind"],
    imgPaths: [barbershop],
    subtitle: "Responsive landing site",
    description:
      "A modern barbershop website built with React and Tailwind CSS: clean sections, responsive layout, and component-based design.",
    githubLink: "https://github.com/IraQ-N/barber-shop",
  },
  {
    projectTitle: "React 19 Workshop — Future Front Development",
    category: ["react", "react 19", "workshop"],
    imgPaths: [react19Img],
    subtitle: "Hands-on workshop",
    description:
      "We attended a React 19 workshop at Future Front Development and applied the latest updates in a small demo project. It was a great chance to learn new patterns/APIs and refresh best practices, then integrate those learnings back into our codebase.",
    githubLink: "https://github.com/Minoo-YH/React-19-workshop",
    isWorkshop: true,
  },
  {
    projectTitle: "Metropolia AI Service Router",
    category: ["flask", "python", "ai-concept"],
    imgPaths: [aiRouterImg],
    subtitle: "AI-style assistant concept demo for Metropolia students",
    description:
      "A small Flask web app that simulates an AI assistant to help Metropolia students route their questions to the right service. The user writes a free-text question, and the app detects the intent, suggests the correct Metropolia service, shows useful links, and generates a polite example email in English. The core logic is a rule-based 'fake AI' function designed so it can later be replaced by a real LLM backend.",
    githubLink: "https://github.com/Minoo-YH/metropolia-ai-service-router",
    demoLink: "https://minoo-yh.github.io/metropolia-ai-service-router/",
  },
  {
    projectTitle: "LuxeScents Perfume Store",
    category: ["react", "tailwind", "frontend"],
    imgPaths: [luxurywebImg],
    subtitle: "Modern perfume landing page",
    description:
      "A modern, responsive perfume store landing page built with React and Tailwind CSS. Focused on clean layout, sections for featured products, and a smooth user experience. This project showcases my front-end skills in styling, components, and responsive design.",
    githubLink: "https://github.com/Minoo-YH/luxescents-perfume-site",
    demoLink: "https://minoo-yh.github.io/luxescents-perfume-site/",
  },

  {
    projectTitle: "Help Connect",
    category: ["react", "frontend", "figma", "ui/ux"],
    imgPaths: [helpCimage],
    subtitle: "Community help & support platform",
    description:
      "A university project developed at Metropolia University of Applied Sciences. I came up with the project idea, designed the Figma prototype, and built the frontend with React and Tailwind CSS.",
    githubLink: "https://github.com/MiksuNy/web-project",
    demoLink: "https://web-project-k172.onrender.com/",
    figmaLink:
      "https://www.figma.com/make/qMKm053W5kn1JNJOwQ51h0/Help-App?t=hXBCaRWimu2RI1rC-1",
  },
  {
    projectTitle: "Metropolia Java courses",
    category: ["java", "javafix", "intellij"],
    imgPaths: [javaImg],
    subtitle: "University task — Full stack contribution",
    description:
      "A university full Java course which focuse deply on java basics, javafx, and intellij. I completed all the tasks and using lastest tools and techniques.",
    githubLink: "https://github.com/Minoo-YH/java-course",
  },
  {
    projectTitle: "JUnit Testing & Maven Setup",
    category: ["java", "junit5", "maven", "testing"],
    imgPaths: [junitImg],

    subtitle: "Java unit testing project with Maven and JUnit 5",

    description:
      "A university Java project focused on software testing, JUnit 5, Maven project structure, and clean development workflow. The project includes a fully tested Pen class and a StringManipulator utility class with comprehensive unit tests. Implemented using Maven, IntelliJ IDEA, Git, GitHub branching, and professional documentation practices.",

    githubLink:
      "https://github.com/Minoo-YH/java-course/tree/junit-testing-assignment",
  },
  {
    projectTitle: "Metropolia Java project",
    category: ["java", "javafix", "intellij"],
    imgPaths: [javaprojectImg],
    subtitle: "University full stack java project",
    description:
      "A university full Java project to make simulation EV charge station",
    githubLink: "https://github.com/Marakusa/java-oop-project",
  },
  {
    projectTitle: "JPA Currency Converter",
    category: ["java", "javafx", "hibernate", "jpa", "mariadb"],
    imgPaths: [jcurrencyImg],
    subtitle: "Desktop currency manager with JavaFX and Hibernate ORM",

    description:
      "A desktop currency converter and management application built with JavaFX, Hibernate ORM (JPA), and MariaDB. The application allows users to retrieve currencies from a relational database and dynamically add new currencies through a JavaFX graphical interface. The project follows DAO architecture and demonstrates object-relational mapping, persistence handling, database transactions, and multi-window JavaFX development.",

    githubLink:
      "https://github.com/Minoo-YH/java-course/tree/feature/jpa-currency-converter",
  },
  {
    projectTitle: "My own app",
    category: ["ReactNative", "TypeScript", "expo"],
    imgPaths: [appImg],
    subtitle:
      "I always has a dream to make my own app, so I started learning React Native and TypeScript to make it happen. I am currently working on a project that will be released soon. Stay tuned for updates!",
    description:
      "A usufull app for helttech industry, I am currently working on it and it will be released soon. Stay tuned for updates!",
    githubLink: "https://github.com/ProjectHelpConnect",
  },

  {
    projectTitle: "Latst Flight — Python Flight Game Simulation",
    category: ["python", "mysql", "ui/ux", "figma"],
    imgPaths: [lastflight], 
    subtitle: "University project — Full UI/UX + Frontend contribution",

    description:
      "A university group project focused on building a flight game  simulation using Python and MySQL. I was responsible for designing the full UI/UX in Figma and implementing the frontend. The system allows users to play game  between difrent  destinations, track distance (KM), and unlock membership levels such as Silver, Gold, and Diamond. The project also includes testing and validation, story line , and database-driven logic.",

    githubLink: "https://github.com/Basharski/Ohjelmisto-2_Projekti",

    figmaLink:
      "https://www.figma.com/make/7SxDNBC0Jch0x6F1WOdugf/last-flight-prototype?t=JdOdb190KCtCgLW0-20&fullscreen=1",
  },

  {
    projectTitle: "🐾 Virtual Pet (JavaFX)",
    category: ["java", "javafx", "mvc", "animation"],
    imgPaths: [petImg], // or add a separate image like virtualPetImg
    subtitle: "Interactive JavaFX virtual pet simulation",
    description:
      "A simple interactive JavaFX application where a virtual pet follows the user's mouse cursor on a canvas. The pet moves smoothly with dynamic speed, stops when reaching the cursor, and includes bounce animations for a more natural feel. Built using MVC architecture with JavaFX Canvas, AnimationTimer, and mouse event handling.",
    githubLink:
      "https://github.com/Minoo-YH/java-course/tree/feature/virtual-pet",
  },
  {
    projectTitle: "Simple Dictionary (JavaFX)",
    category: ["java", "javafx", "mvc", "maven"],
    imgPaths: [javaImg],
    subtitle: "Desktop dictionary application with JavaFX",
    description:
      "A simple desktop dictionary application built with JavaFX and Maven. Users can search for words and meanings, as well as add new entries to the dictionary. The project was created to practice JavaFX UI development, MVC architecture, and Maven project structure.",
    githubLink:
      "https://github.com/Minoo-YH/java-course/tree/dictionary-project",
  },
  {
    projectTitle: "Currency Converter (JavaFX + MariaDB)",
    category: ["java", "javafx", "jdbc", "mariadb", "mvc"],
    imgPaths: [currencyImg],
    subtitle: "Desktop currency converter with database integration",
    description:
      "A simple desktop currency converter built with JavaFX that retrieves exchange rates from a MariaDB database using JDBC. The application supports converting between multiple currencies, uses a clean MVC + DAO architecture, and includes database connection error handling.",
    githubLink:
      "https://github.com/Minoo-YH/java-course/tree/feature/jdbc-integration",
  },
  {
    projectTitle: "Currency Converter JPA",
    category: ["java", "javafx", "hibernate", "jpa", "mariadb"],
    imgPaths: [currencyImg],
    subtitle: "Desktop currency converter with Hibernate ORM",
    description:
      "A desktop currency converter application built with JavaFX, Hibernate ORM, JPA, and MariaDB. The project demonstrates object-relational mapping, entity relationships, DAO architecture, automatic schema generation, and transaction persistence using Hibernate. Currency exchange transactions are stored in a relational database with foreign key associations.",
    githubLink:
      "https://github.com/Minoo-YH/java-course/tree/feature/jpa-transactions",
  },
  {
  projectTitle: "Lambda Exercises in Java",
  category: ["java", "lambda", "functional-programming", "maven"],
  imgPaths: [lambdaImg],

  subtitle: "Java lambda expressions and collection operations",

  description:
    "A practical Java project focused on learning Lambda Expressions, functional interfaces, and collection manipulation without using the Stream API. The project includes sorting and filtering custom objects with Comparator, collection updates using replaceAll(), filtering with removeIf(), and functional-style operations using Java lambdas. Built with Java 17 and Maven as part of university functional programming exercises.",

  githubLink:
    "https://github.com/Minoo-YH/java-course/tree/feature/lambda-assignment",
},
];
