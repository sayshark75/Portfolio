import { MdWork } from "react-icons/md";
import { TimelineCardProps } from "./TYPES";
import { RiGraduationCapFill } from "react-icons/ri";
import { Links } from "./CONSTANTS";

const { AutotronLogo, MasaiLinkedIn, MasaiLogo, MasaiWebsite, TopBarLinkedIn, TopBarLogo, UOPLinkedIn, UOPLogo, UOPWebsite } = Links;

export const TopBarQuery = [
  "NextJs",
  "React",
  "TypeScript",
  "JavaScript",
  "TailwindCSS",
  "Scss",
  "ChakraUI",
  "NodeJS",
  "Express",
  "SQL",
  "NoSQL",
  "Prisma",
  "AWS EC2",
  "AWS S3",
  "Docker",
  "Shopify",
  "Strapi",
  "Razorpay",
];
export const AutotronQuery = ["React", "TypeScript", "TailwindCSS", "Chakra UI", "JavaScript", "Node", "Express", "MongoDB"];
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
    title: "TopBar Services",
    logo: TopBarLogo,
    linkedin: TopBarLinkedIn,
    website: "",
    type: "Work",
    role: "Software Developer",
    query: TopBarQuery,
    highlight: TopBarQuery.join(" "),
    dateStart: "Mar 2023",
    dateEnd: "Mar 2025",
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
    title: "AutoTron Technologies",
    logo: AutotronLogo,
    linkedin: "",
    website: "",
    location: "",
    role: "Associate Web Developer",
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
