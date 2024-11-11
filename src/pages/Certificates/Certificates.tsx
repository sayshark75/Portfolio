import { Flex } from "@chakra-ui/react";
import CarouselComp from "../../components/CarouselComp/CarouselComp";
import MdHeading from "../../components/Headings/MdHeading";
import CertificateMapper from "../../components/CertificatePage/Certificate.mapper";

const Certificates = () => {
  return (
    <Flex
      transition={"500ms"}
      direction={"column"}
      w={"100%"}
      minH={"60vh"}
      maxW={"1440px"}
      mx={"auto"}
      mt={"12"}
      h={"100%"}
      gap={"9"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <MdHeading title1="My" title2="Certificates" />
      <CarouselComp mapperFunction={CertificateMapper} slides={4} />
    </Flex>
  );
};

export default Certificates;
