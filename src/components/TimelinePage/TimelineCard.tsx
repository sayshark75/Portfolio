import { Flex, Highlight, IconButton, Image, Text } from "@chakra-ui/react";
import { BsGlobeAmericas } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { TimelineCardProps } from "../../TYPES";
import { RefObject, useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObs";
import { fadeBottom, fadeLeft } from "../../animations/FadeAnimations";

const TimelineCard = ({ linkedin, website, logo, title, role, query, highlight, dateStart, dateEnd }: TimelineCardProps) => {
  const handleVisitLinkedIn = (type: string) => {
    if (type === "linkedin") {
      window.open(linkedin, "_blank");
    } else if (type === "website") {
      window.open(website, "_blank");
    }
  };

  const animRef: RefObject<HTMLParagraphElement> = useRef(null);
  const isIntersecting = useIntersectionObserver(animRef);

  return (
    <Flex
      gap={3}
      rounded={"md"}
      ref={animRef}
      direction={"column"}
      minW={"200px"}
      w={"100%"}
      animation={isIntersecting ? `${fadeBottom} 500ms ease 600ms forwards` : "none"}
      opacity={0}
      maxW={"600px"}
      shadow={"lg"}
      borderBottom={"3px solid"}
      borderBottomColor={"accent"}
      p={["12px", "40px"]}
    >
      {/* Time and Date */}
      <Flex w={"max-content"} animation={isIntersecting ? `${fadeLeft} 500ms ease 1.2s forwards` : "none"} opacity={0} pos={"relative"}>
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
      </Flex>
      {/* Company info */}
      <Flex flex={1} gap={2} direction={["column", "row"]}>
        {/* Logo of Company */}
        <Flex flex={4} justifyContent={"flex-start"} alignItems={"center"} gap={4}>
          <Image w={["35px", "50px"]} bgColor={"white"} p={[1, 2]} rounded={"full"} src={logo} alt="Autotron Tech Website Logo" />
          <Text style={{ fontFamily: "Poppins", fontSize: "12px", letterSpacing: "2px", fontWeight: 400 }} color={"text"}>
            {title}
          </Text>
        </Flex>
        {/* Details of Company */}
        <Flex gap={2} flex={1} w={"100%"} justifyContent={["flex-start", "flex-end"]}>
          {linkedin && (
            <IconButton
              size={"xs"}
              rounded={"full"}
              bgColor={"primary"}
              color={"accent"}
              _active={{ color: "text", bgColor: "accent" }}
              _hover={{}}
              icon={<FaLinkedinIn />}
              onClick={() => handleVisitLinkedIn("linkedin")}
              aria-label="Linked-In Icon, to Visit LinkedIn Page of TopBar Company"
            />
          )}
          {website && (
            <IconButton
              size={"xs"}
              rounded={"full"}
              bgColor={"primary"}
              color={"accent"}
              _active={{ color: "text", bgColor: "accent" }}
              _hover={{}}
              icon={<BsGlobeAmericas />}
              onClick={() => handleVisitLinkedIn("website")}
              aria-label="Globe Icon, to Visit Web Page of TopBar Company"
            />
          )}
        </Flex>
      </Flex>
      {/* My role */}
      <Flex flex={1} direction={"column"}>
        <Text style={{ fontFamily: "Poppins", fontSize: "12px", letterSpacing: "2px", fontWeight: 400 }} color={"text"}>
          {role}
        </Text>
        <Flex direction={"column"}>
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
    </Flex>
  );
};

export default TimelineCard;
