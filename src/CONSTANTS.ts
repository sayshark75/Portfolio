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
};
