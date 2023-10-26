import { Button } from "@chakra-ui/react";

type Props = {
  title: string;
  onClick: () => void;
};

const NavButton = ({ title, onClick }: Props) => {
  return (
    <Button
      onClick={onClick}
      bgColor={"#2a2a2a"}
      color={"#FFFFFF"}
      border={"2px solid #006aff"}
      rounded={"full"}
      h={"25px"}
      transition={"200ms"}
      fontSize={"12px"}
      fontFamily={"Montserrat"}
      _hover={{
        backgroundColor: "inherit",
        color: "inherit",
      }}
      _active={{
        backgroundColor: "#000",
        color: "#fff",
        borderColor: "#006aff",
        boxShadow: "0px 0px 4px #ffffff77",
      }}
    >
      {title}
    </Button>
  );
};

export default NavButton;
