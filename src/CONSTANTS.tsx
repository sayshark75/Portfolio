import { ContributionDataType, ThemeIconsProps, TimelineCardProps } from "./TYPES";

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
} from "./sources/Links";
import { MdWork } from "react-icons/md";
import { blueTheme } from "./themes/BlueTheme";
import { redTheme } from "./themes/RedTheme";
import { greenTheme } from "./themes/GreenTheme";
import { violetTheme } from "./themes/VioletTheme";
import { orangeTheme } from "./themes/OrangeTheme";
import { yellowTheme } from "./themes/YellowTheme";

export const ContributionData: ContributionDataType[] = [
  { title: "1800+ Hours of Coding Experience", delay: "200ms" },
  { title: "830+ DSA Problems Solved", delay: "400ms" },
  { title: "6+ Ongoing Projects", delay: "600ms" },
  { title: "1200+ Github Contributions", delay: "800ms" },
];

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
export const AutotronQuery = ["Programming", "C++", "Circuits", "GCode", "Arduino", "MicroC", "RaspberryPI", "Projects", "Seller"];
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
export const UOPQuery = ["Electronics", "Arduino", "Raspberry Pi", "C++", "Embedded C", "Binary", "Hex", "TTL", "Circuits", "PCL", "Gcode"];

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

export const ThemeIconsData: ThemeIconsProps[] = [
  {
    color: "themeBlue",
    metaColor: "#0954BD",
    theme: blueTheme,
  },
  {
    color: "themeRed",
    metaColor: "#E10202",
    theme: redTheme,
  },
  {
    color: "themeGreen",
    metaColor: "#11C402",
    theme: greenTheme,
  },
  {
    color: "themeViolet",
    metaColor: "#8406C3",
    theme: violetTheme,
  },
  {
    color: "themeOrange",
    metaColor: "#C44201",
    theme: orangeTheme,
  },
  {
    color: "themeYellow",
    metaColor: "#DBBA03",
    theme: yellowTheme,
  },
];
