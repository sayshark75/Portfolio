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
    <Flex pos={"relative"} w={"100%"}>
      <Button
        pos={"relative"}
        w={"100%"}
        zIndex={1}
        onClick={copyFunction}
        rounded={"base"}
        minW={"280px"}
        p={"5"}
        gap={"3"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={"white"}
        bgColor={"accent"}
        _hover={{
          color: "darker",
          _after: {
            w: "100%",
            h: "100%",
            top: "0px",
            right: "0px",
            rounded: "base",
            border: "1px solid",
            borderColor: "accent",
          },
        }}
        _active={{ bgColor: "#003aff", color: "#fff" }}
        _after={{
          content: '"."',
          w: "0px",
          h: "0px",
          rounded: "full",
          transition: "500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          pos: "absolute",
          zIndex: -1,
          top: "50%",
          right: "10%",
          color: "transparent",
          bgColor: "primary",
          border: "1px solid",
          borderColor: "transparent",
        }}
      >
        <Text transition={"500ms"} as={"b"} fontWeight={"500"} fontSize={["10px", "11px", "12px", "12px", "12px"]} letterSpacing={"2px"}>
          {title}
        </Text>
        <Flex bgColor={"#fff"} rounded={"full"} p={"8px"} color={"#000"}>
          {!isCopy ? <MdOutlineContentCopy style={{ fontSize: "16px" }} /> : <MdOutlineCheckCircleOutline style={{ fontSize: "16px" }} />}
        </Flex>
      </Button>
    </Flex>
  );
};

export default CopyButton;
