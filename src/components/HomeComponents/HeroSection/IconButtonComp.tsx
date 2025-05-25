import { Flex, IconButton } from "@chakra-ui/react";
import { SocialBtnType } from "../../../resources/TYPES";
import { Tooltip } from "../../ui/tooltip";
import Link from "next/link";

const IconButtonComp = ({ link, tooltip, label, icon }: SocialBtnType) => {
  return (
    <Link href={link} target={"_blank"} rel="noreferrer">
      <IconButtonHome link={link} icon={icon} label={label} tooltip={tooltip} />
    </Link>
  );
};

export default IconButtonComp;

const IconButtonHome = ({ label, icon, tooltip }: SocialBtnType) => {
  const IconComponent = icon;
  return (
    <Tooltip content={tooltip}>
      <Flex mx={{ base: "1px", sm: 2, md: 3, lg: 5, xl: 6 }} pos={"relative"} rounded={"full"} overflow={"hidden"} shadow={"lg"}>
        <IconButton
          pos={"relative"}
          zIndex={2}
          rounded={"full"}
          size={{ base: "sm", md: "md", xl: "lg" }}
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
          fontSize={{ base: "16px", sm: "20px" }}
          aria-label={label}
          _after={{
            content: '"."',
            w: "0px",
            minH: "100%",
            rounded: "full",
            color: "transparent",
            bgColor: "accent",
            transition: "300ms",
            pos: "absolute",
            zIndex: -1,
            top: "0px",
            right: "0px",
          }}
        >
          <IconComponent />
        </IconButton>
      </Flex>
    </Tooltip>
  );
};
