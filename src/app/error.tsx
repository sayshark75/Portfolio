"use client";

import { Flex, Link, Tabs, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { FaLinesLeaning, FaMicrochip } from "react-icons/fa6";

const ErrorPage = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <Flex
      bgColor={"light.200"}
      color={"dark.100"}
      w={"100%"}
      pos={"absolute"}
      top={"0px"}
      left={"0px"}
      direction={"column"}
      gap={4}
      zIndex={10}
      minH={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text as={"h1"} color={"primary.200"} textStyle={"heading-h1-lg"}>
        Oops!
      </Text>
      <Text as={"p"} color={"dark.200"} textStyle={"p-md"}>
        Something went wrong...
      </Text>
      <Tabs.Root
        minW={{ base: "300px", md: "600px" }}
        maxW={{ base: "300px", md: "600px" }}
        h={"300px"}
        overflow={"auto"}
        defaultValue="members"
        variant={"outline"}
      >
        <Tabs.List>
          <Tabs.Trigger value="dev">
            <FaMicrochip />
            Developer Info
          </Tabs.Trigger>
          <Tabs.Trigger value="error">
            <FaLinesLeaning />
            Error Stack
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="dev">{error.message}</Tabs.Content>
        <Tabs.Content value="error">{error.stack}</Tabs.Content>
      </Tabs.Root>
      <Flex justify={"center"} align={"center"}>
        <Text>
          Visit{" "}
          <Link color="#1DA1F2" href={"https://github.com/sayshark75/Portfolio"}>
            {" "}
            GitHub{" "}
          </Link>{" "}
          to raise/resolve this issues:
        </Text>
      </Flex>{" "}
    </Flex>
  );
};

export default ErrorPage;
