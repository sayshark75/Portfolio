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
      animation={isIntersecting ? `${fadeTop} 1s ease-in forwards 1s` : "none"}
      color={"light"}
      letterSpacing={"2px"}
      fontFamily={"Poppins"}
      textAlign={["justify"]}
      fontSize={["12px", "14px"]}
      mt={["60px", "60px", "0px"]}
    >
      Full-stack developer with a focus on building and deploying user-friendly, high-performance web applications. Expertise in both
      front-end and back-end development, with a strong understanding of design patterns and best practices. Ability to work independently
      and as part of a team to deliver high-quality products.
    </Text>
  );
};

export default DescAboutPage;
