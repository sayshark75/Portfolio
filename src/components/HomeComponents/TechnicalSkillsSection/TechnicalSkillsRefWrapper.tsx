"use client";
import { useScrollContext } from "@/context/ScrollContext";
import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const TechnicalSkillsRefWrapper = ({ children }: { children: ReactNode }) => {
  const { SkillsRef } = useScrollContext();
  return (
    <Flex
      w={"100%"}
      maxW={"1440px"}
      bgColor={"white"}
      mx={"auto"}
      ref={SkillsRef}
      transition={"300ms"}
      direction={"column"}
      minH={"40vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {children}
    </Flex>
  );
};

export default TechnicalSkillsRefWrapper;
