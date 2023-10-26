import { Button, SlideFade } from "@chakra-ui/react";
import { borderAnim, polishAnim } from "../../animations/NavbarAnimations";

type Props = {
  title: string;
  onClick: () => void;
  x: string;
  y: string;
};

const NavButton = ({ title, onClick, x, y }: Props) => {
  return (
    <SlideFade in={true} offsetY={y} offsetX={x}>
      <Button
        onClick={onClick}
        bgColor={"#2a2a2a"}
        color={"#FFFFFF"}
        border={"1px solid #006aff00"}
        animation={`${borderAnim} 3s ease-in-out infinite`}
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
          animation: `${polishAnim} 80ms ease-in-out`,
          color: "#fff",
          borderColor: "#006aff",
          boxShadow: "0px 0px 8px #ffffff77",
        }}
      >
        {title}
      </Button>
    </SlideFade>
  );
};

export default NavButton;
