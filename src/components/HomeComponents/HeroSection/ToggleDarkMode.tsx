"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import { ColorModeIcon, useColorMode } from "../../ui/color-mode";

const ToggleDarkMode = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box
      pos={"fixed"}
      zIndex={100}
      onClick={toggleColorMode}
      bottom={{ base: 24, lg: 5 }}
      right={0}
      p={2}
      cursor={"pointer"}
      shadow={"lg"}
      fontSize={"22px"}
      roundedStart={"full"}
      bg={"white"}
    >
      {ColorModeIcon()}
    </Box>
  );
};

export default ToggleDarkMode;
