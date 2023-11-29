import { Flex, IconButton, useColorMode, useColorModeValue, useTheme } from "@chakra-ui/react";
import changeThemeMeta from "../../helpers/MobileChromeTheme";
import { MdNightsStay } from "react-icons/md";
import { FaSun } from "react-icons/fa";

const ThemeChanger = () => {
  const theme = useTheme();
  if (!theme.semanticTokens) {
    return null;
  }
  const { accent } = theme.semanticTokens.colors;
  const _accent = useColorModeValue(accent.default, accent._dark);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleColorMode = () => {
    toggleColorMode();
    changeThemeMeta(_accent);
  };

  return (
    <Flex
      transition={"500ms"}
      pos={"fixed"}
      bottom={["90%", "90%", "90%", 10]}
      right={[0, 0, 0, 10]}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={"2"}
      w={"60px"}
    >
      <IconButton
        rounded={"full"}
        bgColor={"primary"}
        color={"accent"}
        aria-label="Button to Toggle between Light and Dark Mode"
        icon={colorMode === "light" ? <MdNightsStay size={"26px"} /> : <FaSun size={"26px"} />}
        onClick={handleColorMode}
      />
    </Flex>
  );
};

export default ThemeChanger;
