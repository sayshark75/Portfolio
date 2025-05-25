import { Flex, Highlight, Text } from "@chakra-ui/react";

const SubHeading = ({ title1, title2 }: { title1: string; title2: string }) => {
  return (
    <Flex pos={"relative"} zIndex={2}>
      <Text
        fontFamily={"Poppins"}
        fontSize={{ base: "18px", sm: "18px", md: "22px", lg: "22px", xl: "24px" }}
        fontWeight={{ base: "500", sm: "400", md: "500" }}
        color={"accent"}
        cursor={"pointer"}
        rounded={"full"}
      >
        <Highlight query={title2} styles={{ color: "text" }}>
          {`${title1} ${title2}`}
        </Highlight>
      </Text>
    </Flex>
  );
};

export default SubHeading;
