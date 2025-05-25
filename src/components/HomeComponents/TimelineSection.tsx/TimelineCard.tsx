import { Flex, Highlight, IconButton, Image, Text } from "@chakra-ui/react";
import { BsGlobeAmericas } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGraduationCap, FaLocationDot } from "react-icons/fa6";
import { TimelineCardProps } from "@/resources/TYPES";
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
  index,
}: TimelineCardProps & { index: number }) => {
  return (
    <Flex
      gap={3}
      rounded={"md"}
      pos={"relative"}
      direction={"column"}
      minW={"200px"}
      w={"100%"}
      maxW={"600px"}
      shadow={"lg"}
      borderBottom={"3px solid"}
      borderBottomColor={"accent"}
      p={{ base: "12px", sm: "40px" }}
    >
      <Flex
        px={3}
        py={1}
        align={"center"}
        gap={1}
        roundedStart={"full"}
        pos={"absolute"}
        top={2}
        right={0}
        bgColor={"darker"}
        color={"light"}
        shadow={"md"}
        fontSize={"12px"}
        fontWeight={"500"}
      >
        {type === "Work" ? <MdWork /> : <FaGraduationCap />}
        <Text>{type}</Text>
      </Flex>
      <Flex
        justify={"center"}
        align={"center"}
        w={"30px"}
        h={"30px"}
        bgColor={"darker"}
        color={"light"}
        rounded={"full"}
        pos={"absolute"}
        top={{ base: 12, md: 2 }}
        left={{ base: "auto", md: 2 }}
        right={{ base: 2, md: "auto" }}
        border={"5px solid"}
        borderColor={"accent"}
      >
        <Text fontSize={"12px"}>{index + 1}</Text>
      </Flex>
      {/* Time and Date */}
      <Flex w={"max-content"} pos={"relative"}>
        <Text fontSize={"12px"} fontWeight={"500"} color={"text"} letterSpacing={"1.5px"} mb={"2px"}>
          <Highlight query={dateEnd} styles={{ color: "accent" }}>{`${dateStart} - ${dateEnd}`}</Highlight>
        </Text>
      </Flex>
      {/* Company info */}
      <Flex flex={1} gap={2} direction={{ base: "column", sm: "row" }}>
        {/* Logo of Company */}
        <Flex flex={4} justifyContent={"flex-start"} alignItems={"center"} gap={4}>
          <Image
            w={{ base: "35px", sm: "50px" }}
            bgColor={"white"}
            p={{ base: 1, sm: 2 }}
            rounded={"full"}
            src={logo}
            alt="Autotron Tech Website Logo"
          />
          <Text fontFamily={"Poppins"} fontSize={"14px"} letterSpacing={"1.5px"} fontWeight={600} color={"text"}>
            {title}
          </Text>
        </Flex>
        {/* Details of Company */}
        <Flex gap={2} flex={1} w={"100%"} justifyContent={{ base: "flex-start", sm: "flex-end" }}>
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
          <Text fontFamily={"Poppins"} fontSize={"12px"} letterSpacing={"1.5px"} fontWeight={400}>
            <Highlight
              query={query}
              styles={{
                border: "1px solid",
                borderColor: "accent",
                fontSize: { base: "11px", sm: "12px" },
                fontWeight: "400",
                lineHeight: { base: "32px", sm: "32px" },
                rounded: "full",
                px: { base: "8px", sm: "12px" },
                py: { base: "2px", sm: "3px" },
                mr: { base: "0px", sm: "8px" },
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
