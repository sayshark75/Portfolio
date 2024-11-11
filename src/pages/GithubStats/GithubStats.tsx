import { Flex } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import { fadeTop } from "../../animations/FadeAnimations";
import useCustomTheme from "../../hooks/useCustomTheme";
import ReactGA from "react-ga4";

const GithubStats = () => {
  const themeData = useCustomTheme();

  if (!themeData) {
    return null;
  }

  const { customTheme } = themeData;

  ReactGA.event({
    category: "pagevisit",
    action: `Viewed Github Stats Page`,
  });

  return (
    <>
      <Flex
        w={"100%"}
        color={"text"}
        p={["2", "6"]}
        borderRadius={"md"}
        transition={"400ms"}
        animation={`${fadeTop} 300mss ease`}
        bgColor={"primary"}
        mx={[2, 2, 2, 4]}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <GitHubCalendar fontSize={16} theme={customTheme} blockSize={15} blockMargin={5} hideTotalCount username="sayshark75" />
      </Flex>
      {/* <Flex w={{ base: "280px", sm: "320px", md: "440px", lg: "560px" }} gap={5} mt={6} direction={"column"} justifyContent={"center"}>
        <Image
          transition={"750ms"}
          borderRadius={"12"}
          src={`https://github-readme-stats-git-master-sayshark75.vercel.app/api?username=sayshark75&show_icons=true&locale=en&custom_title=My Statistics&bg_color=${__primary}&hide_border=true&title_color=${__accent}&text_color=${__accent}&icon_color=${__accent}`}
          alt={"Github Card"}
        />
        <Image
          transition={"750ms"}
          borderRadius={"12"}
          src={`https://github-readme-stats-git-master-sayshark75.vercel.app/api/top-langs?username=sayshark75&show_icons=true&locale=en&layout=compact&bg_color=${__primary}&hide_border=true&title_color=${__accent}&text_color=${__accent}`}
          alt={"Github Language"}
        />
        <Image
          transition={"750ms"}
          borderRadius={"12"}
          src={`https://streak-stats.demolab.com?user=sayshark75&theme=transparent&hide_border=true&background=${__primary}&currStreakLabel=${__accent}&currStreakNum=${__accent}&sideNums=${__accent}&dates=${__accent}&stroke=${__accent}&sideLabels=${__accent}&icon_color=${__accent}&ring=${__accent}&fire=${__accent}`}
        />
      </Flex> */}
    </>
  );
};

export default GithubStats;
