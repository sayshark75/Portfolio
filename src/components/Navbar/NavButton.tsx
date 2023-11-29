import { Button } from "@chakra-ui/react";
import { fadeTop } from "../../animations/FadeAnimations";
import { NavButtonProps } from "../../TYPES";

const NavButton = ({ title, onClick, delay }: NavButtonProps) => {
  return (
    <Button
      onClick={onClick}
      bgColor={"primaryLight"}
      color={"text"}
      shadow={"xl"}
      border={"2px solid"}
      borderColor={"transparent"}
      opacity={0}
      animation={`${fadeTop} 1s ease-in ${delay} forwards`}
      rounded={"full"}
      h={"25px"}
      transition={"200ms"}
      fontSize={"12px"}
      fontWeight={"300"}
      letterSpacing={"1.4px"}
      fontFamily={"Poppins"}
      _hover={{
        backgroundColor: "transparent",
      }}
      _active={{
        transform: "translateY(4px)",
        backgroundColor: "transparent",
        color: "text",
        borderColor: "accent",
        boxShadow: "0px 0px 8px #ffffff77",
      }}
    >
      {title}
    </Button>
  );
};

export default NavButton;
