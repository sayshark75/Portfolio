import { Flex, Highlight, IconButton, Image, Text } from "@chakra-ui/react";
import { BsGlobeAmericas } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { RefObject, useRef } from "react";
import { FaGraduationCap, FaLocationDot } from "react-icons/fa6";
import { TimelineCardProps } from "@/resources/TYPES";
import { useInView } from "framer-motion";
import { MotionFlex } from "@/libs/motionComponents";
import Link from "next/link";
import { MdWork } from "react-icons/md";

const TimelineCard = ({
  linkedin,
  type,
  website,
  location,
  logo,
  title,
  role,
  query,
  highlight,
  dateStart,
  dateEnd,
}: TimelineCardProps & { index: number }) => {
  const animRef: RefObject<HTMLParagraphElement> = useRef(null);
  const isIntersecting = useInView(animRef, { once: true });

  return (
    <MotionFlex
      initial={{ opacity: 0, y: "-80px" }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: "-80px" }}
      transition={{ duration: 0.5, delay: 0.6 }}
      gap={3}
      rounded={"md"}
      pos={"relative"}
      ref={animRef}
      direction={"column"}
      minW={"200px"}
      w={"100%"}
      opacity={0}
      maxW={"600px"}
      shadow={"lg"}
      borderBottom={"3px solid"}
      borderBottomColor={"accent"}
      p={["12px", "40px"]}
      _hover={{
        _after: {
          w: "100%",
          minH: "100%",
        },
      }}
      _after={{
        content: '"."',
        w: "0px",
        minH: "0px",
        color: "transparent",
        transition: "500ms",
        bgColor: "primaryLight",
        pos: "absolute",
        bottom: "0px",
        left: "0px",
        zIndex: -1,
      }}
    >
      <Flex
        px={3}
        py={1}
        align={"center"}
        gap={1}
        rounded={"full"}
        pos={"absolute"}
        top={2}
        right={2}
        bgColor={"light"}
        color={"darker"}
        shadow={"md"}
        fontSize={"12px"}
        fontWeight={"500"}
      >
        {type === "Work" ? <MdWork /> : <FaGraduationCap />}
        <Text>{type}</Text>
      </Flex>
      {/* Time and Date */}
      <MotionFlex
        initial={{ opacity: 0, x: "-80px" }}
        animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: "-80px" }}
        transition={{ duration: 0.5, delay: 1.2 }}
        w={"max-content"}
        pos={"relative"}
      >
        <Text
          fontSize={"12px"}
          fontWeight={"500"}
          color={"text"}
          letterSpacing={"2px"}
          mb={"2px"}
          _after={{
            content: '"."',
            w: "0px",
            h: "1px",
            transition: "500ms cubic-bezier(0.6, -0.28, 0.74, 0.05)",
            color: "transparent",
            bgColor: "accent",
            pos: "absolute",
            bottom: "0px",
            left: "-6px",
          }}
          _hover={{
            _after: {
              h: "1px",
              w: "110%",
            },
          }}
        >
          <Highlight query={dateEnd} styles={{ color: "accent" }}>{`${dateStart} - ${dateEnd}`}</Highlight>
        </Text>
      </MotionFlex>
      {/* Company info */}
      <Flex flex={1} gap={2} direction={["column", "row"]}>
        {/* Logo of Company */}
        <Flex flex={4} justifyContent={"flex-start"} alignItems={"center"} gap={4}>
          <Image w={["35px", "50px"]} bgColor={"white"} p={[1, 2]} rounded={"full"} src={logo} alt="Autotron Tech Website Logo" />
          <Text fontFamily={"Poppins"} fontSize={"14px"} letterSpacing={"2px"} fontWeight={600} color={"text"}>
            {title}
          </Text>
        </Flex>
        {/* Details of Company */}
        <Flex gap={2} flex={1} w={"100%"} justifyContent={["flex-start", "flex-end"]}>
          {linkedin && (
            <Link href={linkedin} target="_blank">
              <IconButton
                size={"xs"}
                rounded={"full"}
                bgColor={"primary"}
                color={"accent"}
                _active={{ color: "text", bgColor: "accent" }}
                _hover={{ opacity: 0.4 }}
                aria-label={`Linked-In Icon, to Visit LinkedIn Page of ${title}`}
              >
                <FaLinkedinIn />
              </IconButton>
            </Link>
          )}
          {website && (
            <Link href={website} target="_blank">
              <IconButton
                size={"xs"}
                rounded={"full"}
                bgColor={"primary"}
                color={"accent"}
                _active={{ color: "text", bgColor: "accent" }}
                _hover={{ opacity: 0.4 }}
                aria-label={`Globe Icon, to Visit Web Page of ${title}`}
              >
                <BsGlobeAmericas />
              </IconButton>
            </Link>
          )}
          {location && (
            <Link href={location} target="_blank">
              <IconButton
                size={"xs"}
                rounded={"full"}
                bgColor={"primary"}
                color={"accent"}
                _active={{ color: "text", bgColor: "accent" }}
                _hover={{ opacity: 0.4 }}
                aria-label={`Location Icon, to Visit Location of ${title}`}
              >
                <FaLocationDot />
              </IconButton>
            </Link>
          )}
        </Flex>
      </Flex>
      {/* My role */}
      <Flex flex={1} direction={"column"}>
        <Text style={{ fontFamily: "Poppins", fontSize: "14px", letterSpacing: "1px", fontWeight: 400 }} color={"text"}>
          {role}
        </Text>
        <Flex direction={"column"} pt={2} mt={2} borderTop={"1px dashed"} borderTopColor={"darker"}>
          <Text style={{ fontFamily: "Poppins", fontSize: "12px", letterSpacing: "2px", fontWeight: 400 }} color={"text"}>
            Skills:
          </Text>
          <Text fontFamily={"Poppins"} fontSize={"12px"} letterSpacing={"2px"} fontWeight={400}>
            <Highlight
              query={query}
              styles={{
                border: "1px solid",
                borderColor: "accent",
                fontSize: ["11px", "12px"],
                fontWeight: "400",
                lineHeight: ["32px", "32px"],
                rounded: "full",
                px: ["8px", "12px"],
                py: ["2px", "3px"],
                mr: ["0px", "8px"],
                color: "text",
              }}
            >
              {highlight}
            </Highlight>
          </Text>
        </Flex>
      </Flex>
    </MotionFlex>
  );
};

export default TimelineCard;
