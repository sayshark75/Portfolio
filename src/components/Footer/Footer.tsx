import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex transition={"300ms"} bgColor={"primaryLight"} justifyContent={"center"} p={1} alignItems={"center"} w={"100%"} pb={{ base: 14, md: 1 }}>
      <Text transition={"300ms"} fontWeight={"400"} color={"text"} fontFamily={"Poppins"} letterSpacing={"1.5px"} as={"b"} fontSize={"10px"}>
        © By Sayyed Sharuk - {new Date().getFullYear()}
      </Text>
    </Flex>
  );
};

export default Footer;
