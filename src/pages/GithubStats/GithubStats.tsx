import { Flex, Image } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import { fadeTop } from "../../animations/FadeAnimations";

const GithubStats = () => {
  // Resolve type in Future
  const customTheme: any = {
    light: ["#2a2a2a", "006aff"],
  };
  return (
    <>
      <Flex
        color={"#fff"}
        p={["2", "6"]}
        borderRadius={"md"}
        _hover={{ shadow: "2xl" }}
        transition={"700ms"}
        animation={`${fadeTop} 1s ease-in`}
        bgColor={"#2a2a2a"}
        mx={[2, 2, 2, 4]}
      >
        <GitHubCalendar
          fontSize={16}
          theme={customTheme}
          blockSize={15}
          blockMargin={5}
          hideTotalCount
          username="sayshark75"
        />
      </Flex>
      <Flex
        w={{ base: "280px", sm: "320px", md: "440px", lg: "560px" }}
        gap={5}
        mt={6}
        direction={"column"}
        justifyContent={"center"}
      >
        <Image
          transition={"750ms"}
          _hover={{ shadow: "2xl" }}
          borderRadius={"12"}
          src={`https://github-readme-stats-git-master-sayshark75.vercel.app/api?username=sayshark75&show_icons=true&locale=en&custom_title=My Statistics&bg_color=2a2a2a&hide_border=true&title_color=006aff&text_color=006aff`}
          alt={"Github Card"}
        />
        <Image
          _hover={{ shadow: "2xl" }}
          transition={"750ms"}
          borderRadius={"12"}
          src={`https://github-readme-stats-git-master-sayshark75.vercel.app/api/top-langs?username=sayshark75&show_icons=true&locale=en&layout=compact&bg_color=2a2a2a&hide_border=true&title_color=006aff&text_color=006aff`}
          alt={"Github Language"}
        />
        <Image
          _hover={{ shadow: "2xl" }}
          transition={"750ms"}
          borderRadius={"12"}
          src={`https://streak-stats.demolab.com?user=sayshark75&theme=transparent&hide_border=true&background=2a2a2a&currStreakLabel=006aff&currStreakNum=006aff&sideNums=006aff&dates=006aff&stroke=006aff&sideLabels=006aff&icon_color=006aff`}
        />
      </Flex>
    </>
  );
};

export default GithubStats;
