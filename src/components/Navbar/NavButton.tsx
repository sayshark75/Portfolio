import { Button } from "@chakra-ui/react";
import { NavButtonType } from "./DesktopNav";
import { MotionFlex } from "@/libs/motionComponents";

const NavButton = ({ title, refFunction, delay }: NavButtonType) => {
  return (
    <MotionFlex
      initial={{ opacity: 0, y: "-80px" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      pos={"relative"}
      w={"min-content"}
      overflow={"hidden"}
      rounded={"full"}
      shadow={"xl"}
    >
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
          transition: "500ms",
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
    </MotionFlex>
  );
};

export default NavButton;
