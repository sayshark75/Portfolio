"use client";
import GitHubCalendar from "react-github-calendar";
import { useCustomTheme } from "@/context/ThemeProvider";
import { useTheme } from "next-themes";
import { Flex } from "@chakra-ui/react";

const GithubStats = () => {
  const { config } = useCustomTheme();
  const { theme } = useTheme();
  const _primary =
    // @ts-ignore
    theme === "dark" ? config.theme?.semanticTokens?.colors?.primary.value._dark : config.theme?.semanticTokens?.colors?.primary.value.base;
  const _accent =
    // @ts-ignore
    theme === "dark" ? config.theme?.semanticTokens?.colors?.accent.value._dark : config.theme?.semanticTokens?.colors?.accent.value.base;

  return (
      <Flex
      w={"100%"}
      color={"text"}
      p={{ base: 2, sm: 6 }}
      borderRadius={"md"}
      bgColor={"primary"}
      mx={{ base: 2, sm: 2, md: 2, lg: 4 }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <GitHubCalendar
        key={`github-calendar-initialization`}
        fontSize={16}
        theme={{
          light: [_primary, _accent],
          dark: [_primary, _accent],
        }}
        blockSize={15}
        blockMargin={5}
        hideTotalCount
        username="sayshark75"
      />
    </Flex>
  );
};

export default GithubStats;

{
  /* <Flex w={{ base: "280px", sm: "320px", md: "440px", lg: "560px" }} gap={5} mt={6} direction={"column"} justifyContent={"center"}>
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
</Flex>  */
}
