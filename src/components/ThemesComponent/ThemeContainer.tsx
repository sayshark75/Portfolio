import { Flex, IconButton } from "@chakra-ui/react";
import { BiSolidColor } from "react-icons/bi";
import { ThemeIconsData } from "../../CONSTANTS";
import { nanoid } from "nanoid";

const ThemeContainer = () => {
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
