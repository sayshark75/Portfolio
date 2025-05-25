import { Flex, Text } from "@chakra-ui/react";
import NavButton from "./NavButton";
import useCheckScrolling from "../../hooks/useCheckScrolling";
import Link from "next/link";
import { JSX } from "react";

export type NavButtonType = {
  link?: string;
  refFunction: () => void;
  title: string;
  icon?: JSX.Element;
  alt?: string;
};

const DesktopNav = ({ buttonData }: { buttonData: NavButtonType[] }) => {
  const { isScrolling } = useCheckScrolling();
  return (
    <Flex
      hideBelow={"small"}
      transition={"200ms"}
      pos={"fixed"}
      zIndex={100}
      top={"0px"}
      left={"0px"}
      w={"100%"}
      bgColor={"transparent"}
      transform={isScrolling ? "translateY(-150%)" : "none"}
      color={"text"}
      gap={"2"}
      py={3}
    >
      <Flex alignItems={"center"} flex={1} pos={"relative"}>
        <Text
          w={"40px"}
          h={"40px"}
          textAlign={"center"}
          transition={"300ms"}
          color={"text"}
          rounded={"full"}
          cursor={"pointer"}
          border={`3px solid`}
          borderColor={`accent`}
          _hover={{
            transform: "scaleX(-1)",
          }}
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
            <Link key={index} href={button.link} onClick={button.refFunction}>
              <NavButton title={button.title} refFunction={() => {}} />
            </Link>
          ) : (
            <NavButton key={index} title={button.title} refFunction={button.refFunction} />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default DesktopNav;
