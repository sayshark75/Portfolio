"use client";
import GitHubCalendar from "react-github-calendar";
import { CustomThemeType } from "@/resources/TYPES";
import { useCustomTheme } from "@/context/ThemeProvider";
import { MotionFlex } from "@/libs/motionComponents";
import { useTheme } from "next-themes";

const GithubStats = () => {
  const { config } = useCustomTheme();
  const { theme } = useTheme();
  const _primary =
    // @ts-ignore
    theme === "dark" ? config.theme?.semanticTokens?.colors?.primary.value._dark : config.theme?.semanticTokens?.colors?.primary.value.base;
  const _accent =
    // @ts-ignore
    theme === "dark" ? config.theme?.semanticTokens?.colors?.accent.value._dark : config.theme?.semanticTokens?.colors?.accent.value.base;

  // @ts-ignore
  const _text = theme === "dark" ? config.theme?.semanticTokens?.colors?.text.value._dark : config.theme?.semanticTokens?.colors?.text.value.base;
  const _primaryLight =
    // @ts-ignore
    theme === "dark" ? config.theme?.semanticTokens?.colors?.primaryLight.value._dark : config.theme?.semanticTokens?.colors?.primaryLight.value.base;
  const _darker =
    // @ts-ignore
    theme === "dark" ? config.theme?.semanticTokens?.colors?.darker.value._dark : config.theme?.semanticTokens?.colors?.darker.value.base;
  const __primary = _primary.split("#")[1];
  const __accent = _accent.split("#")[1];
  const githubTheme: CustomThemeType = {
    customTheme: {
      light: [_primary, _accent],
    },
    _text,
    _accent,
    __primary,
    __accent,
    _primaryLight,
    _darker,
  };

  return (
    <MotionFlex
      initial={{ opacity: 0, y: "-80px" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      w={"100%"}
      color={"text"}
      p={["2", "6"]}
      borderRadius={"md"}
      bgColor={"primary"}
      mx={[2, 2, 2, 4]}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <GitHubCalendar fontSize={16} theme={githubTheme.customTheme} blockSize={15} blockMargin={5} hideTotalCount username="sayshark75" />
    </MotionFlex>
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
