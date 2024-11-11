import { ContributionDataType, ThemeIconsProps, TimelineCardProps } from "./TYPES";

import { RiGraduationCapFill } from "react-icons/ri";
import {
  AutotronLinkedIn,
  AutotronLocation,
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
import { MdCodeOff, MdOutlineStar, MdWork } from "react-icons/md";
import { blueTheme } from "./themes/BlueTheme";
import { redTheme } from "./themes/RedTheme";
import { greenTheme } from "./themes/GreenTheme";
import { violetTheme } from "./themes/VioletTheme";
import { orangeTheme } from "./themes/OrangeTheme";
import { yellowTheme } from "./themes/YellowTheme";
import { CgWebsite } from "react-icons/cg";
import { IoMdGitCommit } from "react-icons/io";

export const ContributionData: ContributionDataType[] = [
  { icon: <MdOutlineStar />, value: "1800+", title: "Hours of Coding Experience", delay: "200ms" },
  { icon: <MdCodeOff />, value: "920+", title: "DSA Problems Solved", delay: "400ms" },
  { icon: <CgWebsite />, value: "8+", title: "Ongoing Projects", delay: "600ms" },
  { icon: <IoMdGitCommit />, value: "1950+", title: "Github Contribution", delay: "800ms" },
];

export const TopBarQuery = [
  "JavaScript",
  "React",
  "TypeScript",
  "Scss",
  "Express",
  "MongoDB",
  "ChakraUI",
  "AWS EC2",
  "AWS S3",
  "Docker",
  "Strapi",
  "Razorpay",
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
    dateStart: "Aug 2023",
    dateEnd: "Present",
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
    dateStart: "Aug 2022",
    dateEnd: "Apr 2023",
    icon: <RiGraduationCapFill />,
  },
  {
    title: "AutoTron Electronics",
    logo: AutotronLogo,
    linkedin: AutotronLinkedIn,
    website: AutotronWebsite,
    location: AutotronLocation,
    role: "Embedded Developer",
    query: AutotronQuery,
    highlight: AutotronQuery.join(" "),
    dateStart: "Apr 2020",
    dateEnd: "Aug 2022",
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
    dateStart: "Aug 2018",
    dateEnd: "Apr 2020",
    icon: <RiGraduationCapFill />,
  },
];

export const ThemeIconsData: ThemeIconsProps[] = [
  {
    color: "themeBlue",
    metaColor: "#0954BD",
    theme: blueTheme,
    themeName: "blue",
  },
  {
    color: "themeRed",
    metaColor: "#E10202",
    theme: redTheme,
    themeName: "red",
  },
  {
    color: "themeGreen",
    metaColor: "#11C402",
    theme: greenTheme,
    themeName: "green",
  },
  {
    color: "themeViolet",
    metaColor: "#8406C3",
    theme: violetTheme,
    themeName: "violet",
  },
  {
    color: "themeOrange",
    metaColor: "#C44201",
    theme: orangeTheme,
    themeName: "orange",
  },
  {
    color: "themeYellow",
    metaColor: "#DBBA03",
    theme: yellowTheme,
    themeName: "yellow",
  },
];
