import { Flex, IconButton } from "@chakra-ui/react";
import { BiSolidColor } from "react-icons/bi";
import { ThemeIconsData } from "../../CONSTANTS";
import { nanoid } from "nanoid";
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
      {ThemeIconsData.map((icon) => {
        return (
          <IconButton
            key={nanoid()}
            aria-label={`A Button to Change the Theme to color: ${icon.color}`}
            icon={<BiSolidColor style={{ color: "#fff" }} />}
            fontSize={"32px"}
            rounded={"full"}
            onClick={() => handleTheme(icon.theme, icon.metaColor)}
            _active={{ opacity: "0.5", transform: "translateY(5px)" }}
            bgColor={icon.color}
            _hover={{}}
          />
        );
      })}
    </Flex>
  );
};

export default ThemeContainer;
