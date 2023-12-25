import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { MdOutlineCheckCircleOutline, MdOutlineContentCopy } from "react-icons/md";
import { CopyButtonProps } from "../../TYPES";

const CopyButton = ({ title }: CopyButtonProps) => {
  const [isCopy, setIsCopy] = useState(false);

  const copyFunction = () => {
    navigator.clipboard.writeText(title);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 2000);
  };

  return (
    <Button
      onClick={copyFunction}
      rounded={"base"}
      minW={"280px"}
      p={"5"}
      gap={"3"}
      justifyContent={"space-between"}
      color={"white"}
      bgColor={"accent"}
      transition={"500ms"}
      _hover={{}}
      _active={{ bgColor: "#003aff", color: "#fff" }}
    >
      <Text
        transition={"500ms"}
        as={"b"}
        fontWeight={"300"}
        fontSize={["10px", "11px", "12px", "12px", "12px"]}
        letterSpacing={"2px"}
        color={"#fff"}
        _hover={{}}
      >
        {title}
      </Text>
      <Flex bgColor={"#fff"} rounded={"full"} p={"8px"} color={"#000"}>
        {!isCopy ? <MdOutlineContentCopy style={{ fontSize: "16px" }} /> : <MdOutlineCheckCircleOutline style={{ fontSize: "16px" }} />}
      </Flex>
    </Button>
  );
};

export default CopyButton;
