"use client";
import { Flex } from "@chakra-ui/react";
import NavButton from "./NavButton";
import NavIcon from "./NavIcon";
import React from "react";
import { NavButtonType } from "./DesktopNav";
import useCheckScrolling from "@/hooks/useCheckScrolling";
import useWindowSize from "@/hooks/useWindowSize";
import Link from "next/link";

const MobileNav = ({ buttonData }: { buttonData: NavButtonType[] }) => {
  const { isScrolling } = useCheckScrolling();
  const { width } = useWindowSize();
  const isMobile = width < 480;
  return (
    <Flex
      transition={"500ms"}
      pos={"fixed"}
      bottom={8}
      alignItems={"center"}
      zIndex={100}
      w={"100%"}
      transform={isScrolling ? "translateY(200%)" : "none"}
      bgColor={"transparent"}
      color={"text"}
      justifyContent={"space-evenly"}
    >
      {buttonData.map((button, index) => {
        return button.link ? (
          <Link key={`link-button-${index}`} href={button.link} onClick={button.refFunction}>
            {isMobile ? (
              <NavIcon icon={button.icon as JSX.Element} alt={button.alt as string} onClick={button.refFunction} delay={button.delay} />
            ) : (
              <NavButton title={button.title} refFunction={button.refFunction} delay={button.delay} />
            )}
          </Link>
        ) : isMobile ? (
          <NavIcon
            key={`button-with-icon-${index}`}
            icon={button.icon as JSX.Element}
            alt={button.alt as string}
            onClick={button.refFunction}
            delay={button.delay}
          />
        ) : (
          <NavButton key={`button-with-text-${index}`} title={button.title} refFunction={button.refFunction} delay={button.delay} />
        );
      })}
    </Flex>
  );
};

export default MobileNav;
