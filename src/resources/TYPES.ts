import { JSX } from "react";
import { IconType } from "react-icons";

export type ScrollContextRefs = {
  HomeRef: React.MutableRefObject<HTMLDivElement | null> | null;
  AboutRef: React.MutableRefObject<HTMLDivElement | null> | null;
  SkillsRef: React.MutableRefObject<HTMLDivElement | null> | null;
  ProjectsRef: React.MutableRefObject<HTMLDivElement | null> | null;
  ContactRef: React.MutableRefObject<HTMLDivElement | null> | null;
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

export type SocialBtnType = {
  link: string;
  icon: IconType;
  tooltip?: string;
  label: string;
};

export type ContributionDataType = {
  title: string;
  delay: string;
  value: string;
  icon: JSX.Element;
};

export type TimelineCardProps = {
  linkedin: string;
  website: string;
  location?: string;
  logo: string;
  title: string;
  role: string;
  type: "Work" | "Education";
  query: string[];
  highlight: string;
  dateStart: string;
  dateEnd: string;
  icon: JSX.Element;
};

export type ColorScale = [level0: Color, level1: Color, level2: Color, level3: Color, level4: Color];

export type Color = string;

export type ThemeInput =
  | {
      light: ColorScale | [from: string, to: string];
      dark?: ColorScale | [from: string, to: string] | undefined;
    }
  | {
      light?: ColorScale | [from: string, to: string] | undefined;
      dark: ColorScale | [from: string, to: string];
    };

export type CustomThemeType = {
  customTheme: ThemeInput;
  __primary: string;
  __accent: string;
  _accent: string;
  _text: string;
  _primaryLight: string;
  _darker: string;
};

export enum ProjectStatus {
  Building = "In Progress",
  Development = "In Development",
  Completed = "Completed",
}

export type ProjectDataProps = {
  live: string;
  github: string;
  image: string;
  heading1: string;
  workType: string;
  heading2: string;
  summary: string;
  status: ProjectStatus;
  TStack: string[];
};

export type MailDataType = { name: string; email: string; message: string };
