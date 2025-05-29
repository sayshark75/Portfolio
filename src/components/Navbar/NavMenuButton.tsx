import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { NavButtonType } from "./DesktopNav";

const NavMenuButton = ({ refFunction, title, icon }: NavButtonType) => {
  return (
    <Flex
      direction={"column"}
      cursor={"pointer"}
      onClick={() => {
        refFunction();
      }}
      color={"darker"}
      fontSize={"10px"}
      fontFamily={"poppins"}
      justify={"center"}
      align={"center"}
      w={"100%"}
    >
      <Text color={"darker"} mb={1} fontSize={"16px"}>
        {icon}
      </Text>
      <Text>{title}</Text>
    </Flex>
  );
};

export default NavMenuButton;
