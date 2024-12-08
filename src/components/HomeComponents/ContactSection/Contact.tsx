"use client";
import { Box, Button, Flex, Input, Spinner, Text, Textarea, useDisclosure } from "@chakra-ui/react";

import { MdOutlineCheckCircle, MdOutlineSend } from "react-icons/md";

import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import IconButtonComp from "../HeroSection/IconButtonComp";
import { SocialButtonsData } from "@/resources/CONSTANTS";
import { useScrollContext } from "@/context/ScrollContext";
import { MailDataType } from "@/resources/TYPES";
import MdHeading from "../Headings/MdHeading";
import CopyButton from "./CopyButton";

const Contact = () => {
  const { ContactRef } = useScrollContext();
  const [data, setData] = useState<MailDataType>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"loading" | "success" | "failed" | "idle">("idle");

  useEffect(() => {
    let id: NodeJS.Timeout | undefined = undefined;
    if (status === "failed") {
      id = setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
    return () => {
      clearTimeout(id);
    };
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    setStatus("loading");
    const resData = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (resData.ok) {
      setStatus("success");
      setData({
        email: "",
        name: "",
        message: "",
      });
    } else {
      setStatus("failed");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box w={"100%"} bgColor={"white"}>
      <Flex
        ref={ContactRef}
        transition={"500ms"}
        direction={"column"}
        p={4}
        maxW={"1440px"}
        mx={"auto"}
        justifyContent={"center"}
        alignItems={"center"}
        minH={"100vh"}
        gap={["3", "4", "6", "8", "10"]}
        pt={[0, 12]}
        fontFamily={"Poppins"}
      >
        <MdHeading title1="Get In" title2="Touch" />
        <Flex
          as={"form"}
          onSubmit={handleSubmit}
          minW={"280px"}
          w={"100%"}
          m={"auto"}
          maxW={"480px"}
          p={4}
          shadow={"lg"}
          color={"light"}
          rounded={"xl"}
          direction={"column"}
          gap={4}
        >
          <Input
            color={"text"}
            name="name"
            pl={4}
            variant={"outline"}
            fontWeight={"300"}
            fontSize={["10px", "12px", "14px", "14px", "16px"]}
            letterSpacing={"2px"}
            border={"2px solid"}
            borderColor={"accent"}
            _placeholder={{ color: "placeholder" }}
            type="text"
            value={data.name}
            placeholder="Name"
            required
            autoComplete="name"
            onChange={handleChange}
          />
          <Input
            color={"text"}
            name="email"
            pl={4}
            fontWeight={"300"}
            fontSize={["10px", "12px", "14px", "14px", "16px"]}
            letterSpacing={"2px"}
            variant={"outline"}
            border={"2px solid"}
            borderColor={"accent"}
            _placeholder={{ color: "placeholder" }}
            type="email"
            value={data.email}
            placeholder="Email"
            required
            autoComplete="email"
            onChange={handleChange}
          />
          <Textarea
            color={"text"}
            name="message"
            fontWeight={"300"}
            fontSize={["10px", "12px", "14px", "14px", "16px"]}
            letterSpacing={"2px"}
            pl={4}
            value={data.message}
            variant={"outline"}
            border={"2px solid"}
            borderColor={"accent"}
            _placeholder={{ color: "placeholder" }}
            placeholder="Enter your message"
            rows={5}
            required
            onChange={handleChange}
          />
          <Flex w={"100%"} pos={"relative"}>
            <Button
              w={"100%"}
              pos={"relative"}
              zIndex={1}
              disabled={status === "success" || status === "failed" || status === "loading"}
              _disabled={{ cursor: "not-allowed" }}
              bgColor={status === "success" ? "#15A409" : status === "failed" ? "#FF1E1E" : "accent"}
              rounded={"base"}
              outline={"none"}
              border={"none"}
              color={"white"}
              gap={1}
              _hover={{
                color: "darker",
                _after: {
                  w: "100%",
                  border: "1px solid",
                  borderColor: "accent",
                  left: "0px",
                },
              }}
              _active={{ bgColor: "accentDark", color: "light" }}
              type="submit"
              fontWeight={"300"}
              fontSize={["10px", "12px", "14px", "14px", "16px"]}
              letterSpacing={"2px"}
              _after={{
                content: '"."',
                w: "0px",
                minH: "100%",
                rounded: "base",
                transition: "500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                color: "transparent",
                pos: "absolute",
                bgColor: "primary",
                top: "0px",
                right: "0px",
                zIndex: -1,
                border: "0px solid",
                borderColor: "transparent",
              }}
            >
              {status === "loading" ? (
                <>
                  <Text>Loading</Text> <Spinner size={"md"} />
                </>
              ) : status === "failed" ? (
                <>
                  <Text>Oops...</Text>
                  <VscError />
                </>
              ) : status === "success" ? (
                <>
                  <Text>Thank You!</Text>
                  <MdOutlineCheckCircle />
                </>
              ) : (
                <>
                  <Text>Send</Text>
                  <MdOutlineSend />
                </>
              )}
            </Button>
          </Flex>
        </Flex>

        <Flex direction={["column", "column", "row", "row", "row"]} gap={"2"}>
          <CopyButton title="Copy Phone" />
          <CopyButton title="Copy Email" />
        </Flex>
        <Flex mb={"12"} mx={"2"} gap={["2", "3"]}>
          {SocialButtonsData.map((info, index) => {
            return (
              <IconButtonComp
                key={`social-btn-contact-${index}`}
                icon={info.icon}
                tooltip={info.tooltip}
                label={info.label}
                link={info.link}
                delay={info.delay}
              />
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;
