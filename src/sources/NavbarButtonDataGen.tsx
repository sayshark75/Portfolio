import { MdContacts, MdHome, MdInfo, MdQuestionAnswer } from "react-icons/md";
import { ScrollContextProps } from "../TYPES";
import { FaCookieBite, FaCreditCard } from "react-icons/fa";

export const getNavbarButtonsData = (context: ScrollContextProps, resumeDownload: string, handleClick: () => void) => {
  const { handleHomeRef, handleAboutRef, handleSkillsRef, handleProjectsRef, handleContactRef } = context;
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
