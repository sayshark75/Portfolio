import { IconButton } from "@chakra-ui/react";
import { SocialBtnType } from "../../../resources/TYPES";
import { RefObject, useRef } from "react";
import { Tooltip } from "../../ui/tooltip";
import { MotionFlex } from "@/libs/motionComponents";
import { useInView } from "framer-motion";
import Link from "next/link";

const IconButtonComp = ({ link, tooltip, label, icon, delay }: SocialBtnType) => {
  return (
    <Link href={link} target={"_blank"} rel="noreferrer">
      <IconButtonHome link={link} icon={icon} label={label} tooltip={tooltip} delay={delay} />
    </Link>
  );
};

export default IconButtonComp;

const IconButtonHome = ({ label, icon, tooltip, delay }: SocialBtnType) => {
  const animRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(animRef as RefObject<Element>, { once: true });
  const IconComponent = icon;
  return (
    <Tooltip content={tooltip}>
      <MotionFlex
        initial={{ opacity: 0, y: "-80px" }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "-80px" }}
        transition={{ duration: 0.5, delay }}
        ref={animRef}
        mx={["1px", "2", "3", "5", "6"]}
        pos={"relative"}
        rounded={"full"}
        overflow={"hidden"}
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
        >
          <IconComponent />
        </IconButton>
      </MotionFlex>
    </Tooltip>
  );
};
