import { Button, Flex } from "@chakra-ui/react";
import { fadeTop } from "../../animations/FadeAnimations";
import { NavButtonProps } from "../../TYPES";

const NavButton = ({ title, onClick, delay }: NavButtonProps) => {
  return (
    <Flex pos={"relative"} w={"min-content"}>
      <Button
        onClick={onClick}
        bgColor={"primaryLight"}
        color={"text"}
        shadow={"xl"}
        opacity={0}
        animation={`${fadeTop} 500ms ease ${delay} forwards`}
        rounded={"full"}
        h={"25px"}
        transition={"200ms"}
        fontSize={"12px"}
        fontWeight={"300"}
        letterSpacing={"1.4px"}
        fontFamily={"Poppins"}
        _hover={{
          bgColor: "transparent",
          color: "primary",
          _after: {
            w: "100%",
            left: "0px",
          },
        }}
        _after={{
          content: '"."',
          w: "0px",
          transition: "300ms",
          minH: "100%",
          rounded: "full",
          color: "transparent",
          bgColor: "accent",
          pos: "absolute",
          top: "0px",
          right: "0px",
          zIndex: -1,
        }}
      >
        {title}
      </Button>
    </Flex>
  );
};

export default NavButton;
