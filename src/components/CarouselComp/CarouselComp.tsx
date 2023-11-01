import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { certificates } from "../../sources/Certificates";
import { nanoid } from "nanoid";
import { ScaleCertificate } from "../../animations/ScaleAnimations";

const CarouselComp = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <Box w={"90%"}>
      <Slider {...settings}>
        {certificates?.map((cert) => {
          return (
            <Flex key={nanoid()} mb={4}>
              <Flex
                bgColor={"#3a3a3a"}
                shadow={"sm"}
                rounded={"md"}
                p={4}
                mx={4}
                gap={2}
                direction={"column"}
                transition={"500ms"}
                _hover={{ boxShadow: "xl", borderTop: "5px solid", borderTopColor: "#006aff" }}
              >
                <Image m={"auto"} _active={{ animation: `${ScaleCertificate} 2s ease-in-out 2 alternate` }} w={"300px"} maxHeight={"200px"} src={cert.image} alt={cert.tag} />
                <Text fontFamily={"Poppins"} fontWeight={400} fontSize={"14px"} color={"#fff"} letterSpacing={"2px"} textAlign={"center"}>
                  {cert.tag}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Slider>
    </Box>
  );
};

export default CarouselComp;
