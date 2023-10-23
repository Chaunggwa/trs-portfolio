import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceImg from "@/public/e-commerce.png";
import dashboard from "@/public/dashboard.png";
import imageSearch from "@/public/imagegen.png";
import rickandmorty from "@/public/rickandmorty.png";
import qrcodegen from "@/public/qrcodegen.png"
export const links = [
  {
    name: "Home",
    hash: "/",
  },
 
  {
    name: "Projects",
    hash: "/projects",
  },
  {
    name: "Skills",
    hash: "/skills",
  },
  {
    name: "Contact",
    hash: "/contact",
  },
] as const;



export const projectsData = [
  {
    title: "E-commerce",
    description:
      "A simple e-commerce web app. Users can create stores and add items to it.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: ecommerceImg,
    webLink: "https://candc-omart.vercel.app/",
    gitHubLink: "https://github.com/Chaunggwa/store-frontend"
  },
  {
    title: "Simple Dashboard",
    description:
      "A simple dashboard web app.",
    tags: ["React", "Redux", "Recharts"],
    imageUrl: dashboard,
    webLink: "https://trsadmindashboard.netlify.app/",
    gitHubLink: "https://github.com/Chaunggwa/admin_dashboard"
  },
  {
    title: "Image Search App",
    description:
      "A simple image searching app.It uses api from pixabay.",
    tags: ["React","Redux", "ReactQuery"],
    imageUrl: imageSearch,
    webLink: "https://trsimagesearch.netlify.app/",
    gitHubLink: "https://github.com/Chaunggwa/imagesearch"
  },
  {
    title: "Rick and Morty App",
    description:
      "A simple web app which shows characters from rick and morty, an American adult animated science fiction sitcom.",
    tags: ["React","Redux", "ReactQuery"],
    imageUrl: rickandmorty,
    webLink: "https://trsrickandmorty.netlify.app/",
    gitHubLink: "https://github.com/Chaunggwa/rickandmorty"
  },
  {
    title: "QR Code Generator",
    description:
      "A simple GR Code Generator.",
    tags: ["VanillaJS"],
    imageUrl: qrcodegen,
    webLink: "https://trsqrcodegen.vercel.app/",
    gitHubLink: "https://github.com/Chaunggwa/qrcodegenerator"
  },
  
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Zustand",
  "Express",
  "PostgreSQL",
  "Firebase",
  "Shadcn UI",
  "Framer Motion",
] as const;