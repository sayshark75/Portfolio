import { Flex, Highlight, IconButton, Image, Text } from "@chakra-ui/react";
import MdHeading from "../../components/Headings/MdHeading";
import { TopBarLinkedIn, TopBarLogo, TopBarWebsite } from "../../sources/Links";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGlobeAmericas } from "react-icons/bs";

const Experience = () => {
  const handleVisitLinkedIn = (type: string) => {
    if (type === "linkedin") {
      window.open(TopBarLinkedIn, "_blank");
    } else if (type === "website") {
      window.open(TopBarWebsite, "_blank");
    }
  };
  return (
    <Flex justify={"center"} alignItems={"center"} direction={"column"} w={"80%"} m={"auto"} gap={"4"} pt={"5"} mt={"5"}>
      <MdHeading title1="My" title2="Experience" />
      {/* Experience Card */}
      <Flex gap={3} rounded={"md"} shadow={"xl"} minW={"280px"} w={"100%"} bgColor={"#3a3a3a"} p={4} maxW={"750px"}>
        {/* Company info */}
        <Flex direction={"column"} flex={1} gap={4} borderRight={"1px solid #aaaaaa"}>
          {/* Logo of Company */}
          <Flex justifyContent={"flex-start"} alignItems={"center"} gap={4}>
            <Image w={"60px"} rounded={"full"} src={TopBarLogo} alt="Autotron Tech Website Logo" />
            <Text fontFamily={"Poppins"} fontSize={"18px"} letterSpacing={"2px"} fontWeight={500} color={"#fff"}>
              TopBar Company
            </Text>
          </Flex>
          {/* Details of Company */}
          <Text fontFamily={"Poppins"} fontSize={"14px"} letterSpacing={"2px"} fontWeight={400} color={"#fff"}>
            Design, development and marketing firm helping brands, businesses, startups and corporates with their online presence and software needs.
          </Text>
          <Flex gap={4}>
            <IconButton
              rounded={"full"}
              bgColor={"#2a2a2a"}
              color={"#006aff"}
              _active={{ color: "#fff", bgColor: "#006aff" }}
              _hover={{}}
              icon={<FaLinkedinIn />}
              onClick={() => handleVisitLinkedIn("linkedin")}
              aria-label="Linked-In Icon, to Visit LinkedIn Page of TopBar Company"
            />
            <IconButton
              rounded={"full"}
              bgColor={"#2a2a2a"}
              color={"#006aff"}
              _active={{ color: "#fff", bgColor: "#006aff" }}
              _hover={{}}
              icon={<BsGlobeAmericas />}
              onClick={() => handleVisitLinkedIn("website")}
              aria-label="Globe Icon, to Visit Web Page of TopBar Company"
            />
          </Flex>
        </Flex>
        {/* My role */}
        <Flex flex={1} direction={"column"} gap={4}>
          {/* Date */}
          <Text fontFamily={"Poppins"} fontSize={"14px"} letterSpacing={"2px"} fontWeight={400} color={"#fff"}>
            Aug 2023 - Currently Working
          </Text>
          <Text fontFamily={"Poppins"} fontSize={"14px"} letterSpacing={"2px"} fontWeight={400} color={"#fff"}>
            Full Stack Web Developer
          </Text>
          <Flex gap={4}>
            <Text fontFamily={"Poppins"} fontSize={"14px"} letterSpacing={"2px"} fontWeight={400} color={"#fff"}>
              Skills:
            </Text>
            <Flex>
              <Text fontFamily={"Poppins"} fontSize={"14px"} letterSpacing={"2px"} fontWeight={400}>
                <Highlight
                  query={["JavaScript", "React", "Axios", "TypeScript", "Scss", "API's", "Node", "Express", "MongoDB", "Google Cloud", "AWS EC2 ", "AWS S3"]}
                  styles={{ border: "1px solid #006aff", fontSize: "12px", fontWeight: "300", lineHeight: "22px", rounded: "full", px: "12px", mr: "8px", color: "#fff" }}
                >
                  JavaScript React Axios TypeScript Scss API's Node Express MongoDB Google Cloud AWS EC2 AWS S3
                </Highlight>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Experience;
