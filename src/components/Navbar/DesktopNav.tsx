import { Flex, Text } from "@chakra-ui/react";
import { NavbarButtonProps } from "../../TYPES";
import NavButton from "./NavButton";
import useCustomTheme from "../../hooks/useCustomTheme";

type Props = {
  buttonData: NavbarButtonProps[];
};

const DesktopNav = ({ buttonData }: Props) => {
  const themeData = useCustomTheme();
  if (!themeData) {
    return null;
  }
  const { _text } = themeData;
  return (
    <Flex
      transition={"500ms"}
      pos={"fixed"}
      zIndex={100}
      top={"0px"}
      left={"0px"}
      w={"100%"}
      bgColor={"transparent"}
      color={"text"}
      gap={"2"}
      py={3}
    >
      <Flex alignItems={"center"} flex={1}>
        <Text
          w={"40px"}
          h={"40px"}
          textAlign={"center"}
          transition={"500ms"}
          color={"text"}
          rounded={"full"}
          cursor={"pointer"}
          border={`3px solid`}
          borderColor={`accent`}
          _hover={{ textShadow: `${_text} 3px 1px 2px` }}
          ml={3}
          as={"b"}
          fontSize={"2xl"}
        >
          &sect;
        </Text>
      </Flex>
      <Flex justifyContent={"flex-end"} gap={2} pr={4} flex={4} alignItems={"center"}>
        {buttonData.map((button, index) => {
          return button.link ? (
            <a key={index} href={button.link} onClick={button.refFunction}>
              <NavButton title={button.title} onClick={() => {}} delay={button.delay} />
            </a>
          ) : (
            <NavButton key={index} title={button.title} onClick={button.refFunction} delay={button.delay} />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default DesktopNav;
