"use client";
import { useScrollContext } from "@/context/ScrollContext";
import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const ProjectsRefWrapper = ({ children }: { children: ReactNode }) => {
  const { ProjectsRef } = useScrollContext();
  return (
    <Flex
      bgColor={"white"}
      w={"100%"}
      maxW={"1440px"}
      mx={"auto"}
      ref={ProjectsRef}
      transition={"300ms"}
      justifyContent={"center"}
      pt={"10"}
      minH={"100vh"}
      alignItems={"center"}
      direction={"column"}
      gap={8}
    >
      {children}
    </Flex>
  );
};

export default ProjectsRefWrapper;
