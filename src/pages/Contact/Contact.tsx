import { Button, Flex, Input, Spinner, Text, Textarea, useDisclosure } from "@chakra-ui/react";

import { MdOutlineCheckCircle, MdOutlineSend } from "react-icons/md";

import { ScrollContext } from "../../contexts/ScrollContext";
import { useContext, useEffect, useState } from "react";
import EmailModal from "../../components/EmailModal/EmailModal";
import MdHeading from "../../components/Headings/MdHeading";
import CopyButton from "../../components/ContactPage/CopyButton";
import IconButtonComp from "../../components/HomePage/IconButtonComp";
import { nanoid } from "nanoid";
import { sendMail } from "../../api/mail.api";
import { VscError } from "react-icons/vsc";
import { mailDataType } from "../../TYPES";
import { socialBtnDataCreator } from "../../sources/SocialButtonsDataGen";

const Contact = () => {
  const context = useContext(ScrollContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState<mailDataType>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("idle");

  useEffect(() => {
    let id: number;
    if (status === "failed") {
      id = setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
    return () => {
      clearTimeout(id);
    };
  }, [status]);

  if (!context) {
    return;
  }

  const SocialButtonsData = socialBtnDataCreator(onOpen);

  const { ContactRef } = context;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const resData = await sendMail(data);
    if (resData.status) {
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
    <>
      <Flex
        ref={ContactRef}
        transition={"500ms"}
        direction={"column"}
        p={4}
        justifyContent={"center"}
        alignItems={"center"}
        minH={"100vh"}
        gap={["3", "4", "6", "8", "10"]}
        pt={"12"}
        fontFamily={"Poppins"}
      >
        <MdHeading title1="Get In" title2="Touch" />
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <Flex
            minW={"280px"}
            w={"100%"}
            m={"auto"}
            maxW={"480px"}
            p={4}
            shadow={"2xl"}
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
              placeholder="Your Name"
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
              placeholder="Your Email"
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
              placeholder="Please don't hesitate to say something, say 'hi', 'hello','bad work', 'good work', 'testing',etc..."
              rows={5}
              required
              onChange={handleChange}
            />
            <Button
              isDisabled={status === "success" || status === "failed" || status === "loading"}
              _disabled={{ cursor: "not-allowed" }}
              bgColor={status === "success" ? "#15A409" : status === "failed" ? "#FF1E1E" : "accent"}
              rounded={"base"}
              outline={"none"}
              border={"none"}
              color={"white"}
              gap={1}
              _hover={{}}
              _active={{ bgColor: "accentDark", color: "light" }}
              type="submit"
              fontWeight={"300"}
              fontSize={["10px", "12px", "14px", "14px", "16px"]}
              letterSpacing={"2px"}
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
        </form>

        <Flex direction={["column", "column", "row", "row", "row"]} gap={"2"}>
          <CopyButton title="7588244148" />
          <CopyButton title="sayyedsharuk75@gmail.com" />
        </Flex>
        <Flex mb={"12"} mx={"2"} gap={["2", "3"]}>
          {SocialButtonsData.map((info) => {
            return (
              <IconButtonComp
                key={nanoid()}
                icon={info.icon}
                tooltip={info.tooltip}
                label={info.label}
                onClick={info.onClick}
                link={info.link}
                delay={info.delay}
              />
            );
          })}
        </Flex>
      </Flex>
      {/** Email Modal used for different parts */}
      <EmailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Contact;
