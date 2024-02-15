import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import changeThemeMeta from "../../helpers/MobileChromeTheme";
import { MdNightsStay } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import useCustomTheme from "../../hooks/useCustomTheme";

const ThemeChanger = () => {
  const themeData = useCustomTheme();
  const { colorMode, toggleColorMode } = useColorMode();
  if (!themeData) {
    return null;
  }
  const { _accent } = themeData;

  const handleColorMode = () => {
    toggleColorMode();
    changeThemeMeta(_accent);
  };

  return (
    <Flex
      transition={"500ms"}
      pos={"fixed"}
      bottom={["15%", "15%", "15%", 10]}
      right={[0]}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={100}
      roundedStart={"full"}
      overflow={"hidden"}
      shadow={"lg"}
    >
      <IconButton
        pos={"relative"}
        borderColor={"accent"}
        roundedStart={"full"}
        bgColor={"primary"}
        color={"accent"}
        aria-label="Button to Toggle between Light and Dark Mode"
        icon={colorMode === "light" ? <MdNightsStay size={"26px"} /> : <FaSun size={"26px"} />}
        onClick={handleColorMode}
        _hover={{
          color: "white",
          bgColor: "transparent",
          _after: {
            w: "100%",
            h: "100%",
            top: "0px",
          },
        }}
        _after={{
          content: '"."',
          w: "0px",
          h: "0px",
          transition: "500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          color: "transparent",
          pos: "absolute",
          top: "50%",
          right: "0px",
          bgColor: "accent",
          roundedStart: "full",
          zIndex: -1,
        }}
      />
    </Flex>
  );
};

export default ThemeChanger;
