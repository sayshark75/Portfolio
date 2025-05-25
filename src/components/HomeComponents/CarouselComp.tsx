"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@chakra-ui/react";
import { JSX } from "react";

const CarouselComp = ({ mapperFunction, slides }: { mapperFunction: () => JSX.Element[]; slides: number }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: slides,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    <Box w={"90%"} pos={"relative"} zIndex={2}>
      <Slider {...settings}>{mapperFunction()}</Slider>
    </Box>
  );
};

export default CarouselComp;
