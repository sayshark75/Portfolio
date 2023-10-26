import { Show } from "@chakra-ui/react";
import { useContext } from "react";
import HomeIcon from "../../assets/icons/home.svg";
import AboutIcon from "../../assets/icons/about.svg";
import ContactIcon from "../../assets/icons/contact.svg";
import ProjectsIcon from "../../assets/icons/projects.svg";
import SkillsIcon from "../../assets/icons/skills.svg";
import ResumeIcon from "../../assets/icons/resume.svg";

import ReactGA from "react-ga4";
import { resumeDownload, resumelink } from "../../sources/Links";
import { ScrollContext } from "../../contexts/ScrollContext";
import { NavbarButtonProps } from "../../CONSTANTS";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
// import ThemeChanger from "./ThemeChanger";

const Navbar = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    return null;
  }

  const { handleHomeRef, handleAboutRef, handleSkillsRef, handleProjectsRef, handleContactRef } = context;

  const handleClick = () => {
    window.open(resumelink, "_blank");
    ReactGA.event({
      category: "Resume",
      action: "Downloaded the Resume",
    });
  };

  const NavButtonsData: NavbarButtonProps[] = [
    {
      link: "",
      refFunction: handleHomeRef,
      title: "Home",
      alt: "Image Icon of Home, Navigate to Home section",
      icon: HomeIcon,
    },
    {
      link: "",
      refFunction: handleAboutRef,
      title: "About",
      alt: "Image Icon of About, Navigate to About section",
      icon: AboutIcon,
    },
    {
      link: "",
      refFunction: handleProjectsRef,
      title: "Projects",
      alt: "Image Icon of Projects, Navigate to Projects section",
      icon: ProjectsIcon,
    },
    {
      link: "",
      refFunction: handleSkillsRef,
      title: "Skills",
      alt: "Image Icon of Skills, Navigate to Skills section",
      icon: SkillsIcon,
    },
    {
      link: "",
      refFunction: handleContactRef,
      title: "Contact",
      alt: "Image Icon of Contact, Navigate to Contact section",
      icon: ContactIcon,
    },
    {
      link: resumeDownload,
      refFunction: handleClick,
      title: "Resume",
      alt: "Image Icon of Resume, Navigate to Resume section",
      icon: ResumeIcon,
    },
  ];

  return (
    <>
      <Show above="769px">
        <DesktopNav buttonData={NavButtonsData} />
      </Show>
      {/* Theme Preferences */}
      {/* <ThemeChanger /> */}

      {/* Mobile Navbar */}
      <Show below="768px">
        <MobileNav buttonsData={NavButtonsData} />
      </Show>
    </>
  );
};

export default Navbar;
