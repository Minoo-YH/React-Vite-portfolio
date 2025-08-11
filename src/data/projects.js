import crudImg from "../assets/CRUD.png";
import empImg from "../assets/2.png";
import pyImg from "../assets/python.png";
import travelImg from "../assets/travel.PNG";
import wpImg from "../assets/1.png";
import bankImg from "../assets/bnk.png";
import rnImg from "../assets/vesko.png";

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
    githubLink: "https://github.com/Minoo-YH/Python",
  },
  {
    projectTitle: "Full-stack website",
    category: ["react", "node", "express", "mongodb"],
    imgPaths: [travelImg],
    subtitle: "Travel website",
    description:
      "My classmates and I built a full-stack travel agency project using React, Node.js, Express, and MongoDB. We integrated Stripe for payments and included an admin panel with a dashboard. The site handles images via an API, and we ensured security with unit tests and token authentication. Working as a team, we faced many challenges but gained valuable experience building this project from scratch.",
    githubLink: "https://github.com/oliviaskye/travel-site",
  },
  {
    projectTitle: "CoreOrient OY website",
    category: ["WordPress with plugins"],
    imgPaths: [wpImg],
    subtitle: "Update the website + add cyber security + SEO",
    description:
      "For my first internship, I joined Coreorient OY as a web developer. I helped renew their old website using WordPress, which I learned in just a few days. I fixed their issues and also built a PHP website from scratch. Their site had not been updated for a long time and suffered from spam, security problems, and poor SEO. I resolved these issues and improved the SEO as well. I really enjoyed the experience and learned a lot. They gave me a 5/5 final evaluation.",
    githubLink: "https://github.com/Minoo-YH/Coreorient-website",
  },
  {
    projectTitle: "Bank management system",
    category: ["c++"],
    imgPaths: [bankImg],
    subtitle: "Bank management system",
    description: "School project with c++",
    githubLink: "https://github.com/Minoo-YH/Coreorient-website",
  },
  {
    projectTitle: "React native frontend mobile developer with expo",
    category: ["react native expo", "typescript"],
    imgPaths: [rnImg],
    subtitle: "Vesko mobile app internship",
    description: `My second internship was a great experience. At first, I wasn’t accepted anywhere, but I kept pushing forward. I asked Vesko for a chance and explained that I didn’t know React Native, which is quite different from React. They invited me for a practical interview and gave me a small task. Although I didn’t do the task perfectly, they accepted me because they really liked my frontend design skills. They appreciated the color combinations I added to their theme and asked me to join and help improve their work.

I learned React Native within two weeks and developed the notification feature for their mobile app, similar to Instagram. I also helped with design and color choices because I have strong knowledge in that area. They gave me a 5/5 rating for my performance.`,
    githubLink: "https://github.com/Minoo-YH/Coreorient-website",
  },
];
