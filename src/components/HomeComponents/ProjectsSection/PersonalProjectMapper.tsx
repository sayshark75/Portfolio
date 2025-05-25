"use client";
import { PersonalProjectsData } from "@/resources/ProjectsData";
import ProjectsCard from "./ProjectsCard";

const PersonalProjectMapper = () => {
  return PersonalProjectsData.map((project, index) => {
    return <ProjectsCard key={`personal-project-data-key-${index}`} {...project} />;
  });
};

export default PersonalProjectMapper;
