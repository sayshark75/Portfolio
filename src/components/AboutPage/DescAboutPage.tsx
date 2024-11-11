import { Text } from "@chakra-ui/react";
import { fadeTop } from "../../animations/FadeAnimations";
import { RefObject, useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObs";

const DescAboutPage = () => {
  const animRef: RefObject<HTMLParagraphElement> = useRef(null);
  const isIntersecting = useIntersectionObserver(animRef);
  return (
    <Text
      transition={"400ms"}
      opacity={0}
      ref={animRef}
      animation={isIntersecting ? `${fadeTop} 500ms ease forwards 500ms` : "none"}
      color={"text"}
      letterSpacing={"2px"}
      fontWeight={"400"}
      fontFamily={"Poppins"}
      whiteSpace={"pre-wrap"}
      textAlign={["justify"]}
      fontSize={["12px", "12px", "12px", "12px", "14px"]}
    >
      {`Hello, I'm Sayyed Sharuk—a dedicated Full Stack Developer based in Ahmednagar, Maharashtra. I specialize in building high-performance web applications with a versatile skill set. Beyond coding, I enjoy travel, culinary experiences, and the tranquility of rural landscapes. I'm always eager to collaborate on innovative projects.`}
    </Text>
  );
};

export default DescAboutPage;
