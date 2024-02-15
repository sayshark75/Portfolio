import { ProjectDataProps, ProjectStatus } from "../TYPES";

import truptiImg from "../assets/projects/trupti.webp";
import autotronImg from "../assets/projects/autotron.webp";
import aPrimeImg from "../assets/projects/aprime.webp";
import gRamboImg from "../assets/projects/gadgetRambo.webp";
import koovsImg from "../assets/projects/koovs.webp";
import glamazonImg from "../assets/projects/glamazon.webp";
import indExpImg from "../assets/projects/iexpress.webp";
import equationsImg from "../assets/projects/equations.webp";
import yogiImg from "../assets/projects/yogi.webp";

import {
  APrimeGithub,
  APrimeLive,
  AutotronWebsite,
  EquationsLLCWebsite,
  GadgetRamboGithub,
  GadgetRamboLive,
  KoovsGithub,
  KoovsLive,
  TruptiWebsite,
  glamazonGithub,
  glamazonLive,
  indianExpressGithub,
  indianExpressLive,
  yogiInternationalWebsite,
} from "./Links";

export const ProjectsData: ProjectDataProps[] = [
  {
    live: yogiInternationalWebsite,
    github: "",
    image: yogiImg,
    heading1: "Yogi's",
    heading2: "international",
    status: ProjectStatus.Building,
    workType: "Team of 2 Members",
    summary: "Sell Ayurvedic and Pranic food, cosmetic products.",
    TStack: ["Shopify", "Liquid", "CSS"],
  },
  {
    live: EquationsLLCWebsite,
    github: "",
    image: equationsImg,
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
    image: truptiImg,
    heading1: "Trupti",
    status: ProjectStatus.Completed,
    heading2: "Treats",
    workType: "Team of 4 Members",
    summary: "Sells Sweet and Snacks across all Cities in India.",
    TStack: ["React", "ViteJS", "Express", "Scss"],
  },
  {
    live: AutotronWebsite,
    github: "",
    image: autotronImg,
    heading1: "Autotron",
    heading2: "Electronics",
    status: ProjectStatus.Completed,
    workType: "Team of 4 Members",
    summary: "Sells and repairs electronic projects and Labkits.",
    TStack: ["React", "NextJS", "MongoDB", "Tailwind"],
  },
  {
    live: KoovsLive,
    github: KoovsGithub,
    image: koovsImg,
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
    image: aPrimeImg,
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
    image: gRamboImg,
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
    image: glamazonImg,
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
    image: indExpImg,
    heading1: "IndianExpress",
    status: ProjectStatus.Completed,
    heading2: "(Clone)",
    workType: "Individual",
    summary: "An online and offline news platform with a mix of news and information.",
    TStack: ["JavaScript", "HTML", "CSS"],
  },
];
