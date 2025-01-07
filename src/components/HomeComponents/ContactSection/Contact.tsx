"use client";
import { Box, Button, Flex, Input, Link, Spinner, Text, Textarea } from "@chakra-ui/react";

import { MdOutlineSend } from "react-icons/md";

import { useEffect, useState } from "react";
import IconButtonComp from "../HeroSection/IconButtonComp";
import { SocialButtonsData } from "@/resources/CONSTANTS";
import { useScrollContext } from "@/context/ScrollContext";
import { MailDataType } from "@/resources/TYPES";
import MdHeading from "../Headings/MdHeading";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { MotionBox, MotionFlex } from "@/libs/motionComponents";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

const Contact = () => {
  const { ContactRef } = useScrollContext();
  const [process, setProcess] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [data, setData] = useState<MailDataType>({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    let id: NodeJS.Timeout | undefined = undefined;
    if (process.error) {
      id = setTimeout(() => {
        setProcess({ loading: false, success: false, error: false });
      }, 3000);
    }
    return () => {
      clearTimeout(id);
    };
  }, [process.error]);

  const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      console.error("Recaptcha not initialized");
      setProcess({ loading: false, success: false, error: true });
      return;
    }
    setProcess({ loading: true, success: false, error: false });
    const token = await executeRecaptcha("submit_form");
    const resData = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, token }),
    });
    if (resData.ok) {
      setProcess({ loading: false, success: true, error: false });
      setData({
        email: "",
        name: "",
        message: "",
      });
    } else {
      setProcess({ loading: false, success: false, error: true });
    }
  };

  const formContainerAnimVariant = {
    hide: {
      maxHeight: "100%",
      transition: { delay: 0.5, duration: 1 },
    },
    show: {
      maxHeight: "200vh",
      transition: { delay: 0.5, duration: 1 },
    },
  };

  const formAnimVariant = {
    hide: {
      opacity: 0,
      scale: 0,
      transition: { duration: 1 },
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
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
        maxW={"1440px"}
        mx={"auto"}
        p={4}
        justifyContent={"center"}
        alignItems={"center"}
        gap={["3", "4", "6", "8", "10"]}
        pt={[0, 12]}
        fontFamily={"Poppins"}
      >
        <MdHeading title1="Get In" title2="Touch" />
        <MotionBox
          initial={"show"}
          animate={process.loading || process.error || process.success ? "hide" : "show"}
          variants={formContainerAnimVariant}
          minW={"280px"}
          w={"100%"}
          m={"auto"}
          maxW={"480px"}
          p={4}
          shadow={"lg"}
          color={"white"}
          rounded={"xl"}
          pos={"relative"}
        >
          {process.success && (
            <Flex
              direction={"column"}
              zIndex={5}
              justify={"center"}
              align={"center"}
              w={"100%"}
              minH={"100%"}
              pos={"absolute"}
              top={"50%"}
              color={"darker"}
              left={"50%"}
              transform={"translate(-50%,-50%)"}
              p={5}
            >
              <Text color={"accent"} textAlign={"center"} fontSize={"56px"} fontFamily={"Poppins"} fontWeight={400}>
                <FaRegCheckCircle />
              </Text>
              <Text textAlign={"center"} fontSize={24} fontFamily={"Poppins"} mt={5} fontWeight={300}>
                Thank you!
              </Text>
              <Text textAlign={"center"} mt={2} fontSize={"14px"} fontFamily={"Poppins"} opacity={0.7} fontWeight={400}>
                Please allow me some time to get back to you.
              </Text>
            </Flex>
          )}
          {process.error && (
            <Flex
              direction={"column"}
              zIndex={5}
              justify={"center"}
              align={"center"}
              w={"100%"}
              minH={"100%"}
              pos={"absolute"}
              color={"darker"}
              top={"50%"}
              left={"50%"}
              transform={"translate(-50%,-50%)"}
            >
              <Text color={"accent"} textAlign={"center"} fontSize={"56px"} fontFamily={"Poppins"} fontWeight={400}>
                <FaRegCircleXmark />
              </Text>
              <Text textAlign={"center"} fontSize={24} fontFamily={"Poppins"} mt={5} fontWeight={300}>
                Oops...
              </Text>
              <Text textAlign={"center"} mt={2} fontSize={"14px"} fontFamily={"Poppins"} opacity={0.7} fontWeight={400}>
                Something went wrong...
              </Text>
            </Flex>
          )}
          {process.loading && (
            <Flex
              zIndex={5}
              justify={"center"}
              align={"center"}
              w={"100%"}
              minH={"100%"}
              pos={"absolute"}
              top={"50%"}
              left={"50%"}
              transform={"translate(-50%,-50%)"}
            >
              <Spinner size="xl" color="accent" borderWidth={6} />
            </Flex>
          )}
          <MotionFlex
            initial={"show"}
            animate={process.loading || process.error || process.success ? "hide" : "show"}
            variants={formAnimVariant}
            overflow={"hidden"}
            as={"form"}
            onSubmit={handleSubmit}
            w={"100%"}
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
              letterSpacing={"1.5px"}
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
              letterSpacing={"1.5px"}
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
              letterSpacing={"1.5px"}
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
            <Box w={"100%"} pos={"relative"}>
              <Button
                w={"100%"}
                pos={"relative"}
                zIndex={1}
                disabled={process.loading || process.error || process.success}
                _disabled={{ cursor: "not-allowed" }}
                bgColor={"accent"}
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
                _active={{ bgColor: "accentDark", color: "white" }}
                type="submit"
                fontWeight={"300"}
                fontSize={["10px", "12px", "14px", "14px", "16px"]}
                letterSpacing={"1.5px"}
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
                <Text>Send</Text>
                <MdOutlineSend />
              </Button>
            </Box>
          </MotionFlex>
          {/* Recaptcha Text */}
          <Text mt={2} color={"darker"} fontSize={{ base: "12px", lg: "xs" }} maxW={"320px"}>
            This site is protected by reCAPTCHA and the Google{" "}
            <Link href="https://policies.google.com/privacy" color="accent">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="https://policies.google.com/terms" color="accent">
              Terms of Service
            </Link>{" "}
            apply.
          </Text>
        </MotionBox>
        <Flex pb={"12"} mt={4} mx={"2"} gap={["2", "3"]}>
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
