import { Flex, Image } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import { fadeTop } from "../../animations/FadeAnimations";
import useCustomTheme from "../../hooks/useCustomTheme";

const GithubStats = () => {
  const themeData = useCustomTheme();

  if (!themeData) {
    return null;
  }

  const { customTheme, __primary, __accent } = themeData;

  return (
    <>
      <Flex
        color={"text"}
        p={["2", "6"]}
        borderRadius={"md"}
        _hover={{ shadow: "2xl" }}
        transition={"700ms"}
        animation={`${fadeTop} 1s ease-in`}
        bgColor={"primary"}
        mx={[2, 2, 2, 4]}
      >
        <GitHubCalendar fontSize={16} theme={customTheme} blockSize={15} blockMargin={5} hideTotalCount username="sayshark75" />
      </Flex>
      <Flex w={{ base: "280px", sm: "320px", md: "440px", lg: "560px" }} gap={5} mt={6} direction={"column"} justifyContent={"center"}>
        <Image
          transition={"750ms"}
          _hover={{ shadow: "2xl" }}
          borderRadius={"12"}
          src={`https://github-readme-stats-git-master-sayshark75.vercel.app/api?username=sayshark75&show_icons=true&locale=en&custom_title=My Statistics&bg_color=${__primary}&hide_border=true&title_color=${__accent}&text_color=${__accent}&icon_color=${__accent}`}
          alt={"Github Card"}
        />
        <Image
          _hover={{ shadow: "2xl" }}
          transition={"750ms"}
          borderRadius={"12"}
          src={`https://github-readme-stats-git-master-sayshark75.vercel.app/api/top-langs?username=sayshark75&show_icons=true&locale=en&layout=compact&bg_color=${__primary}&hide_border=true&title_color=${__accent}&text_color=${__accent}`}
          alt={"Github Language"}
        />
        <Image
          _hover={{ shadow: "2xl" }}
          transition={"750ms"}
          borderRadius={"12"}
          src={`https://streak-stats.demolab.com?user=sayshark75&theme=transparent&hide_border=true&background=${__primary}&currStreakLabel=${__accent}&currStreakNum=${__accent}&sideNums=${__accent}&dates=${__accent}&stroke=${__accent}&sideLabels=${__accent}&icon_color=${__accent}&ring=${__accent}&fire=${__accent}`}
        />
      </Flex>
    </>
  );
};

export default GithubStats;
