import { Highlight, Text } from "@chakra-ui/react";

const SmHeading = ({ title1, title2 }: { title1: string; title2: string }) => {
  return (
    <Text
      fontFamily={"Poppins"}
      fontSize={{ base: "14px", sm: "14px", md: "16px", lg: "16px", xl: "18px" }}
      fontWeight={{ base: "500", sm: "400", md: "500" }}
      color={"accent"}
      cursor={"pointer"}
      rounded={"full"}
    >
      <Highlight query={title2} styles={{ color: "text" }}>
        {`${title1} ${title2}`}
      </Highlight>
    </Text>
  );
};

export default SmHeading;
