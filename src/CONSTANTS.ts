import HomeIcon from "./assets/icons/home.svg";
import AboutIcon from "./assets/icons/about.svg";
import ContactIcon from "./assets/icons/contact.svg";
import ProjectsIcon from "./assets/icons/projects.svg";
import SkillsIcon from "./assets/icons/skills.svg";
import ResumeIcon from "./assets/icons/resume.svg";

export type ScrollContextRefs = {
  HomeRef: React.MutableRefObject<HTMLDivElement | null>;
  AboutRef: React.MutableRefObject<HTMLDivElement | null>;
  SkillsRef: React.MutableRefObject<HTMLDivElement | null>;
  ProjectsRef: React.MutableRefObject<HTMLDivElement | null>;
  ContactRef: React.MutableRefObject<HTMLDivElement | null>;
};
export type ScrollContextFunctions = {
  handleHomeRef: () => void;
  handleAboutRef: () => void;
  handleSkillsRef: () => void;
  handleProjectsRef: () => void;
  handleContactRef: () => void;
};
export type ScrollContextProps = ScrollContextRefs & ScrollContextFunctions;

export interface ContextProviderProps {
  children: React.ReactNode;
}

export type NavbarButtonProps = {
  link: string;
  refFunction: () => void;
  title: string;
  icon: string;
  alt: string;
  x: string;
  y: string;
};

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
