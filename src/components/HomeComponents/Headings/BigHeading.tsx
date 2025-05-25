import { Flex, Text } from "@chakra-ui/react";

const BigHeading = ({ title1, title2 }: { title1: string; title2: string }) => {
  return (
    <Flex direction={{ base: "column", sm: "row" }}>
      <Flex>
        <Text
          fontFamily={"Poppins"}
          fontWeight={600}
          fontSize={{ base: "34px", sm: "40px", md: "64px", lg: "86px", xl: "108px" }}
          color={"text"}
          textShadow={{ base: "none", md: "4px 4px 0px #4a4a4a" }}
          letterSpacing={"1.5px"}
        >
          {title1}&nbsp;
        </Text>
      </Flex>
      <Text
        fontFamily={"Poppins"}
        fontWeight={600}
        fontSize={{ base: "34px", sm: "40px", md: "64px", lg: "86px", xl: "108px" }}
        color={"accent"}
        letterSpacing={"1.5px"}
        textShadow={{ base: "none", md: "4px 4px 0px #fff" }}
      >
        {title2}
      </Text>
    </Flex>
  );
};

export default BigHeading;
