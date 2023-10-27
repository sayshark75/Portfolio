import { Flex, Heading, Text, Tooltip, IconButton, useDisclosure, Highlight } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { VscGithub } from "react-icons/vsc";
import { MdAlternateEmail, MdCall, MdMyLocation } from "react-icons/md";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { githubLink, linkedInLink, locationLink, phoneLink, twitterLink } from "../../sources/Links";
import { ScrollContext } from "../../contexts/ScrollContext";
import EmailModal from "../../components/EmailModal/EmailModal";
import ReactGA from "react-ga4";
import { TSAnimBlue, TSAnimBlueSmall, TSAnimWhite } from "../../animations/HomeAnimations";
import { borderAnim, polishAnim } from "../../animations/NavbarAnimations";

const Home = () => {
  const scrollContext = useContext(ScrollContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/", title: "Visited Portfolio" });
  }, []);

  if (!scrollContext) {
    return;
  }

  const { HomeRef } = scrollContext;

  const SocialButtonsData = [
    {
      link: githubLink,
      icon: <VscGithub />,
      tooltip: "GitHub",
      label: "Visit my Link of github",
      onClick: () => {},
    },
    {
      link: "",
      icon: <MdAlternateEmail />,
      tooltip: "Email",
      label: "Compose an Email to Me?",
      onClick: onOpen,
    },
    {
      link: phoneLink,
      icon: <MdCall />,
      tooltip: "Phone",
      label: "Call on My Number",
      onClick: () => {},
    },
    {
      link: linkedInLink,
      icon: <BsLinkedin />,
      tooltip: "LinkedIn",
      label: "Visit my LinkedIn Profile",
      onClick: () => {},
    },
    {
      link: twitterLink,
      icon: <BsTwitter />,
      tooltip: "Twitter",
      label: "Visit my Link of Twitter Profile",
      onClick: () => {},
    },
    {
      link: locationLink,
      icon: <MdMyLocation />,
      tooltip: "Location",
      label: "Checkout my location on Google Maps",
      onClick: () => {},
    },
  ];

  return (
    <>
      <Flex ref={HomeRef} transition={"500ms"} direction={"column"} justifyContent={"center"} alignItems={"center"} w={"100%"} h={"100vh"} gap={"12"}>
        <Flex direction={{ base: "column", sm: "row" }}>
          <Text
            fontFamily={"Poppins"}
            cursor={"pointer"}
            fontWeight={600}
            transition={"500ms"}
            animation={`${TSAnimWhite} 1s ease-out `}
            textShadow={["2px 2px 0px #fff", "3px 3px 0px #fff", "4px 4px 0px #fff"]}
            fontSize={["34px", "40px", "64px", "86px", "108px"]}
            color={"#006aFF"}
            textAlign={"center"}
          >
            <Highlight
              query={"Hi, I'm"}
              styles={{ color: "#fffffd", textShadow: ["2px 2px 0px #006aff", "3px 3px 0px #006aff", "4px 4px 0px #006aff"], animation: `${TSAnimBlue} 1s ease-out ` }}
            >
              Hi, I'm Sayyed Sharuk
            </Highlight>
          </Text>
        </Flex>
        <Flex transition={"1000"} w={{ base: "95%", sm: "90%", md: "85%", lg: "70%" }}>
          <Text
            as={"b"}
            transition={"500ms"}
            color={"#FFFFFF"}
            fontWeight={400}
            fontFamily={"Poppins"}
            textAlign={"justify"}
            textShadow={"2px 2px 0px #006aff"}
            m={["4", "8"]}
            animation={`${TSAnimBlueSmall} 1s ease-out forwards`}
          >
            A Full Stack Developer who enjoys solving problems and building quality projects. With a diverse set of skills and technologies, Can develop robust and efficient
            products. Keep up with the latest advancements in the field, and work well with teams to deliver the best possible results.
          </Text>
        </Flex>

        <Flex my={"8"} mx={"2"} gap={"3"}>
          {SocialButtonsData.map((info) => {
            return info.link ? (
              <Tooltip bg={"#FFF"} color={"#000"} mt={"4"} transition={"500ms"} label={info.tooltip}>
                <a href={info.link} target={"_blank"} rel="noreferrer">
                  <IconButton
                    rounded={"full"}
                    size={"sm"}
                    mx={["1px", "2", "3", "5", "6"]}
                    color={"#fff"}
                    bgColor={"#4a4a4a"}
                    animation={`${polishAnim} 200ms ease-in-out`}
                    shadow={"dark-lg"}
                    transition={"700ms"}
                    _hover={{ bgColor: "iconBtnBgHover", color: "iconBtnHover", animation: `${borderAnim} 1s ease-in-out` }}
                    border={"2px solid #00000000"}
                    _active={{ animation: `${borderAnim} 1s ease-in-out` }}
                    fontSize={"20px"}
                    aria-label={info.label}
                    icon={info.icon}
                  />
                </a>
              </Tooltip>
            ) : (
              <Tooltip bg={"#FFF"} color={"#000"} mt={"4"} transition={"500ms"} label={info.tooltip}>
                <IconButton
                  rounded={"full"}
                  size={"sm"}
                  mx={{ base: "1px", sm: "2", md: "3", lg: "5", xl: "6" }}
                  color={"#fff"}
                  bgColor={"#4a4a4a"}
                  shadow={"dark-lg"}
                  animation={`${polishAnim} 200ms ease-in-out`}
                  transition={"700ms"}
                  _hover={{ bgColor: "iconBtnBgHover", color: "iconBtnHover", animation: `${borderAnim} 1s ease-in-out` }}
                  border={"2px solid #00000000"}
                  fontSize={"20px"}
                  aria-label={info.label}
                  onClick={info.onClick}
                  icon={info.icon}
                />
              </Tooltip>
            );
          })}
        </Flex>
      </Flex>
      {/** Email Modal used for different parts */}
      <EmailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Home;
