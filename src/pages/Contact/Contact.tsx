import { Button, Flex, Input, Textarea, useDisclosure } from "@chakra-ui/react";

import { MdOutlineSend } from "react-icons/md";

import { ScrollContext } from "../../contexts/ScrollContext";
import { useContext } from "react";
import EmailModal from "../../components/EmailModal/EmailModal";
import MdHeading from "../../components/Headings/MdHeading";
import CopyButton from "../../components/ContactPage/CopyButton";
import IconButtonComp from "../../components/HomePage/IconButtonComp";
import { nanoid } from "nanoid";
import { socialBtnDataCreator } from "../../CONSTANTS";

const Contact = () => {
  const context = useContext(ScrollContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!context) {
    return;
  }
  const SocialButtonsData = socialBtnDataCreator(onOpen);

  const { ContactRef } = context;

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
        <form style={{ width: "100%" }} onSubmit={(e) => e.preventDefault()}>
          <Flex minW={"280px"} w={"100%"} m={"auto"} maxW={"480px"} p={4} shadow={"2xl"} color={"#fff"} rounded={"xl"} direction={"column"} gap={4}>
            <Input
              name="username"
              pl={4}
              variant={"outline"}
              fontWeight={"300"}
              fontSize={["10px", "12px", "14px", "14px", "16px"]}
              letterSpacing={"2px"}
              border={"2px solid #006aff"}
              _placeholder={{ color: "#aaa" }}
              type="text"
              placeholder="Your Name"
              required
            />
            <Input
              name="email"
              pl={4}
              fontWeight={"300"}
              fontSize={["10px", "12px", "14px", "14px", "16px"]}
              letterSpacing={"2px"}
              variant={"outline"}
              border={"2px solid #006aff"}
              _placeholder={{ color: "#aaa" }}
              type="email"
              placeholder="Your Email"
              required
            />
            <Textarea
              name="message"
              fontWeight={"300"}
              fontSize={["10px", "12px", "14px", "14px", "16px"]}
              letterSpacing={"2px"}
              pl={4}
              variant={"outline"}
              border={"2px solid #006aff"}
              _placeholder={{ color: "#aaa" }}
              placeholder="Your Message"
              rows={5}
              required
            />
            <Button
              _disabled={{ cursor: "not-allowed" }}
              bgColor={"#006aff"}
              rounded={"base"}
              outline={"none"}
              border={"none"}
              color={"#fff"}
              gap={1}
              _hover={{}}
              _active={{ bgColor: "#003aff", color: "#fff" }}
              type="submit"
              fontWeight={"300"}
              fontSize={["10px", "12px", "14px", "14px", "16px"]}
              letterSpacing={"2px"}
            >
              Send <MdOutlineSend />
            </Button>
          </Flex>
        </form>

        <Flex direction={["column", "column", "row", "row", "row"]} gap={"2"}>
          <CopyButton title="7588244148" />
          <CopyButton title="sayyedsharuk75@gmail.com" />
        </Flex>
        <Flex my={"8"} mx={"2"} gap={"3"}>
          {SocialButtonsData.map((info) => {
            return <IconButtonComp key={nanoid()} icon={info.icon} tooltip={info.tooltip} label={info.label} onClick={info.onClick} link={info.link} delay={info.delay} />;
          })}
        </Flex>
      </Flex>
      {/** Email Modal used for different parts */}
      <EmailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Contact;
