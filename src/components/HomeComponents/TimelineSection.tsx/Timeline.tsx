"use client";
import { Box, Flex } from "@chakra-ui/react";
import MdHeading from "../Headings/MdHeading";
import TimelineCard from "./TimelineCard";
import { TimelineData } from "@/resources/TimelineData";

const Timeline = () => {
  return (
    <Box w={"100%"} bgColor={"white"} pt={5}>
      <Flex justify={"center"} alignItems={"center"} direction={"column"} w={"100%"} m={"auto"} gap={"4"} pt={"5"} px={"5"}>
        <MdHeading title1="My" title2="Timeline" />
        {/* Timeline Card */}
        <Flex w={"100%"} justify={"center"} align={"stretch"} gap={[1, 1, 5]} maxW={"1536px"} wrap={"wrap"} mx={"auto"}>
          {TimelineData.map((timeline, index) => {
            return <TimelineCard key={`timeline-card-key-${index}`} index={index} {...timeline} />;
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Timeline;
