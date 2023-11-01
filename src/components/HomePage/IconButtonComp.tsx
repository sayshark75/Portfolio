import { IconButton, Tooltip } from "@chakra-ui/react";
import { borderAnim, polishAnim } from "../../animations/NavbarAnimations";
import { SocialBtnType } from "../../TYPES";
import { fadeTop } from "../../animations/FadeAnimations";

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
  return (
    <Tooltip bg={"#FFF"} color={"#000"} mt={"4"} transition={"500ms"} label={tooltip}>
      <IconButton
        rounded={"full"}
        size={"sm"}
        opacity={0}
        mx={["1px", "2", "3", "5", "6"]}
        color={"#fff"}
        bgColor={"#4a4a4a"}
        animation={`${fadeTop} 1s ease-in-out ${delay} forwards`}
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
