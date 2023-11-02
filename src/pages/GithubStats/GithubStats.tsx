import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

const GithubStats = () => {
  const bgCardColor = useColorModeValue("FFFFFFFF", "333333FF");
  const textCardColor = useColorModeValue("000000FF", "DDDDDDFF");
  // const calColors = {
  //   light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
  //   dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
  // };
  return (
    <>
      <Flex
        color={"textPrimary"}
        p={"6"}
        borderRadius={"8"}
        _hover={{ boxShadow: "xl", borderTop: "5px solid", borderTopColor: "heartColor" }}
        transition={"700ms"}
        bgColor={"cardBg"}
      >
        <GitHubCalendar fontSize={16} blockSize={15} blockMargin={5} hideTotalCount username="sayshark75" />
      </Flex>
      <Text align={"center"}>
        <Flex w={{ base: "280px", sm: "320px", md: "440px", lg: "560px" }} gap={5} mt={6} direction={"column"} justifyContent={"center"}>
          <Image
            boxShadow={"lg"}
            transition={"750ms"}
            borderRadius={"12"}
            src={`https://github-readme-stats-git-master-sayshark75.vercel.app/api?username=sayshark75&show_icons=true&locale=en&custom_title=My Statistics&bg_color=${bgCardColor}&hide_border=true&title_color=${textCardColor}&text_color=${textCardColor}`}
            alt={"Github Card"}
          />
          <Image
            boxShadow={"lg"}
            transition={"750ms"}
            borderRadius={"12"}
            src={`https://github-readme-stats-git-master-sayshark75.vercel.app/api/top-langs?username=sayshark75&show_icons=true&locale=en&layout=compact&bg_color=${bgCardColor}&hide_border=true&title_color=${textCardColor}&text_color=${textCardColor}`}
            alt={"Github Language"}
          />
          <Image
            boxShadow={"lg"}
            transition={"750ms"}
            borderRadius={"12"}
            src={`https://streak-stats.demolab.com?user=sayshark75&hide_border=true&background=${bgCardColor}&currStreakLabel=${textCardColor}&currStreakNum=${textCardColor}&sideNums=${textCardColor}&dates=${textCardColor}&stroke=${textCardColor}&sideLabels=${textCardColor}`}
          />
        </Flex>
      </Text>
    </>
  );
};

export default GithubStats;
