"use client";
import { useScrollContext } from "@/context/ScrollContext";
import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const HeroSectionRefWrapper = ({ children }: { children: ReactNode }) => {
  const { HomeRef } = useScrollContext();
  return (
    <Flex
      ref={HomeRef}
      transition={"300ms"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
      maxW={"1440px"}
      mx={"auto"}
      minH={"100vh"}
      gap={{ base: 6, sm: 8 }}
      pos={"relative"}
      zIndex={5}
    >
      {children}
    </Flex>
  );
};

export default HeroSectionRefWrapper;
