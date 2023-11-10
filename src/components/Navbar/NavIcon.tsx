import { IconButton } from "@chakra-ui/react";
import { fadeBottom } from "../../animations/FadeAnimations";

type Props = {
  icon: JSX.Element;
  alt: string;
  onClick: () => void;
  delay: string;
};

const NavIcon = ({ icon, alt, onClick, delay }: Props) => {
  return (
    <IconButton
      icon={icon}
      p={2}
      bg={"#3a3a3a"}
      border={"2px solid #006aff00"}
      rounded={"full"}
      color={"#fff"}
      opacity={0}
      animation={`${fadeBottom} 1s ease-in ${delay} forwards`}
      aria-label={alt}
      onClick={onClick}
      shadow={"xl"}
      _hover={{}}
      _active={{ transform: "scale(0.8)" }}
    />
  );
};

export default NavIcon;
