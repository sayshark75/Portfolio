import { useRef } from "react";
import { createContext } from "react";
import { ContextProviderProps, ScrollContextProps } from "../TYPES";
import ReactGA from "react-ga4";

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

const ScrollContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const HomeRef = useRef<HTMLDivElement | null>(null);
  const AboutRef = useRef<HTMLDivElement | null>(null);
  const SkillsRef = useRef<HTMLDivElement | null>(null);
  const ProjectsRef = useRef<HTMLDivElement | null>(null);
  const ContactRef = useRef<HTMLDivElement | null>(null);

  const handleHomeRef = (): void => {
    if (HomeRef.current) {
      ReactGA.send({ hitType: "pageview", page: "/home", title: "Scrolled to home page via navbar" });
      HomeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  const handleAboutRef = (): void => {
    if (AboutRef.current) {
      ReactGA.send({ hitType: "pageview", page: "/about", title: "Scrolled to about page via navbar" });
      AboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  const handleSkillsRef = (): void => {
    if (SkillsRef.current) {
      ReactGA.send({ hitType: "pageview", page: "/skills", title: "Scrolled to skills page via navbar" });
      SkillsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  const handleProjectsRef = (): void => {
    if (ProjectsRef.current) {
      ReactGA.send({ hitType: "pageview", page: "/project", title: "Scrolled to project page via navbar" });
      ProjectsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  const handleContactRef = (): void => {
    if (ContactRef.current) {
      ReactGA.send({ hitType: "pageview", page: "/contact", title: "Scrolled to contact page via navbar" });
      ContactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  const values: ScrollContextProps = {
    HomeRef,
    AboutRef,
    SkillsRef,
    ProjectsRef,
    ContactRef,
    handleHomeRef,
    handleAboutRef,
    handleSkillsRef,
    handleProjectsRef,
    handleContactRef,
  };

  return <ScrollContext.Provider value={values}>{children}</ScrollContext.Provider>;
};

export default ScrollContextProvider;
export { ScrollContext };
