"use client";
import { Flex, Highlight } from "@chakra-ui/react";
import { RefObject, useRef } from "react";
import { useInView } from "framer-motion";
import { MotionText } from "@/libs/motionComponents";

const MdHeading = ({ title1, title2 }: { title1: string; title2: string }) => {
  const animRef: RefObject<HTMLParagraphElement> = useRef(null);
  const isIntersecting = useInView(animRef, { once: true });
  return (
    <Flex>
      <MotionText
        initial={{ opacity: 0, y: "-80px" }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: "-80px" }}
        transition={{ duration: 0.5 }}
        fontFamily={"Poppins"}
        fontSize={["36px", "38px", "42px", "48px", "58px"]}
        fontWeight={["500", "600"]}
        color={"accent"}
        my={"4"}
        ref={animRef}
        cursor={"pointer"}
        rounded={"full"}
        opacity={0}
        whileTap={{ scale: 0.9, y: "-20px" }}
      >
        <Highlight query={title2} styles={{ color: "text" }}>
          {`${title1} ${title2}`}
        </Highlight>
      </MotionText>
    </Flex>
  );
};

export default MdHeading;
