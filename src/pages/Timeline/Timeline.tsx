import { Flex, useColorModeValue, useTheme } from "@chakra-ui/react";
import MdHeading from "../../components/Headings/MdHeading";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineCard from "../../components/TimelinePage/TimelineCard";
import { TimelineData } from "../../CONSTANTS";
import { nanoid } from "nanoid";

const Timeline = () => {
  const theme = useTheme();
  if (!theme.semanticTokens) {
    return null;
  }
  const { primaryLight, accent } = theme?.semanticTokens?.colors;
  const _primaryLight = useColorModeValue(primaryLight.default, primaryLight._dark);
  const _accent = useColorModeValue(accent.default, accent._dark);

  return (
    <Flex justify={"center"} alignItems={"center"} direction={"column"} w={"100%"} m={"auto"} gap={"4"} pt={"5"} mt={"5"}>
      <MdHeading title1="My" title2="Timeline" />
      {/* Timeline Card */}
      <VerticalTimeline>
        {TimelineData.map((timeline) => {
          return (
            <VerticalTimelineElement
              key={nanoid()}
              contentStyle={{ background: _primaryLight, color: "#fff" }}
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
