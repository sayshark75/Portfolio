import { IconButton, Tooltip } from "@chakra-ui/react";
import { borderAnim, polishAnim } from "../../animations/NavbarAnimations";
import { SocialBtnType } from "../../TYPES";

const IconButtonComp = ({ link, tooltip, label, icon, onClick }: SocialBtnType) => {
  return link ? (
    <Tooltip bg={"#FFF"} color={"#000"} mt={"4"} transition={"500ms"} label={tooltip}>
      <a href={link} target={"_blank"} rel="noreferrer">
        <IconButtonHome icon={icon} label={label} onClick={onClick} />
      </a>
    </Tooltip>
  ) : (
    <Tooltip bg={"#FFF"} color={"#000"} mt={"4"} transition={"500ms"} label={tooltip}>
      <IconButtonHome icon={icon} label={label} onClick={onClick} />
    </Tooltip>
  );
};

export default IconButtonComp;

const IconButtonHome = ({ label, icon, onClick }: SocialBtnType) => {
  return (
    <IconButton
      rounded={"full"}
      size={"sm"}
      mx={["1px", "2", "3", "5", "6"]}
      color={"#fff"}
      bgColor={"#4a4a4a"}
      animation={`${borderAnim} 1s ease-in-out`}
      shadow={"dark-lg"}
      transition={"700ms"}
      _hover={{ bgColor: "iconBtnBgHover", color: "iconBtnHover", animation: `${borderAnim} 1s ease-in-out` }}
      border={"2px solid #00000000"}
      _active={{ animation: `${polishAnim} 1s ease-in-out` }}
      fontSize={["16px", "20px"]}
      aria-label={label}
      onClick={onClick}
      icon={icon}
    />
  );
};
