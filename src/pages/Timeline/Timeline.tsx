import { Flex } from "@chakra-ui/react";
import MdHeading from "../../components/Headings/MdHeading";
import "react-vertical-timeline-component/style.min.css";
import "react-vertical-timeline-component/style.min.css";
import TimelineCard from "../../components/TimelinePage/TimelineCard";
import { TimelineData } from "../../CONSTANTS";
import useCustomTheme from "../../hooks/useCustomTheme";

const Timeline = () => {
  const themeData = useCustomTheme();
  if (!themeData) {
    return null;
  }
  return (
    <Flex justify={"center"} alignItems={"center"} direction={"column"} w={"100%"} m={"auto"} gap={"4"} pt={"5"} mt={"5"} px={"5"}>
      <MdHeading title1="My" title2="Timeline" />
      {/* Timeline Card */}
      {TimelineData.map((timeline) => {
        return <TimelineCard {...timeline} />;
      })}
    </Flex>
  );
};

export default Timeline;
