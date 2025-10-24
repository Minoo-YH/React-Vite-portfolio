import crudImg from "../assets/crud.png";
import empImg from "../assets/2.png";
import pyImg from "../assets/python.png";
import travelImg from "../assets/travel.png";
import wpImg from "../assets/1.png";
import bankImg from "../assets/bnk.png";
import rnImg from "../assets/vesko.png";
import flightImg from "../assets/flightgame.jpeg";
import barbershop from "../assets/barbershop.jpeg";
import react19Img from "../assets/react19.png"; 

export const myProjects = [
  {
    projectTitle: "CRUD",
    category: ["react", "node"],
    imgPaths: [crudImg],
    subtitle: "Web app for managing data",
    description: "School project",
    githubLink: "https://github.com/Abdullah22-22/crud",
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
    subtitle: "Some python exercises",
    description: "School project with python",
    githubLink: "https://github.com/Minoo-YH/Metropolia-python3",
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
    githubLink: null,
    isWorkshop: true,
  },
];


