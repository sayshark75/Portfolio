import { Flex, Text, useColorModeValue, useTheme } from "@chakra-ui/react";
import { NavbarButtonProps } from "../../TYPES";
import NavButton from "./NavButton";
import { runAnim } from "../../animations/NavbarAnimations";

type Props = {
  buttonData: NavbarButtonProps[];
};

const DesktopNav = ({ buttonData }: Props) => {
  const theme = useTheme();
  if (!theme.semanticTokens) {
    return null;
  }
  const { text } = theme.semanticTokens.colors;
  const _text = useColorModeValue(text.default, text._dark);
  return (
    <Flex
      transition={"500ms"}
      pos={"fixed"}
      zIndex={"1"}
      top={"0px"}
      left={"0px"}
      w={"100%"}
      bgColor={"primary"}
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
          animation={`${runAnim} 3s ease-in-out infinite`}
          cursor={"pointer"}
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
