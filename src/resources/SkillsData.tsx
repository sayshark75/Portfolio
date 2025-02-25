import { BiCodeCurly, BiLogoVisualStudio } from "react-icons/bi";
import { BsTerminalFill } from "react-icons/bs";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaNodeJs, FaAws, FaDocker, FaGit, FaShopify } from "react-icons/fa";
import { FaBook, FaCircleQuestion, FaClock, FaMessage, FaStar, FaUserGroup, FaUserTie } from "react-icons/fa6";
import { PiPlantFill } from "react-icons/pi";
import { RiRobot3Fill } from "react-icons/ri";
import {
  SiTypescript,
  SiVite,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiChakraui,
  SiBootstrap,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPrisma,
  SiSequelize,
  SiJest,
  SiNvm,
  SiStrapi,
  SiRazorpay,
  SiLinux,
  SiUbuntu,
  SiPostman,
  SiAdobecreativecloud,
  SiMui,
  SiIntellijidea,
  SiOpenai,
  SiVercel,
  SiClaude,
  SiHuggingface,
  SiGooglegemini,
  SiLeetcode,
  SiNotion,
} from "react-icons/si";

export const SkillsData = [
  {
    title1: "Coding & Markup",
    title2: "Languages",
    skills: [
      { title: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: <FaHtml5 />, color: "#E34F26" },
      { title: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", icon: <FaCss3Alt />, color: "#1572B6" },
      { title: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: <FaJs />, color: "#FCC624" },
      { title: "TypeScript", link: "https://www.typescriptlang.org/", icon: <SiTypescript />, color: "#3178C6" },
      { title: "Java", link: "https://www.java.com/", icon: <FaJava />, color: "#007396" },
    ],
  },
  {
    title1: "Frontend",
    title2: "Skills",
    skills: [
      { title: "Vite", link: "https://vitejs.dev/", icon: <SiVite />, color: "#646CFF" },
      { title: "NextJS 13/14", link: "https://nextjs.org/", icon: <SiNextdotjs />, color: "darker" },
      { title: "React Native", link: "https://reactnative.dev/", icon: <FaReact />, color: "#61DAFB" },
      { title: "Redux", link: "https://redux.js.org/", icon: <SiRedux />, color: "#764ABC" },
      { title: "Tailwind", link: "https://tailwindcss.com/", icon: <SiTailwindcss />, color: "#38BDF8" },
      { title: "Chakra UI", link: "https://chakra-ui.com/", icon: <SiChakraui />, color: "#319795" },
      { title: "Material UI", link: "https://mui.com/", icon: <SiMui />, color: "#007FFF" },
      { title: "Bootstrap", link: "https://getbootstrap.com/", icon: <SiBootstrap />, color: "#7952B3" },
      { title: "Framer Motion", link: "https://www.framer.com/motion/", icon: <SiFramer />, color: "#0055FF" },
    ],
  },
  {
    title1: "Backend",
    title2: "Skills",
    skills: [
      { title: "Node", link: "https://nodejs.org/", icon: <FaNodeJs />, color: "#339933" },
      { title: "Express", link: "https://expressjs.com/", icon: <SiExpress />, color: "darker" },
      { title: "MongoDB", link: "https://www.mongodb.com/", icon: <SiMongodb />, color: "#47A248" },
      { title: "Firebase", link: "https://firebase.google.com/", icon: <SiFirebase />, color: "#FFCA28" },
      { title: "WebSockets", link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API", icon: <FaJs />, color: "#FCC624" },
      { title: "Prisma", link: "https://www.prisma.io/", icon: <SiPrisma />, color: "darker" },
      { title: "Sequelize", link: "https://sequelize.org/", icon: <SiSequelize />, color: "#52B0E7" },
    ],
  },
  {
    title1: "DevOps",
    title2: "Skills",
    skills: [
      { title: "AWS Essentials", link: "https://aws.amazon.com/", icon: <FaAws />, color: "#FF9900" },
      { title: "Vercel", link: "https://vercel.com/home", icon: <SiVercel />, color: "darker" },
      { title: "Docker", link: "https://www.docker.com/", icon: <FaDocker />, color: "#2496ED" },
      { title: "Git", link: "https://git-scm.com/", icon: <FaGit />, color: "#F05032" },
      { title: "JEST", link: "https://jestjs.io/", icon: <SiJest />, color: "#C21325" },
      { title: "NVM", link: "https://github.com/nvm-sh/nvm", icon: <SiNvm />, color: "#3E863D" },
    ],
  },
  {
    title1: "CMS & Other",
    title2: "Tools",
    skills: [
      { title: "Shopify", link: "https://www.shopify.com/", icon: <FaShopify />, color: "#96BF48" },
      { title: "Strapi", link: "https://strapi.io/", icon: <SiStrapi />, color: "#2E7EEA" },
      { title: "Razorpay", link: "https://razorpay.com/", icon: <SiRazorpay />, color: "#02042B" },
      { title: "Linux", link: "https://www.linux.org/", icon: <SiLinux />, color: "#FCC624" },
      { title: "Ubuntu", link: "https://ubuntu.com/", icon: <SiUbuntu />, color: "#E95420" },
      {
        title: "CLI",
        link: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
        icon: <BsTerminalFill />,
        color: "darker",
      },
      { title: "IntelliJ IDEA", link: "https://www.jetbrains.com/idea/", icon: <SiIntellijidea />, color: "#b83aca" },
      { title: "VS Code", link: "https://code.visualstudio.com/", icon: <BiLogoVisualStudio />, color: "#007ACC" },
      { title: "Postman", link: "https://www.postman.com/", icon: <SiPostman />, color: "#FF6C37" },

      { title: "Graphic Designing", link: "https://www.adobe.com/creativecloud.html", icon: <SiAdobecreativecloud />, color: "#FF0000" },
    ],
  },
  {
    title1: "AI",
    title2: "Tools",
    skills: [
      { title: "ChatGPT", link: "https://chatgpt.com/", icon: <SiOpenai />, color: "darker" },
      { title: "Claude AI", link: "https://claude.ai/new", icon: <SiClaude />, color: "#feb248" },
      { title: "Grok AI", link: "https://grok.com/", icon: <RiRobot3Fill />, color: "darker" },
      { title: "Codium", link: "https://codeium.com/", icon: <BiCodeCurly />, color: "#09b6a2" },
      { title: "Gemini", link: "https://gemini.google.com/app?hl=en-IN", icon: <SiGooglegemini />, color: "#2aadfe" },
      { title: "Hugging Face", link: "https://huggingface.co/", icon: <SiHuggingface />, color: "#fee14d" },
    ],
  },
  {
    title1: "Soft",
    title2: "Skills",
    skills: [
      {
        title: "Teamwork",
        link: "#",
        icon: <FaUserGroup />,
        color: "darker",
      },
      {
        title: "Leadership",
        link: "#",
        icon: <FaStar />,
        color: "darker",
      },
      {
        title: "Problem Solving",
        link: "#",
        icon: <FaCircleQuestion />,
        color: "darker",
      },
      {
        title: "Time Management",
        link: "#",
        icon: <FaClock />,
        color: "darker",
      },
      {
        title: "Adaptability",
        link: "#",
        icon: <FaBook />,
        color: "darker",
      },
      {
        title: "Communication",
        link: "#",
        icon: <FaMessage />,
        color: "darker",
      },
      {
        title: "Growth Mindset",
        link: "#",
        icon: <PiPlantFill />,
        color: "darker",
      },
    ],
  },
];
