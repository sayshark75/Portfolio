import { Flex } from "@chakra-ui/react";
import MdHeading from "../../components/Headings/MdHeading";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineCard from "../../components/TimelinePage/TimelineCard";
import { TimelineData } from "../../CONSTANTS";
import { nanoid } from "nanoid";
import useCustomTheme from "../../hooks/useCustomTheme";

const Timeline = () => {
  const themeData = useCustomTheme();
  if (!themeData) {
    return null;
  }

  const { _primaryLight, _accent, _darker } = themeData;

  return (
    <Flex justify={"center"} alignItems={"center"} direction={"column"} w={"100%"} m={"auto"} gap={"4"} pt={"5"} mt={"5"}>
      <MdHeading title1="My" title2="Timeline" />
      {/* Timeline Card */}
      <VerticalTimeline>
        {TimelineData.map((timeline) => {
          return (
            <VerticalTimelineElement
              key={nanoid()}
              contentStyle={{ background: _primaryLight, color: _darker }}
              contentArrowStyle={{ borderRight: `7px solid ${_primaryLight}` }}
              date={timeline.date}
              iconStyle={{ background: _accent, color: "#fff" }}
              icon={timeline.icon}
            >
              <TimelineCard {...timeline} />
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Flex>
  );
};

export default Timeline;
