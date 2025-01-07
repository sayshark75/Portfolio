import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { NavButtonType } from "./DesktopNav";

const NavMenuButton = ({ refFunction, title, icon, closePopover = () => {} }: NavButtonType & { closePopover?: () => void }) => {
  return (
    <Flex
      cursor={"pointer"}
      onClick={() => {
        refFunction();
        closePopover();
      }}
      p={1}
      rounded={"md"}
      bgColor={"white"}
      color={"darker"}
      gap={2}
      fontSize={"12px"}
      fontFamily={"poppins"}
      align={"center"}
      w={"100%"}
    >
      <Text pl={1} fontSize={"16px"}>
        {icon}
      </Text>
      <Text>{title}</Text>
    </Flex>
  );
};

export default NavMenuButton;
