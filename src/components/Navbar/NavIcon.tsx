import { Image } from "@chakra-ui/react";
import { fadeBottom } from "../../animations/FadeAnimations";

type Props = {
  icon: string;
  alt: string;
  onClick: () => void;
  delay: string;
};

const NavIcon = ({ icon, alt, onClick, delay }: Props) => {
  return (
    <Image
      src={icon}
      p={2}
      bg={"#3a3a3a"}
      border={"2px solid #006aff00"}
      rounded={"full"}
      opacity={0}
      animation={`${fadeBottom} 1s ease-in ${delay} forwards`}
      alt={alt}
      onClick={onClick}
      shadow={"xl"}
      _active={{ transform: "scale(0.8)" }}
    />
  );
};

export default NavIcon;
