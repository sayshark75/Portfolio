import { Button, Text } from "@chakra-ui/react";
import copy from "copy-to-clipboard";
import { useState } from "react";
import {
  MdOutlineCheckCircleOutline,
  MdOutlineContentCopy,
} from "react-icons/md";
import { CopyButtonProps } from "../../TYPES";

const CopyButton = ({ title }: CopyButtonProps) => {
  const [isCopy, setIsCopy] = useState(false);

  const copyFunction = () => {
    copy(title);
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
      color={"#fff"}
      bgColor={"#006aff"}
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
      {!isCopy ? (
        <MdOutlineContentCopy style={{ fontSize: "22px" }} />
      ) : (
        <MdOutlineCheckCircleOutline style={{ fontSize: "22px" }} />
      )}
    </Button>
  );
};

export default CopyButton;
