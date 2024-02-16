import { Flex, IconButton } from "@chakra-ui/react";
import { fadeBottom } from "../../animations/FadeAnimations";

type Props = {
  icon: JSX.Element;
  alt: string;
  onClick: () => void;
  delay: string;
};

const NavIcon = ({ icon, alt, onClick, delay }: Props) => {
  return (
    <Flex pos={"relative"}>
      <IconButton
        pos={"relative"}
        icon={icon}
        p={2}
        bg={"primaryLight"}
        border={"2px solid "}
        borderColor={"transparent"}
        rounded={"full"}
        color={"text"}
        opacity={0}
        animation={`${fadeBottom} 500ms ease ${delay} forwards`}
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
      />
    </Flex>
  );
};

export default NavIcon;
