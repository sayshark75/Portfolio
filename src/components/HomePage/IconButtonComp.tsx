import { Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { SocialBtnType } from "../../TYPES";
import { fadeTop } from "../../animations/FadeAnimations";
import { RefObject, useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObs";

const IconButtonComp = ({ link, tooltip, label, icon, onClick, delay }: SocialBtnType) => {
  return link ? (
    <a href={link} target={"_blank"} rel="noreferrer">
      <IconButtonHome icon={icon} label={label} onClick={onClick} tooltip={tooltip} delay={delay} />
    </a>
  ) : (
    <IconButtonHome icon={icon} label={label} onClick={onClick} tooltip={tooltip} delay={delay} />
  );
};

export default IconButtonComp;

const IconButtonHome = ({ label, icon, onClick, tooltip, delay }: SocialBtnType) => {
  const animRef: RefObject<HTMLDivElement> = useRef(null);
  const isIntersecting = useIntersectionObserver(animRef);
  return (
    <Tooltip
      bg={"text"}
      color={"light"}
      fontFamily={"Poppins"}
      fontWeight={"600"}
      letterSpacing={"1.4px"}
      mt={"1"}
      transition={"500ms"}
      label={tooltip}
    >
      <Flex
        ref={animRef}
        mx={["1px", "2", "3", "5", "6"]}
        pos={"relative"}
        rounded={"full"}
        overflow={"hidden"}
        animation={isIntersecting ? `${fadeTop} 500ms ease ${delay} forwards` : "none"}
        shadow={"lg"}
        opacity={0}
      >
        <IconButton
          pos={"relative"}
          zIndex={2}
          rounded={"full"}
          size={["sm", "sm", "md", "md", "lg"]}
          color={"accent"}
          bgColor={"light"}
          transition={"700ms"}
          _hover={{
            color: "light",
            _after: {
              w: "100%",
              left: "0px",
            },
          }}
          _active={{ opacity: "0.5", transform: "translateY(5px)" }}
          fontSize={["16px", "20px"]}
          aria-label={label}
          onClick={onClick}
          icon={icon}
          _after={{
            content: '"."',
            w: "0px",
            minH: "100%",
            rounded: "full",
            color: "transparent",
            bgColor: "accent",
            transition: "500ms",
            pos: "absolute",
            zIndex: -1,
            top: "0px",
            right: "0px",
          }}
        />
      </Flex>
    </Tooltip>
  );
};
