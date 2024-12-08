"use client";
import BigHeading from "@/components/HomeComponents/Headings/BigHeading";
import { Button } from "@/components/ui/button";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <Flex w={"100%"} h={"100vh"} justify={"center"} align={"center"}>
      <Box>
        <BigHeading title1="404" title2="Not Found" />
        <Text fontSize={"14px"} w={"100%"} textAlign={"center"}>
          The page you are looking for is not found...
        </Text>
        <Flex w={"100%"} mt={5} justify={"center"} align={"center"} gap={3} mx={"auto"}>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
          <Button onClick={() => router.back()}>Go Back</Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default NotFound;
