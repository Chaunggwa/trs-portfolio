import {DiHtml5, DiCss3, DiJsBadge, DiReact, DiBootstrap, DiDigitalOcean,DiFirebase, DiGit, DiGithubBadge, DiJqueryLogo, DiLinux, DiMongodb, DiMysql, DiNginx, DiNodejs, DiSass, DiUbuntu } from "react-icons/di"
import {SiTypescript, SiRedux, SiZod, SiExpress,SiReactquery, SiTailwindcss, SiPrisma} from "react-icons/si";
import {TbBrandNextjs, TbSql} from "react-icons/tb"
import ecommerceImg from "@/public/e-commerce.png";
import dashboard from "@/public/dashboard.png";
import imageSearch from "@/public/imagegen.png";
import rickandmorty from "@/public/rickandmorty.png";
import qrcodegen from "@/public/qrcodegen.png"
import { IconType } from "react-icons";
import React, { ReactNode } from "react";
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
  {
    name: "HTML",
    icon: <DiHtml5 className="w-10 h-10"/>
  },
  {
    name: "CSS",
    icon: <DiCss3 className="w-10 h-10"/>
  },
  {
    name: "JavaScript",
    icon: <DiJsBadge className="w-10 h-10"/>
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-10 h-10"/>
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="w-10 h-10"/>
  },
  {
    name: "Bootstrap",
    icon: <DiBootstrap className="w-10 h-10"/>
  },
  {
    name: "Sass",
    icon: <DiSass className="w-10 h-10"/>
  },
  {
    name: "jQuery",
    icon: <DiJqueryLogo className="w-10 h-10"/>
  },
  {
    name: "React",
    icon: <DiReact className="w-10 h-10"/>
  },
  {
    name: "Next.js",
    icon: <TbBrandNextjs className="w-10 h-10"/>
  },
  {
    name: "Redux",
    icon: <SiRedux className="w-10 h-10"/>
  },
  {
    name: "Zod",
    icon: <SiZod className="w-10 h-10"/>
  },
  {
    name: "ReactQuery",
    icon: <SiReactquery className="w-10 h-10"/>
  },
  {
    name: "Nodejs",
    icon: <DiNodejs className="w-10 h-10"/>
  },
  {
    name: "NGinX",
    icon: <DiNginx className="w-10 h-10"/>
  },
  {
    name: "ExpressJS",
    icon: <SiExpress className="w-10 h-10"/>
  },
  {
    name: "MongoDB",
    icon: <DiMongodb className="w-10 h-10"/>
  },
  {
    name: "Firebase",
    icon: <DiFirebase className="w-10 h-10"/>
  },
  {
    name: "MySql",
    icon: <DiMysql className="w-10 h-10"/>
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="w-10 h-10" />
  },
  {
    name: "SQL",
    icon: <TbSql className="w-10 h-10"/>
  },
  {
    name: "Linux",
    icon: <DiLinux className="w-10 h-10"/>
  },
  {
    name: "Ubuntu",
    icon: <DiUbuntu className="w-10 h-10"/>
  },
  {
    name: "Git",
    icon: <DiGit className="w-10 h-10"/>
  },
  {
    name: "Github",
    icon: <DiGithubBadge className="w-10 h-10"/>
  },
  {
    name: "Digital Ocean",
    icon: <DiDigitalOcean className="w-10 h-10"/>
  },
] 