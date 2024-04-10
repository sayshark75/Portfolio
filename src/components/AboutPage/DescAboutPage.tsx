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
      textAlign={["justify"]}
      fontSize={["12px", "14px"]}
      mt={["60px", "60px", "0px"]}
    >
      Hello, I'm Sayyed Sharuk, a professional Full Stack Developer based in Ahmednagar, Maharashtra. I specialize in web app development,
      leveraging a diverse skill set to create robust solutions. Outside of my professional endeavors, I enjoy immersing myself in travel,
      culinary adventures, and the peaceful ambiance of rural landscapes. I'm excited to collaborate and contribute to innovative projects.
    </Text>
  );
};

export default DescAboutPage;
