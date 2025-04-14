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
      {
        "Hello, I'm Sayyed Sharuk — an AI-driven Full Stack Developer based in Ahmednagar, Maharashtra. I specialize in building high-performance, SEO-friendly web apps with Next.js, TypeScript, and Tailwind CSS. My strength lies in combining clean code with thoughtful UX and modern development practices. I stay current with emerging tech while delivering reliable, scalable solutions. Beyond work, I enjoy travel, food, and the calm rhythm of rural life."
      }
    </MotionText>
  );
};

export default DescAboutPage;
