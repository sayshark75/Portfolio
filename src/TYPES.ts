import { ThemeConfig } from "@chakra-ui/react";

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

export type ThemeFunction = (config: ThemeConfig, metaColor: string) => void;

export type ThemeContextProps = {
  theme: ThemeConfig;
  handleTheme: ThemeFunction;
};
export type ThemeIconsProps = {
  color: string;
  theme: ThemeConfig;
  metaColor: string;
};

export interface ContextProviderProps {
  children: React.ReactNode;
}
export type EmailModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type NavbarButtonProps = {
  link: string;
  refFunction: () => void;
  title: string;
  icon: JSX.Element;
  alt: string;
  delay: string;
};

export type SocialBtnType = {
  link?: string;
  icon: JSX.Element;
  tooltip?: string;
  label: string;
  onClick: () => void;
  delay: string;
};

export type HeadingProps = {
  title1: string;
  title2: string;
};

export type TimelineCardProps = {
  linkedin: string;
  website: string;
  logo: string;
  title: string;
  role: string;
  query: string[];
  highlight: string;
  date: string;
  icon: JSX.Element;
};

export type ProjectDataProps = {
  live: string;
  github: string;
  image: string;
  heading1: string;
  workType: string;
  heading2: string;
  summary: string;
  TStack: string[];
};

export type SkillsDataProps = {
  title1: string;
  title2: string;
  skills: string[];
};

export type CopyButtonProps = {
  title: string;
};

export type ContributionDataType = {
  title: string;
  delay: string;
};

export type CarouselTypes = {
  mapperFunction: () => JSX.Element[];
  slides: number;
};

export type NavButtonProps = {
  title: string;
  onClick: () => void;
  delay: string;
};

export type DummyDateProps = { date: string; time: string };

export type mailDataType = { name: string; email: string; message: string };
