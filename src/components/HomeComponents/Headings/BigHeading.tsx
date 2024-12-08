import { MotionText } from "@/libs/motionComponents";
import { Flex } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { RefObject, useRef } from "react";

const BigHeading = ({ title1, title2 }: { title1: string; title2: string }) => {
  const animRef: RefObject<HTMLDivElement> = useRef(null);
  const isInView = useInView(animRef, { once: true });
  return (
    <Flex ref={animRef} direction={{ base: "column", sm: "row" }}>
      <Flex pos={"relative"}>
        <MotionText
          initial={{ opacity: 0, x: "-80px" }}
          pos={"relative"}
          zIndex={2}
          fontFamily={"Poppins"}
          cursor={"pointer"}
          fontWeight={600}
          transition={{ duration: 0.5 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: "-80px" }}
          opacity={0}
          fontSize={["34px", "40px", "64px", "86px", "108px"]}
          color={"text"}
          textShadow={["none", "none", "4px 4px 0px #4a4a4a"]}
          letterSpacing={"2px"}
          _hover={{
            color: "primary",
            _after: {
              w: "100%",
              bg: "accent",
              left: "0px",
              p: ["3px", "8px"],
              transform: ["skew(2deg,2deg) translateX(-10px)", "skew(4deg,4deg) translateX(-20px)"],
            },
          }}
          _after={{
            w: "0px",
            p: "0px",
            minH: "100%",
            transition: "500ms",
            transform: "none",
            color: "transparent",
            textShadow: "none",
            content: '"."',
            pos: "absolute",
            top: "0px",
            right: "0px",
            zIndex: -1,
          }}
        >
          {title1}&nbsp;
        </MotionText>
      </Flex>
      <MotionText
        initial={{ opacity: 0, x: "80px" }}
        fontFamily={"Poppins"}
        cursor={"pointer"}
        fontWeight={600}
        opacity={0}
        transition={{ duration: 0.5, delay: 0.3 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: "80px" }}
        fontSize={["34px", "40px", "64px", "86px", "108px"]}
        color={"accent"}
        letterSpacing={"2px"}
        textShadow={["none", "none", "4px 4px 0px #fff"]}
      >
        {title2}
      </MotionText>
    </Flex>
  );
};

export default BigHeading;
