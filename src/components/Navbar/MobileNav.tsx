import { Flex, Show } from "@chakra-ui/react";
import { NavbarButtonProps } from "../../TYPES";
import NavButton from "./NavButton";
import NavIcon from "./NavIcon";
import React from "react";
import useScrolling from "../../hooks/useScrolling";

type Props = {
  buttonsData: NavbarButtonProps[];
};

const MobileNav = ({ buttonsData }: Props) => {
  const { isScrolling } = useScrolling();
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
      {buttonsData.map((button, index) => {
        return button.link ? (
          <a key={index} href={button.link} onClick={button.refFunction}>
            <Show above="sm">
              <NavButton title={button.title} onClick={button.refFunction} delay={button.delay} />
            </Show>
            <Show below="sm">
              <NavIcon icon={button.icon} alt={button.alt} onClick={button.refFunction} delay={button.delay} />
            </Show>
          </a>
        ) : (
          <React.Fragment key={index}>
            <Show above="sm">
              <NavButton title={button.title} onClick={button.refFunction} delay={button.delay} />
            </Show>
            <Show below="sm">
              <NavIcon icon={button.icon} alt={button.alt} onClick={button.refFunction} delay={button.delay} />
            </Show>
          </React.Fragment>
        );
      })}
    </Flex>
  );
};

export default MobileNav;
