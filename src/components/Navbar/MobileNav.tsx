"use client";
import { Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { NavButtonType } from "./DesktopNav";
import useCheckScrolling from "@/hooks/useCheckScrolling";
import NavMenuButton from "./NavMenuButton";

const MobileNav = ({ buttonData }: { buttonData: NavButtonType[] }) => {
  const { isScrolling } = useCheckScrolling();

  return (
    <Flex
      hideFrom={"small"}
      transition={"300ms"}
      pos={"fixed"}
      bottom={0}
      alignItems={"center"}
      zIndex={100}
      w={"100%"}
      transform={isScrolling ? "translateY(200%)" : "none"}
      bgColor={"accent"}
      justifyContent={"flex-start"}
    >
      <Flex w={"100%"} gap={1} py={2} align={"center"}>
        {buttonData.map((button, index) => {
          return button.link ? (
            <Link w={"100%"} key={`link-button-${index}`} href={button.link} onClick={button.refFunction}>
              <NavMenuButton {...button} />
            </Link>
          ) : (
            <React.Fragment key={`button-${index}`}>
              <NavMenuButton {...button} />
              <Text color={"white"}>|</Text>
            </React.Fragment>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default MobileNav;
