import {
  ContributionDataType,
  ScrollContextProps,
  SocialBtnType,
  TimelineCardProps,
} from "./TYPES";
import { VscGithub } from "react-icons/vsc";
import { FaCookieBite, FaCreditCard, FaLinkedinIn } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import {
  AutotronLinkedIn,
  AutotronLogo,
  AutotronWebsite,
  MasaiLinkedIn,
  MasaiLogo,
  MasaiWebsite,
  TopBarLinkedIn,
  TopBarLogo,
  TopBarWebsite,
  UOPLinkedIn,
  UOPLogo,
  UOPWebsite,
  githubLink,
  linkedInLink,
  locationLink,
  phoneLink,
  twitterLink,
} from "./sources/Links";
import {
  MdAlternateEmail,
  MdCall,
  MdContacts,
  MdHome,
  MdInfo,
  MdMyLocation,
  MdQuestionAnswer,
  MdWork,
} from "react-icons/md";
import { BsTwitter } from "react-icons/bs";

export const getNavbarButtonsData = (
  context: ScrollContextProps,
  resumeDownload: string,
  handleClick: () => void
) => {
  const {
    handleHomeRef,
    handleAboutRef,
    handleSkillsRef,
    handleProjectsRef,
    handleContactRef,
  } = context;
  return [
    {
      link: "",
      refFunction: handleHomeRef,
      title: "Home",
      alt: "Image Icon of Home, Navigate to Home section",
      icon: <MdHome />,
      delay: "200ms",
    },
    {
      link: "",
      refFunction: handleAboutRef,
      title: "About",
      alt: "Image Icon of About, Navigate to About section",
      icon: <MdInfo />,
      delay: "400ms",
    },
    {
      link: "",
      refFunction: handleProjectsRef,
      title: "Projects",
      alt: "Image Icon of Projects, Navigate to Projects section",
      icon: <FaCreditCard />,
      delay: "600ms",
    },
    {
      link: "",
      refFunction: handleSkillsRef,
      title: "Skills",
      alt: "Image Icon of Skills, Navigate to Skills section",
      icon: <FaCookieBite />,
      delay: "800ms",
    },
    {
      link: "",
      refFunction: handleContactRef,
      title: "Contact",
      alt: "Image Icon of Contact, Navigate to Contact section",
      icon: <MdQuestionAnswer />,
      delay: "1s",
    },
    {
      link: resumeDownload,
      refFunction: handleClick,
      title: "Resume",
      alt: "Image Icon of Resume, Navigate to Resume section",
      icon: <MdContacts />,
      delay: "1.2s",
    },
  ];
};

export const ContributionData: ContributionDataType[] = [
  { title: "1800+ Hours of Coding Experience", delay: "200ms" },
  { title: "830+ DSA Problems Solved", delay: "400ms" },
  { title: "6+ Ongoing Projects", delay: "600ms" },
  { title: "1200+ Github Contributions", delay: "800ms" },
];

export const socialBtnDataCreator = (onOpen: () => void): SocialBtnType[] => {
  return [
    {
      link: githubLink,
      icon: <VscGithub />,
      tooltip: "GitHub",
      label: "Visit my Link of github",
      onClick: () => {},
      delay: "200ms",
    },
    {
      link: "",
      icon: <MdAlternateEmail />,
      tooltip: "Email",
      label: "Compose an Email to Me?",
      onClick: onOpen,
      delay: "400ms",
    },
    {
      link: phoneLink,
      icon: <MdCall />,
      tooltip: "Phone",
      label: "Call on My Number",
      onClick: () => {},
      delay: "600ms",
    },
    {
      link: linkedInLink,
      icon: <FaLinkedinIn />,
      tooltip: "LinkedIn",
      label: "Visit my LinkedIn Profile",
      onClick: () => {},
      delay: "800ms",
    },
    {
      link: twitterLink,
      icon: <BsTwitter />,
      tooltip: "Twitter",
      label: "Visit my Link of Twitter Profile",
      onClick: () => {},
      delay: "1s",
    },
    {
      link: locationLink,
      icon: <MdMyLocation />,
      tooltip: "Location",
      label: "Checkout my location on Google Maps",
      onClick: () => {},
      delay: "1.2s",
    },
  ];
};

export const TopBarQuery = [
  "JavaScript",
  "React",
  "Axios",
  "TypeScript",
  "Scss",
  "API's",
  "Node",
  "Express",
  "MongoDB",
  "ChakraUI",
  "AWS EC2 ",
  "AWS S3",
];
export const AutotronQuery = [
  "Programming",
  "C++",
  "Circuits",
  "GCode",
  "Arduino",
  "MicroC",
  "RaspberryPI",
  "Projects",
  "Seller",
];
export const MasaiQuery = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "NextJS",
  "TypeScript",
  "Node",
  "Express",
  "MongoDB",
  "Frontend",
  "Backend",
  "AWS S3",
  "AWS EC2",
];
export const UOPQuery = [
  "Electronics",
  "Arduino",
  "Raspberry Pi",
  "C++",
  "Embedded C",
  "Binary",
  "Hex",
  "TTL",
  "Circuits",
  "PCL",
  "Gcode",
];

export const TimelineData: TimelineCardProps[] = [
  {
    title: "TopBar Company",
    logo: TopBarLogo,
    linkedin: TopBarLinkedIn,
    website: TopBarWebsite,
    role: "Fullstack Web Developer",
    query: TopBarQuery,
    highlight: TopBarQuery.join(" "),
    date: "Aug 2023 - Present",
    icon: <MdWork />,
  },
  {
    title: "Masai School",
    logo: MasaiLogo,
    linkedin: MasaiLinkedIn,
    website: MasaiWebsite,
    role: "Learning Full Stack Web Developement",
    query: MasaiQuery,
    highlight: MasaiQuery.join(" "),
    date: "Aug 2022 - Apr 2023",
    icon: <RiGraduationCapFill />,
  },
  {
    title: "AutoTron Electronics",
    logo: AutotronLogo,
    linkedin: AutotronLinkedIn,
    website: AutotronWebsite,
    role: "Embedded Developer",
    query: AutotronQuery,
    highlight: AutotronQuery.join(" "),
    date: "Apr 2020 - Aug 2022",
    icon: <MdWork />,
  },
  {
    title: "University of Pune",
    logo: UOPLogo,
    linkedin: UOPLinkedIn,
    website: UOPWebsite,
    role: "Master of Science - Electronics",
    query: UOPQuery,
    highlight: UOPQuery.join(" "),
    date: "Aug 2018 - Apr 2020",
    icon: <RiGraduationCapFill />,
  },
];
