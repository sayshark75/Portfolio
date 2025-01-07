import truptiImg from "@/assets/projects/trupti.webp";
import autotronImg from "@/assets/projects/autotron.webp";
import aPrimeImg from "@/assets/projects/aprime.webp";
import gRamboImg from "@/assets/projects/gadgetRambo.webp";
import koovsImg from "@/assets/projects/koovs.webp";
import glamazonImg from "@/assets/projects/glamazon.webp";
import indExpImg from "@/assets/projects/iexpress.webp";
import equationsImg from "@/assets/projects/equations.webp";
import terractiveImg from "@/assets/projects/terractive.webp";
import diogoImg from "@/assets/projects/diogolouis.webp";
import codeBankImg from "@/assets/projects/code-bank.webp";
import modulaImg from "@/assets/projects/modula.webp";
import equitreeImg from "@/assets/projects/equitree.webp";
import { Links } from "./CONSTANTS";
import { ProjectDataProps, ProjectStatus } from "./TYPES";

const {
  APrimeGithub,
  APrimeLive,
  EquationsLLCWebsite,
  EquitreeWebsite,
  GadgetRamboGithub,
  GadgetRamboLive,
  KoovsGithub,
  KoovsLive,
  ModulaWebsite,
  TruptiWebsite,
  codeBankGithub,
  codeBankWebsite,
  diogoLouisWebsite,
  glamazonGithub,
  glamazonLive,
  indianExpressGithub,
  indianExpressLive,
  terractiveWebsite,
} = Links;

export const PersonalProjectsData: ProjectDataProps[] = [
  {
    live: codeBankWebsite,
    github: codeBankGithub,
    image: codeBankImg.src,
    heading1: "Code",
    heading2: "Bank",
    status: ProjectStatus.Development,
    workType: "Team of 2 Members",
    summary: "Use frequently required code snippets and tools",
    TStack: ["React", "NextJS", "TypeScript", "MongoDB", "Chakra UI", "NextAuth"],
  },
  {
    live: KoovsLive,
    github: KoovsGithub,
    image: koovsImg.src,
    heading1: "KOOVS",
    status: ProjectStatus.Completed,
    heading2: "(Clone)",
    workType: "Team of 4 Members",
    summary: "An Ecommerce website for fashion-related products.",
    TStack: ["React", "Node", "ChakraUI", "Express", "MongoDB"],
  },
  {
    live: APrimeLive,
    github: APrimeGithub,
    image: aPrimeImg.src,
    heading1: "A-Prime",
    status: ProjectStatus.Completed,
    heading2: "(Youtube App)",
    workType: "Individual",
    summary: "A simple video platform to watch YouTube videos Online.",
    TStack: ["React", "TypeScript", "Redux", "YouTube API", "ChakraUI"],
  },
  {
    live: GadgetRamboLive,
    github: GadgetRamboGithub,
    image: gRamboImg.src,
    heading1: "Gadget360",
    heading2: "(Clone)",
    status: ProjectStatus.Completed,
    workType: "Team of 5 members",
    summary: "A tech gadgets website with specifications of electronic gadgets.",
    TStack: ["React", "NextJS", "Firebase", "Redux", "ChakraUI"],
  },
  {
    live: glamazonLive,
    github: glamazonGithub,
    image: glamazonImg.src,
    heading1: `BeautyBebo`,
    status: ProjectStatus.Completed,
    heading2: "(Clone)",
    workType: "Individual",
    summary: "An Ecommerce website for cosmetics and beauty products.",
    TStack: ["React", "ChakraUI"],
  },
  {
    live: indianExpressLive,
    github: indianExpressGithub,
    image: indExpImg.src,
    heading1: "IndianExpress",
    status: ProjectStatus.Completed,
    heading2: "(Clone)",
    workType: "Individual",
    summary: "An online and offline news platform with a mix of news and information.",
    TStack: ["JavaScript", "HTML", "CSS"],
  },
];

export const LiveProjectsData: ProjectDataProps[] = [
  {
    live: EquitreeWebsite,
    github: "",
    image: equitreeImg.src,
    heading1: "Equitree",
    heading2: "Capital",
    status: ProjectStatus.Completed,
    workType: "Team of 2 Members",
    summary: "Fundamental investors applying a private equity approach to public markets.",
    TStack: ["React", "NextJS", "Framer Motion", "Chakra UI", "Google API", "SendGrid"],
  },
  {
    live: ModulaWebsite,
    github: "",
    image: modulaImg.src,
    heading1: "Modula",
    heading2: "Kitchen",
    status: ProjectStatus.Completed,
    workType: "Team of 2 Members",
    summary: "Build Kitchen and Robust Interior Designing Professionally.",
    TStack: ["React", "NextJs", "Framer Motion", "GoogleAPI", "SendGrid", "ChakraUI"],
  },
  {
    live: diogoLouisWebsite,
    github: "",
    image: diogoImg.src,
    heading1: "Diogo Louis",
    heading2: "Fashion",
    status: ProjectStatus.Completed,
    workType: "Team of 3 Members",
    summary: "Sell Wrist Watches, and Fashion related products.",
    TStack: ["Shopify", "Liquid", "CSS"],
  },
  {
    live: terractiveWebsite,
    github: "",
    image: terractiveImg.src,
    heading1: "Terractive",
    heading2: "Merch",
    status: ProjectStatus.Development,
    workType: "Team of 2 Members",
    summary: "Sells Clothing and Accessories across all Cities in India.",
    TStack: ["Shopify", "Liquid", "CSS"],
  },
  {
    live: EquationsLLCWebsite,
    github: "",
    image: equationsImg.src,
    heading1: "Equations",
    heading2: "(Virtual CFO)",
    status: ProjectStatus.Development,
    workType: "Team of 2 Members",
    summary: "Provides financial strategy and accounting solutions for startups.",
    TStack: ["React", "NextJs", "SSR", "Express", "ChakraUI"],
  },
  {
    live: TruptiWebsite,
    github: "",
    image: truptiImg.src,
    heading1: "Trupti",
    status: ProjectStatus.Completed,
    heading2: "Treats",
    workType: "Team of 4 Members",
    summary: "Sells Sweet and Snacks across all Cities in India.",
    TStack: ["React", "ViteJS", "Express", "Scss"],
  },
  // {
  //   live: AutotronWebsite,
  //   github: "",
  //   image: autotronImg.src,
  //   heading1: "Autotron",
  //   heading2: "Electronics",
  //   status: ProjectStatus.Completed,
  //   workType: "Team of 4 Members",
  //   summary: "Sells and repairs electronic projects and Labkits.",
  //   TStack: ["React", "NextJS", "MongoDB", "Tailwind"],
  // },
];
