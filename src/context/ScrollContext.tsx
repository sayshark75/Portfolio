"use client";
import { ContextProviderProps, ScrollContextProps } from "@/resources/TYPES";
import React, { createContext, useRef } from "react";

export const ScrollContext = createContext<ScrollContextProps>({
  HomeRef: null,
  AboutRef: null,
  SkillsRef: null,
  ProjectsRef: null,
  ContactRef: null,
  handleHomeRef: () => {},
  handleAboutRef: () => {},
  handleSkillsRef: () => {},
  handleProjectsRef: () => {},
  handleContactRef: () => {},
});

export const ScrollContextProvider = ({ children }: ContextProviderProps) => {
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
  // what is the issue here?

  return <ScrollContext.Provider value={values}>{children}</ScrollContext.Provider>;
};

// export a hook which is used in component to get the values and functions, and also the ScrollContextProvider
export const useScrollContext = () => React.useContext(ScrollContext);
