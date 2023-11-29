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
          <Image w={["35px", "50px"]} bgColor={"light"} p={[1, 2]} rounded={"full"} src={logo} alt="Autotron Tech Website Logo" />
          <Text style={{ fontFamily: "Poppins", fontSize: "12px", letterSpacing: "2px", fontWeight: 300 }} color={"light"}>
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
              _active={{ color: "light", bgColor: "accent" }}
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
              _active={{ color: "light", bgColor: "accent" }}
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
        <Text style={{ fontFamily: "Poppins", fontSize: "12px", letterSpacing: "2px", fontWeight: 300 }} color={"light"}>
          {role}
        </Text>
        <Flex direction={"column"}>
          <Text style={{ fontFamily: "Poppins", fontSize: "12px", letterSpacing: "2px", fontWeight: 300 }} color={"light"}>
            Skills:
          </Text>
          <Text fontFamily={"Poppins"} fontSize={"12px"} letterSpacing={"2px"} fontWeight={400}>
            <Highlight
              query={query}
              styles={{
                border: "1px solid",
                borderColor: "accent",
                fontSize: ["10px", "12px"],
                fontWeight: "300",
                lineHeight: "22px",
                rounded: "full",
                px: ["4px", "12px"],
                mr: ["0px", "8px"],
                color: "light",
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
