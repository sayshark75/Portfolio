import { Flex, Grid, Text } from "@chakra-ui/react";
import { ContributionData } from "@/resources/ContributionData";

const ContributionList = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(2, minmax(100px, 1fr))", lg: "repeat(4, minmax(120px, 1fr))", xl: "repeat(4, minmax(200px, 1fr))" }}
      w={"100%"}
      gap={4}
      mt={4}
    >
      {ContributionData.map((info, index) => {
        return (
          <Flex
            direction={"column"}
            justify={"flex-start"}
            align={"center"}
            gap={1}
            key={`contribution-key-${index}`}
            rounded={"md"}
            px={4}
            py={3}
            fontFamily={"Poppins"}
            fontSize={"11px"}
            fontWeight={"400"}
            color={"text"}
            mt={1}
            w={"100%"}
            boxShadow={"0px 0px 8px #00000012"}
            bgColor={"light"}
            _hover={{}}
          >
            <Text fontSize={"28px"}>{info.icon}</Text>
            <Text fontSize={"24px"} textAlign={"center"} fontWeight={"600"}>
              {info.value}
            </Text>
            <Text textAlign={"center"}>{info.title}</Text>
          </Flex>
        );
      })}
    </Grid>
  );
};

export default ContributionList;
