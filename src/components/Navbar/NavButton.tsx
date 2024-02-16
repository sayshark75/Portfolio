import { Button, Flex } from "@chakra-ui/react";
import { fadeTop } from "../../animations/FadeAnimations";
import { NavButtonProps } from "../../TYPES";

const NavButton = ({ title, onClick, delay }: NavButtonProps) => {
  return (
    <Flex
      pos={"relative"}
      w={"min-content"}
      animation={`${fadeTop} 500ms ease ${delay} forwards`}
      overflow={"hidden"}
      opacity={0}
      rounded={"full"}
      shadow={"xl"}
    >
      <Button
        onClick={onClick}
        bgColor={"primaryLight"}
        color={"text"}
        rounded={"full"}
        h={"25px"}
        transition={"200ms"}
        fontSize={"12px"}
        fontWeight={"300"}
        letterSpacing={"1.4px"}
        fontFamily={"Poppins"}
        _hover={{
          bgColor: "transparent",
          color: "#fff",
          _after: {
            w: "100%",
            left: "0px",
          },
        }}
        _after={{
          content: '"."',
          w: "0px",
          transition: "500ms",
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
