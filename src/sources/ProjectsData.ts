import { ProjectDataProps } from "../TYPES";

import truptiImg from "../assets/projects/trupti.png";
import autotronImg from "../assets/projects/autotron.png";
import aPrimeImg from "../assets/projects/aprime.png";
import gRamboImg from "../assets/projects/gadgetRambo.png";
import koovsImg from "../assets/projects/koovs.png";
import glamazonImg from "../assets/projects/glamazon.png";
import indExpImg from "../assets/projects/iexpress.png";
import equationsImg from "../assets/projects/equations.png";

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
} from "./Links";

// TStack [react,CHakraUI,JS,HTML,CSS,TS,Redux,FIrebase, Node,Express,Mongo]

export const ProjectsData: ProjectDataProps[] = [
  {
    live: EquationsLLCWebsite,
    github: "",
    image: equationsImg,
    heading1: "Equations",
    heading2: "(Virtual CFO)",
    workType: "Team of 3 Members",
    summary: "virtual chief financial officer, Provides financial strategy, accounting automation, payroll, financial reporting & bookkeeping for startups and small businesses.",
    TStack: ["React", "ViteJS", "Python", "Axios", "JWT", "ChakraUI"],
  },
  {
    live: TruptiWebsite,
    github: "",
    image: truptiImg,
    heading1: "Trupti",
    heading2: "Treats",
    workType: "Team of 4 Members",
    summary: "Sells and Repairs Electonic Projects as per client Requirements, Also sells Labkits",
    TStack: ["React", "NextJS 13.4", "MongoDB", "Next-Auth", "Server-Components", "Tailwind"],
  },
  {
    live: AutotronWebsite,
    github: "",
    image: autotronImg,
    heading1: "Autotron.Tech",
    heading2: "(Electronics)",
    workType: "Team of 4 Members",
    summary: "Sells and Repairs Electonic Projects as per client Requirements, Also sells Labkits",
    TStack: ["React", "NextJS 13.4", "MongoDB", "Next-Auth", "Server-Components", "Tailwind"],
  },
  {
    live: KoovsLive,
    github: KoovsGithub,
    image: koovsImg,
    heading1: "KOOVS Ecommerce",
    heading2: "(Koovs.com Clone)",
    workType: "Team of 4 Members",
    summary: "koovs is a Ecommerce website which helps you to find the different kinds of Fashion Related Products.",
    TStack: ["React", "JavaScript", "HTML", "CSS", "Node", "Express", "MongoDB"],
  },
  {
    live: APrimeLive,
    github: APrimeGithub,
    image: aPrimeImg,
    heading1: "A-Prime",
    heading2: "(Custom Youtube App)",
    workType: "Individual",
    summary: "It is A Simple Video Platform to watch Youtube videos, Made using Google Youtube Data API V3. We can Search through various videos, filter, and paginate",
    TStack: ["React", "JavaScript", "TypeScript", "YouTube API", "Redux", "Node", "Express", "MongoDB", "ChakraUI"],
  },
  {
    live: GadgetRamboLive,
    github: GadgetRamboGithub,
    image: gRamboImg,
    heading1: "GadgetRambo",
    heading2: "(Gadget360.com Clone)",
    workType: "Team of 5 members",
    summary:
      "This website had been created to target tech-geeks to explore tech gadgets and tech related news. Sells Tech Gadgets and Stores Knowledge of Specifications of those Gadgets",
    TStack: ["React", "NextJS", "Firebase", "Google-Auth", "TypeScript", "Redux", "ChakraUI"],
  },
  {
    live: glamazonLive,
    github: glamazonGithub,
    image: glamazonImg,
    heading1: `Glamazon.com`,
    heading2: "(BeautyBebo.com Clone)",
    workType: "Individual",
    summary: "A Ecommerce Website that sells Products Related to Cosmetics and Beauty. Build on ReactJs for Frontend and Custom Server (Json-server) on Backend.",
    TStack: ["React", "ChakraUI", "JavaScript", "HTML", "CSS"],
  },
  {
    live: indianExpressLive,
    github: indianExpressGithub,
    image: indExpImg,
    heading1: "IndianExpress",
    heading2: "(News)",
    workType: "Individual",
    summary:
      "It is an Online and Offline News Platform, The Indian Express grew into a multiple-edition paper influencing thought and policy across the country. Packed with a fair mix of news, knowledge and information.",
    TStack: ["JavaScript", "HTML", "CSS"],
  },
];
