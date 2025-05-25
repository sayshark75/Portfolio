import { Flex, IconButton } from "@chakra-ui/react";
import { JSX } from "react";

type Props = {
  icon: JSX.Element;
  alt: string;
  onClick: () => void;
};

const NavIcon = ({ icon, alt, onClick }: Props) => {
  return (
    <Flex pos={"relative"}>
      <IconButton
        pos={"relative"}
        p={2}
        bg={"primaryLight"}
        border={"2px solid "}
        borderColor={"transparent"}
        rounded={"full"}
        color={"text"}
        aria-label={alt}
        onClick={onClick}
        shadow={"xl"}
        _hover={{
          bgColor: "transparent",
          color: "primary",
          _after: {
            minH: "100%",
          },
        }}
        _active={{ transform: "scale(0.8)" }}
        _after={{
          content: '"."',
          w: "100%",
          h: "0px",
          transition: "5000ms ease",
          rounded: "full",
          pos: "absolute",
          bottom: "0px",
          left: "0px",
          color: "transparent",
          bgColor: "accent",
          zIndex: -1,
        }}
      >
        {icon}
      </IconButton>
    </Flex>
  );
};

export default NavIcon;
