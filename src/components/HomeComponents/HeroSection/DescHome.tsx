import { Text } from "@chakra-ui/react";

const DescHome = () => {
  return (
    <Text
      color={"text"}
      fontWeight={400}
      fontFamily={"Poppins"}
      textAlign={"justify"}
      fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "18px" }}
      m={{ base: 4, md: 8 }}
      letterSpacing={"1.5px"}
    >
      Full Stack Developer with 4 years of experience, specializing in modern, frontend-focused web solutions. Proficient in Next.js, TypeScript, and
      Tailwind CSS, with a strong foundation in scalable architecture. Skilled in backend development using Node.js, Prisma, and REST/GraphQL APIs.
      Committed to delivering high-performance, SEO-optimized applications aligned with business goals. Driven by continuous learning, collaboration,
      and building impactful digital products.
    </Text>
  );
};

export default DescHome;
