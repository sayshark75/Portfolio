import { Flex, Image, useColorMode } from "@chakra-ui/react";
import changeThemeMeta from "../../helpers/MobileChromeTheme";
import LightIcon from "../../assets/icons/light.svg";
import DarkIcon from "../../assets/icons/dark.svg";

const ThemeChanger = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleColorMode = () => {
    toggleColorMode();
    changeThemeMeta("");
  };

  return (
    <Flex
      transition={"500ms"}
      pos={"fixed"}
      bottom={10}
      right={10}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={"2"}
      w={"60px"}
    >
      <Image
        rounded={"full"}
        p={1}
        cursor={"pointer"}
        bgColor={colorMode ? "#fff" : "#2a2a2a"}
        onClick={handleColorMode}
        src={colorMode ? DarkIcon : LightIcon}
        alt={
          colorMode
            ? "Dark Icon, Switch to Dark mode"
            : "Light Icon, Switch to Light mode"
        }
      />
    </Flex>
  );
};

export default ThemeChanger;
