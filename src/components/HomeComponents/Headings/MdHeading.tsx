import { Highlight, Text } from "@chakra-ui/react";

const MdHeading = ({ title1, title2 }: { title1: string; title2: string }) => {
  return (
    <Text
      fontFamily={"Poppins"}
      fontSize={{ base: "36px", sm: "38px", md: "42px", lg: "48px", xl: "58px" }}
      fontWeight={{ base: "500", sm: "600" }}
      color={"accent"}
      my={"4"}
      rounded={"full"}
    >
      <Highlight query={title2} styles={{ color: "text" }}>
        {`${title1} ${title2}`}
      </Highlight>
    </Text>
  );
};

export default MdHeading;
