import { Button } from "@chakra-ui/react";
import { fadeTop } from "../../animations/FadeAnimations";

export type NavButtonProps = {
  title: string;
  onClick: () => void;
  delay: string;
};

const NavButton = ({ title, onClick, delay }: NavButtonProps) => {
  return (
    <Button
      onClick={onClick}
      bgColor={"#3a3a3a"}
      color={"#FFFFFF"}
      shadow={"xl"}
      border={"2px solid #006aff00"}
      opacity={0}
      animation={`${fadeTop} 1s ease-in ${delay} forwards`}
      rounded={"full"}
      h={"25px"}
      transition={"200ms"}
      fontSize={"12px"}
      fontFamily={"Montserrat"}
      _hover={{
        backgroundColor: "transparent",
      }}
      _active={{
        transform: "translateY(4px)",
        backgroundColor: "transparent",
        color: "#fff",
        borderColor: "#006aff",
        boxShadow: "0px 0px 8px #ffffff77",
      }}
    >
      {title}
    </Button>
  );
};

export default NavButton;
