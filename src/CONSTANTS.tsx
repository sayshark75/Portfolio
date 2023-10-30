import HomeIcon from "./assets/icons/home.svg";
import AboutIcon from "./assets/icons/about.svg";
import ContactIcon from "./assets/icons/contact.svg";
import ProjectsIcon from "./assets/icons/projects.svg";
import SkillsIcon from "./assets/icons/skills.svg";
import ResumeIcon from "./assets/icons/resume.svg";
import { ScrollContextProps, SocialBtnType } from "./TYPES";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { githubLink, linkedInLink, locationLink, phoneLink, twitterLink } from "./sources/Links";
import { MdAlternateEmail, MdCall, MdMyLocation } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";

export const getNavbarButtonsData = (context: ScrollContextProps, resumeDownload: string, handleClick: () => void) => {
  const { handleHomeRef, handleAboutRef, handleSkillsRef, handleProjectsRef, handleContactRef } = context;
  return [
    {
      link: "",
      refFunction: handleHomeRef,
      title: "Home",
      alt: "Image Icon of Home, Navigate to Home section",
      icon: HomeIcon,
      x: "0px",
      y: "-40px",
    },
    {
      link: "",
      refFunction: handleAboutRef,
      title: "About",
      alt: "Image Icon of About, Navigate to About section",
      icon: AboutIcon,
      x: "0px",
      y: "-50px",
    },
    {
      link: "",
      refFunction: handleProjectsRef,
      title: "Projects",
      alt: "Image Icon of Projects, Navigate to Projects section",
      icon: ProjectsIcon,
      x: "0px",
      y: "-60px",
    },
    {
      link: "",
      refFunction: handleSkillsRef,
      title: "Skills",
      alt: "Image Icon of Skills, Navigate to Skills section",
      icon: SkillsIcon,
      x: "0px",
      y: "-70px",
    },
    {
      link: "",
      refFunction: handleContactRef,
      title: "Contact",
      alt: "Image Icon of Contact, Navigate to Contact section",
      icon: ContactIcon,
      x: "0px",
      y: "-80px",
    },
    {
      link: resumeDownload,
      refFunction: handleClick,
      title: "Resume",
      alt: "Image Icon of Resume, Navigate to Resume section",
      icon: ResumeIcon,
      x: "0px",
      y: "-90px",
    },
  ];
};

export const socialBtnDataCreator = (onOpen: () => void): SocialBtnType[] => {
  return [
    {
      link: githubLink,
      icon: <VscGithub />,
      tooltip: "GitHub",
      label: "Visit my Link of github",
      onClick: () => {},
    },
    {
      link: "",
      icon: <MdAlternateEmail />,
      tooltip: "Email",
      label: "Compose an Email to Me?",
      onClick: onOpen,
    },
    {
      link: phoneLink,
      icon: <MdCall />,
      tooltip: "Phone",
      label: "Call on My Number",
      onClick: () => {},
    },
    {
      link: linkedInLink,
      icon: <FaLinkedinIn />,
      tooltip: "LinkedIn",
      label: "Visit my LinkedIn Profile",
      onClick: () => {},
    },
    {
      link: twitterLink,
      icon: <BsTwitter />,
      tooltip: "Twitter",
      label: "Visit my Link of Twitter Profile",
      onClick: () => {},
    },
    {
      link: locationLink,
      icon: <MdMyLocation />,
      tooltip: "Location",
      label: "Checkout my location on Google Maps",
      onClick: () => {},
    },
  ];
};
