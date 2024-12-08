import { MotionIconButton } from "@/libs/motionComponents";
import { Flex } from "@chakra-ui/react";

type Props = {
  icon: JSX.Element;
  alt: string;
  onClick: () => void;
  delay: number;
};

const NavIcon = ({ icon, alt, onClick, delay }: Props) => {
  return (
    <Flex pos={"relative"}>
      <MotionIconButton
        initial={{ opacity: 0, y: "-80px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
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
      </MotionIconButton>
    </Flex>
  );
};

export default NavIcon;
