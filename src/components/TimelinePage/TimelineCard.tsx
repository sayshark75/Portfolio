import { Flex, Highlight, IconButton, Image, Text } from "@chakra-ui/react";
import { BsGlobeAmericas } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { TimelineCardProps } from "../../TYPES";

const TimelineCard = ({ linkedin, website, logo, title, role, query, highlight }: TimelineCardProps) => {
  const handleVisitLinkedIn = (type: string) => {
    if (type === "linkedin") {
      window.open(linkedin, "_blank");
    } else if (type === "website") {
      window.open(website, "_blank");
    }
  };

  return (
    <Flex gap={3} rounded={"md"} direction={"column"} minW={"200px"} w={"100%"} maxW={"750px"}>
      {/* Company info */}
      <Flex flex={1} gap={2} direction={["column", "row"]}>
        {/* Logo of Company */}
        <Flex flex={4} justifyContent={"flex-start"} alignItems={"center"} gap={4}>
          <Image w={["35px", "50px"]} bgColor={"#fff"} p={[1, 2]} rounded={"full"} src={logo} alt="Autotron Tech Website Logo" />
          <Text style={{ fontFamily: "Poppins", fontSize: "12px", letterSpacing: "2px", fontWeight: 300 }} color={"#fff"}>
            {title}
          </Text>
        </Flex>
        {/* Details of Company */}
        <Flex gap={2} flex={1} w={"100%"} justifyContent={["flex-start", "flex-end"]}>
          {linkedin && (
            <IconButton
              size={"xs"}
              rounded={"full"}
              bgColor={"#2a2a2a"}
              color={"#006aff"}
              _active={{ color: "#fff", bgColor: "#006aff" }}
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
              bgColor={"#2a2a2a"}
              color={"#006aff"}
              _active={{ color: "#fff", bgColor: "#006aff" }}
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
        <Text style={{ fontFamily: "Poppins", fontSize: "12px", letterSpacing: "2px", fontWeight: 300 }} color={"#fff"}>
          {role}
        </Text>
        <Flex direction={"column"}>
          <Text style={{ fontFamily: "Poppins", fontSize: "12px", letterSpacing: "2px", fontWeight: 300 }} color={"#fff"}>
            Skills:
          </Text>
          <Text fontFamily={"Poppins"} fontSize={"12px"} letterSpacing={"2px"} fontWeight={400}>
            <Highlight
              query={query}
              styles={{
                border: "1px solid #006aff",
                fontSize: ["10px", "12px"],
                fontWeight: "300",
                lineHeight: "22px",
                rounded: "full",
                px: ["4px", "12px"],
                mr: ["0px", "8px"],
                color: "#fff",
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
