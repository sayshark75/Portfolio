import { Flex } from "@chakra-ui/react";
import CarouselComp from "../../components/CarouselComp/CarouselComp";
import MdHeading from "../../components/Headings/MdHeading";

const Certificates = () => {
  return (
    <Flex transition={"500ms"} direction={"column"} w={"100%"} minH={"60vh"} h={"100%"} gap={"9"} justifyContent={"center"} alignItems={"center"}>
      <MdHeading title1="My" title2="Certificates" />
      <CarouselComp />
    </Flex>
  );
};

export default Certificates;