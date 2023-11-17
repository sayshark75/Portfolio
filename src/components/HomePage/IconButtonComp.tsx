import { IconButton, Tooltip } from "@chakra-ui/react";
import { polishAnim } from "../../animations/NavbarAnimations";
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
  const animRef: RefObject<HTMLButtonElement> = useRef(null);
  const isIntersecting = useIntersectionObserver(animRef);
  return (
    <Tooltip bg={"#FFF"} color={"#000"} mt={"4"} transition={"500ms"} label={tooltip}>
      <IconButton
        ref={animRef}
        rounded={"full"}
        size={"sm"}
        opacity={0}
        mx={["1px", "2", "3", "5", "6"]}
        color={"#fff"}
        bgColor={"#4a4a4a"}
        animation={isIntersecting ? `${fadeTop} 1s ease-in-out ${delay} forwards` : "none"}
        shadow={"dark-lg"}
        transition={"700ms"}
        _hover={{ bgColor: "black", color: "white" }}
        border={"2px solid #00000000"}
        _active={{ animation: `${polishAnim} 1s ease-in-out` }}
        fontSize={["16px", "20px"]}
        aria-label={label}
        onClick={onClick}
        icon={icon}
      />
    </Tooltip>
  );
};
