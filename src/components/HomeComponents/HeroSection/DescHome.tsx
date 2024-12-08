import { RefObject, useRef } from "react";
import { useInView } from "framer-motion";
import { MotionText } from "@/libs/motionComponents";

const DescHome = () => {
  const animRef: RefObject<HTMLDivElement> = useRef(null);
  const isInView = useInView(animRef);
  return (
    <MotionText
      initial={{ opacity: 0, y: "-80px" }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "-80px" }}
      as={"b"}
      ref={animRef}
      transition={{ duration: 0.5 }}
      color={"text"}
      fontWeight={400}
      fontFamily={"Poppins"}
      textAlign={"justify"}
      fontSize={["12px", "14px", "16px", "18px"]}
      m={["4", "8"]}
      letterSpacing={"2px"}
      opacity={0}
    >
      A Full Stack Developer who enjoys solving problems and building quality projects. With a diverse set of skills and technologies, Can develop
      robust and efficient products. Keep up with the latest advancements in the field, and work well with teams to deliver the best possible results.
    </MotionText>
  );
};

export default DescHome;
