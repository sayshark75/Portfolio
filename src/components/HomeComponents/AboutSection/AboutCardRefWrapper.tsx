"use client";
import { useScrollContext } from "@/context/ScrollContext";
import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const AboutCardRefWrapper = ({ children }: { children: ReactNode }) => {
  const { AboutRef } = useScrollContext();
  return (
    <Flex
      ref={AboutRef}
      transition={"300ms"}
      direction={"column"}
      w={"100%"}
      px={3}
      minH={"70vh"}
      maxW={"1440px"}
      mx={"auto"}
      bgColor={"white"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {children}
    </Flex>
  );
};

export default AboutCardRefWrapper;
