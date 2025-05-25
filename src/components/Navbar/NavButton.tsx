import { Button, Flex } from "@chakra-ui/react";
import { NavButtonType } from "./DesktopNav";

const NavButton = ({ title, refFunction }: NavButtonType) => {
  return (
    <Flex pos={"relative"} w={"min-content"} overflow={"hidden"} rounded={"full"} shadow={"xl"}>
      <Button
        onClick={refFunction}
        bgColor={"primaryLight"}
        color={"text"}
        rounded={"full"}
        h={"25px"}
        transition={"200ms"}
        fontSize={"12px"}
        fontWeight={"300"}
        letterSpacing={"1.4px"}
        fontFamily={"Poppins"}
        _hover={{
          bgColor: "transparent",
          color: "#fff",
          _after: {
            w: "100%",
            left: "0px",
          },
        }}
        _after={{
          content: '"."',
          w: "0px",
          transition: "300ms",
          minH: "100%",
          rounded: "full",
          color: "transparent",
          bgColor: "accent",
          pos: "absolute",
          top: "0px",
          right: "0px",
          zIndex: -1,
        }}
      >
        {title}
      </Button>
    </Flex>
  );
};

export default NavButton;
