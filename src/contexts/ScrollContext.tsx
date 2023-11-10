import { useRef } from "react";
import { createContext } from "react";
import { ContextProviderProps, ScrollContextProps } from "../TYPES";

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

const ScrollContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const HomeRef = useRef<HTMLDivElement | null>(null);
  const AboutRef = useRef<HTMLDivElement | null>(null);
  const SkillsRef = useRef<HTMLDivElement | null>(null);
  const ProjectsRef = useRef<HTMLDivElement | null>(null);
  const ContactRef = useRef<HTMLDivElement | null>(null);

  const handleHomeRef = (): void => {
    if (HomeRef.current) {
      HomeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  const handleAboutRef = (): void => {
    if (AboutRef.current) {
      AboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  const handleSkillsRef = (): void => {
    if (SkillsRef.current) {
      SkillsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  const handleProjectsRef = (): void => {
    if (ProjectsRef.current) {
      ProjectsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  const handleContactRef = (): void => {
    if (ContactRef.current) {
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

  return (
    <ScrollContext.Provider value={values}>{children}</ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
export { ScrollContext };
