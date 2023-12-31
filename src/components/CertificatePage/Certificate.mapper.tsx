import { nanoid } from "nanoid";
import { certificates } from "../../sources/Certificates";
import { Flex, Image, Text } from "@chakra-ui/react";
import { ScaleCertificate } from "../../animations/ScaleAnimations";

const CertificateMapper = () => {
  return certificates?.map((cert) => {
    return (
      <Flex key={nanoid()} mb={4}>
        <Flex shadow={"sm"} rounded={"md"} p={4} mx={4} gap={2} direction={"column"} transition={"500ms"}>
          <Image
            m={"auto"}
            _active={{ animation: `${ScaleCertificate} 5s ease-in-out ` }}
            w={"300px"}
            minH={"200px"}
            maxH={"310px"}
            src={cert.image}
            alt={cert.tag}
          />
          <Text fontFamily={"Poppins"} fontWeight={400} fontSize={"14px"} color={"text"} letterSpacing={"2px"} textAlign={"center"}>
            {cert.tag}
          </Text>
        </Flex>
      </Flex>
    );
  });
};

export default CertificateMapper;
