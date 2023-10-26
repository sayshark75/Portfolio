import { Image } from "@chakra-ui/react";
import { borderAnim, polishAnim } from "../../animations/NavbarAnimations";

type Props = {
  icon: string;
  alt: string;
  onClick: () => void;
};

const NavIcon = ({ icon, alt, onClick }: Props) => {
  return (
    <Image
      src={icon}
      p={2}
      border={"2px solid #006aff00"}
      rounded={"full"}
      animation={`${borderAnim} 2s ease-in-out`}
      alt={alt}
      onClick={onClick}
      shadow={"dark-lg"}
      _active={{ animation: `${polishAnim} 80ms ease-in-out` }}
    />
  );
};

export default NavIcon;
