import { MdWork } from "react-icons/md";
import { TimelineCardProps } from "./TYPES";
import { RiGraduationCapFill } from "react-icons/ri";
import { Links } from "./CONSTANTS";

const {
  AutotronLinkedIn,
  AutotronLocation,
  AutotronLogo,
  MasaiLinkedIn,
  MasaiLogo,
  MasaiWebsite,
  TopBarLinkedIn,
  TopBarLogo,
  TopBarWebsite,
  UOPLinkedIn,
  UOPLogo,
  UOPWebsite,
} = Links;

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
    type: "Work",
    role: "SDE: Fullstack Web Developer",
    query: TopBarQuery,
    highlight: TopBarQuery.join(" "),
    dateStart: "Aug 2023",
    dateEnd: "Present",
    icon: <MdWork />,
  },
  {
    type: "Education",
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
    type: "Work",
    title: "AutoTron Electronics",
    logo: AutotronLogo,
    linkedin: AutotronLinkedIn,
    website: "",
    location: AutotronLocation,
    role: "Co-Worker: Embedded Developer",
    query: AutotronQuery,
    highlight: AutotronQuery.join(" "),
    dateStart: "Apr 2020",
    dateEnd: "Aug 2022",
    icon: <MdWork />,
  },
  {
    type: "Education",
    title: "University of Pune",
    logo: UOPLogo,
    linkedin: UOPLinkedIn,
    website: UOPWebsite,
    role: "PostGraduation: Master of Science - Electronics",
    query: UOPQuery,
    highlight: UOPQuery.join(" "),
    dateStart: "Aug 2018",
    dateEnd: "Apr 2020",
    icon: <RiGraduationCapFill />,
  },
];
