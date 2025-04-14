import { RefObject, useRef } from "react";
import { useInView } from "framer-motion";
import { MotionText } from "@/libs/motionComponents";

const DescHome = () => {
  const animRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(animRef as RefObject<Element>, { once: true });
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
      m={[4, 8]}
      letterSpacing={"1.5px"}
      opacity={0}
    >
      Full Stack Developer with 4 years of experience, specializing in modern, frontend-focused web solutions. Proficient in Next.js, TypeScript, and
      Tailwind CSS, with a strong foundation in scalable architecture. Skilled in backend development using Node.js, Prisma, and REST/GraphQL APIs.
      Committed to delivering high-performance, SEO-optimized applications aligned with business goals. Driven by continuous learning, collaboration,
      and building impactful digital products.
    </MotionText>
  );
};

export default DescHome;
