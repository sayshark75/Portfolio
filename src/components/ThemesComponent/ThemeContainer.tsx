import { Flex, IconButton } from "@chakra-ui/react";
import { BiSolidColor } from "react-icons/bi";
import { ThemeIconsData } from "../../CONSTANTS";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";

const ThemeContainer = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { handleTheme } = themeContext;
  return (
    <Flex justifyContent={"center"} alignItems={"center"} gap={["2", "4", "5", "6", "8"]}>
      {ThemeIconsData.map((icon, index) => {
        return (
          <IconButton
            key={`theme-icons-${index}`}
            aria-label={`A Button to Change the Theme to color: ${icon.themeName}`}
            icon={<BiSolidColor style={{ color: "#fff" }} />}
            fontSize={"32px"}
            rounded={"full"}
            onClick={() => handleTheme(icon.theme, icon.metaColor, icon.themeName)}
            _active={{ opacity: "0.5", transform: "translateY(5px)" }}
            bgColor={icon.color}
            transition={"300ms"}
            _hover={{ transform: "scale(1.2) rotate(45deg)" }}
          />
        );
      })}
    </Flex>
  );
};

export default ThemeContainer;
