import { ThemeIconsData } from "@/resources/CONSTANTS";
import { useCustomTheme } from "@/context/ThemeProvider";
import { Flex, IconButton } from "@chakra-ui/react";
import { BiSolidColor } from "react-icons/bi";

const ThemeContainer = () => {
  const { currentColor, handleColorChange } = useCustomTheme();
  return (
    <Flex justifyContent={"center"} alignItems={"center"} gap={["2", "4", "5", "6", "8"]}>
      {ThemeIconsData.map((icon, index) => {
        return (
          <IconButton
            key={`theme-icons-${index}`}
            aria-label={`A Button to Change the Theme to color: ${icon.themeName}`}
            fontSize={"32px"}
            rounded={"full"}
            _active={{ opacity: "0.5", transform: "translateY(5px)" }}
            bgColor={icon.color}
            opacity={icon.themeName === currentColor ? "1" : "0.3"}
            transition={"300ms"}
            onClick={() => handleColorChange(icon.themeName)}
            _hover={{ transform: "scale(1.2) rotate(45deg)" }}
          >
            <BiSolidColor style={{ color: "#fff" }} />
          </IconButton>
        );
      })}
    </Flex>
  );
};

export default ThemeContainer;
