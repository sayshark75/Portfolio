import { RefObject, useRef } from "react";
import { useInView } from "framer-motion";
import { MotionText } from "@/libs/motionComponents";

const DescAboutPage = () => {
  const animRef = useRef<HTMLParagraphElement>(null);
  const isIntersecting = useInView(animRef as RefObject<Element>, { once: true });
  return (
    <MotionText
      initial={{ opacity: 0, y: "-80px" }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: "-80px" }}
      transition={{ duration: 0.5 }}
      opacity={0}
      ref={animRef}
      color={"text"}
      letterSpacing={"1.5px"}
      fontWeight={"400"}
      fontFamily={"Poppins"}
      whiteSpace={"pre-wrap"}
      textAlign={["justify"]}
      fontSize={{ base: "12px", xl: "14px" }}
    >
      {`Hello, I'm Sayyed Sharuk—a dedicated AI driven Frontend Developer based in Ahmednagar, Maharashtra. I specialize in building high-performance, SEO rich web applications with a versatile skill set. Beyond coding, I enjoy travel, culinary experiences, and the tranquility of rural landscapes. I'm always eager to contribute on innovative projects.`}
    </MotionText>
  );
};

export default DescAboutPage;
