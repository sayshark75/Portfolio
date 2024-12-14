import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { MdOutlineCheckCircleOutline, MdOutlineContentCopy } from "react-icons/md";

const CopyButton = ({ title }: { title: string }) => {
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
        minW={"160px"}
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
            right: "100%",
            rounded: "none",
          },
        }}
        _active={{ bgColor: "#003aff", color: "#fff" }}
        _after={{
          content: '"."',
          w: "0px",
          h: "100%",
          transition: "500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          pos: "absolute",
          zIndex: -1,
          top: "0%",
          left: "0%",
          color: "transparent",
          bgColor: "primary",
        }}
      >
        <Text transition={"500ms"} as={"b"} fontWeight={"500"} fontSize={["10px", "11px", "12px", "12px", "12px"]} letterSpacing={"1.5px"}>
          {title}
        </Text>
        <Flex color={"white"} bgColor={"accent"} rounded={"full"} p={"8px"}>
          {!isCopy ? <MdOutlineContentCopy /> : <MdOutlineCheckCircleOutline />}
        </Flex>
      </Button>
    </Flex>
  );
};

export default CopyButton;
