import { Text } from "@chakra-ui/react";

const DescAboutPage = () => {
  return (
    <Text
      color={"text"}
      letterSpacing={"1.5px"}
      fontWeight={"400"}
      fontFamily={"Poppins"}
      whiteSpace={"pre-wrap"}
      textAlign={"justify"}
      fontSize={{ base: "12px", xl: "14px" }}
    >
      Hello, I&apos;m Sayyed Sharuk — an AI-driven Full Stack Developer based in Ahmednagar, Maharashtra. I specialize in building high-performance,
      SEO-friendly web apps with Next.js, TypeScript, and Tailwind CSS. My strength lies in combining clean code with thoughtful UX and modern
      development practices. I stay current with emerging tech while delivering reliable, scalable solutions. Beyond work, I enjoy travel, food, and
      the calm rhythm of rural life.
    </Text>
  );
};

export default DescAboutPage;
