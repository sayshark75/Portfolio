import { Image } from "@chakra-ui/react";

type Props = {
  icon: string;
  alt: string;
  onClick: () => void;
};

const NavIcon = ({ icon, alt, onClick }: Props) => {
  return <Image src={icon} alt={alt} onClick={onClick} />;
};

export default NavIcon;
