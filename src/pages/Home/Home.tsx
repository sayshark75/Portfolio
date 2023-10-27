import { Flex, Heading, Text, Tooltip, IconButton, useDisclosure } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { VscGithub } from "react-icons/vsc";
import { MdAlternateEmail, MdCall, MdColorLens, MdMyLocation } from "react-icons/md";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { githubLink, linkedInLink, locationLink, phoneLink, twitterLink } from "../../sources/Links";
import { ScrollContext } from "../../contexts/ScrollContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import EmailModal from "../../components/EmailModal/EmailModal";
import { BlueTheme } from "../../themes/BlueTheme";
import { GreenTheme } from "../../themes/GreenTheme";
import { OrangeTheme } from "../../themes/OrangeTheme";
import { PurpleTheme } from "../../themes/PurpleTheme";
import { RedTheme } from "../../themes/RedTheme";
import changeThemeMeta from "../../helpers/MobileChromeTheme";
import ReactGA from "react-ga4";

const Home = () => {
  const scrollContext = useContext(ScrollContext);
  const themeContext = useContext(ThemeContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/", title: "Visited Portfolio" });
  }, []);

  if (!themeContext || !scrollContext) {
    return;
  }

  const { handleThemeChange } = themeContext;
  const { HomeRef } = scrollContext;

  return (
    <>
      <Flex ref={HomeRef} transition={"500ms"} direction={"column"} justifyContent={"center"} alignItems={"center"} w={"100%"} h={"100vh"} gap={"12"}>
        <Flex direction={{ base: "column", sm: "row" }}>
          <Heading transition={"500ms"} fontSize={{ base: "34px", sm: "40px", md: "64px", lg: "86", xl: "108px" }} color={"textPrimary"}>
            Hi, I'm&nbsp;
          </Heading>

          <Heading transition={"500ms"} fontSize={{ base: "34px", sm: "40px", md: "64px", lg: "86", xl: "108px" }} color={"textSecondary"}>
            Sayyed Sharuk
          </Heading>
        </Flex>
        <Flex transition={"1000"} w={{ base: "95%", sm: "90%", md: "85%", lg: "70%" }}>
          <Text as={"b"} transition={"500ms"} color={"textPrimary"} textAlign={"justify"} m={["4", "8"]}>
            A Full Stack Developer who enjoys solving problems and building quality projects. With a diverse set of skills and technologies, Can develop robust and efficient
            products. Keep up with the latest advancements in the field, and work well with teams to deliver the best possible results.
          </Text>
        </Flex>
        <Flex gap={2}>
          <IconButton
            aria-label="Change Theme Color to blue"
            fontSize={"2xl"}
            rounded={"50%"}
            onClick={() => {
              ReactGA.event({
                category: "Theme Blue",
                action: "Changed to Blue",
              });
              handleThemeChange(BlueTheme);
              changeThemeMeta("#0B5FD8");
            }}
            icon={<MdColorLens />}
            bgColor={"blue.500"}
          />
          <IconButton
            aria-label="Change Theme Color to green"
            fontSize={"2xl"}
            rounded={"50%"}
            onClick={() => {
              ReactGA.event({
                category: "Theme Green",
                action: "Changed to Green",
              });
              handleThemeChange(GreenTheme);
              changeThemeMeta("#21D80B");
            }}
            icon={<MdColorLens />}
            bgColor={"green.500"}
          />
          <IconButton
            aria-label="Change Theme Color to orange"
            fontSize={"2xl"}
            rounded={"50%"}
            onClick={() => {
              ReactGA.event({
                category: "Theme Orange",
                action: "Changed to Orange",
              });
              handleThemeChange(OrangeTheme);
              changeThemeMeta("#FF8300");
            }}
            icon={<MdColorLens />}
            bgColor={"orange.500"}
          />
          <IconButton
            aria-label="Change Theme Color to purple"
            fontSize={"2xl"}
            rounded={"50%"}
            onClick={() => {
              ReactGA.event({
                category: "Theme Purple",
                action: "Changed to Purple",
              });
              handleThemeChange(PurpleTheme);
              changeThemeMeta("#A200FF");
            }}
            icon={<MdColorLens />}
            bgColor={"purple.500"}
          />
          <IconButton
            aria-label="Change Theme Color to red"
            fontSize={"2xl"}
            rounded={"50%"}
            onClick={() => {
              ReactGA.event({
                category: "Theme Red",
                action: "Changed to Red",
              });
              handleThemeChange(RedTheme);
              changeThemeMeta("#FF0000");
            }}
            icon={<MdColorLens />}
            bgColor={"red.500"}
          />
        </Flex>
        <Flex my={"8"} mx={"2"} gap={"3"}>
          <Tooltip bg={"buttonText"} color={"blackColor"} mt={"4"} transition={"500ms"} label={"Github"}>
            <a href={githubLink} target={"_blank"} rel="noreferrer">
              <IconButton
                borderRadius={"3"}
                size={"sm"}
                mx={{ base: "1px", sm: "2", md: "3", lg: "5", xl: "6" }}
                color={"iconBtn"}
                bgColor={"iconBtnBg"}
                transition={"700ms"}
                _hover={{ bgColor: "iconBtnBgHover", color: "iconBtnHover" }}
                fontSize={"20px"}
                aria-label="Visit my Link of github"
                icon={<VscGithub />}
              />
            </a>
          </Tooltip>
          <Tooltip bg={"buttonText"} color={"blackColor"} mt={"4"} transition={"500ms"} label={"Email"}>
            <IconButton
              borderRadius={"3"}
              size={"sm"}
              mx={{ base: "1px", sm: "2", md: "3", lg: "5", xl: "6" }}
              color={"iconBtn"}
              bgColor={"iconBtnBg"}
              transition={"700ms"}
              _hover={{ bgColor: "iconBtnBgHover", color: "iconBtnHover" }}
              fontSize={"20px"}
              aria-label="Visit my Link of github"
              onClick={onOpen}
              icon={<MdAlternateEmail />}
            />
          </Tooltip>
          <Tooltip bg={"buttonText"} color={"blackColor"} mt={"4"} transition={"500ms"} label={"Phone"}>
            <a href={phoneLink} target={"_blank"} rel="noreferrer">
              <IconButton
                borderRadius={"3"}
                size={"sm"}
                mx={{ base: "1px", sm: "2", md: "3", lg: "5", xl: "6" }}
                color={"iconBtn"}
                bgColor={"iconBtnBg"}
                transition={"700ms"}
                _hover={{ bgColor: "iconBtnBgHover", color: "iconBtnHover" }}
                fontSize={"20px"}
                aria-label="Visit my Link of github"
                icon={<MdCall />}
              />
            </a>
          </Tooltip>
          <Tooltip bg={"buttonText"} color={"blackColor"} mt={"4"} transition={"500ms"} label={"LinkedIn"}>
            <a href={linkedInLink} target={"_blank"} rel="noreferrer">
              <IconButton
                borderRadius={"3"}
                size={"sm"}
                mx={{ base: "1px", sm: "2", md: "3", lg: "5", xl: "6" }}
                color={"iconBtn"}
                bgColor={"iconBtnBg"}
                transition={"700ms"}
                _hover={{ bgColor: "iconBtnBgHover", color: "iconBtnHover" }}
                fontSize={"20px"}
                aria-label="Visit my Link of github"
                icon={<BsLinkedin />}
              />
            </a>
          </Tooltip>
          <Tooltip bg={"buttonText"} color={"blackColor"} mt={"4"} transition={"500ms"} label={"Twitter"}>
            <a href={twitterLink} target={"_blank"} rel="noreferrer">
              <IconButton
                borderRadius={"3"}
                size={"sm"}
                mx={{ base: "1px", sm: "2", md: "3", lg: "5", xl: "6" }}
                color={"iconBtn"}
                bgColor={"iconBtnBg"}
                transition={"700ms"}
                _hover={{ bgColor: "iconBtnBgHover", color: "iconBtnHover" }}
                fontSize={"20px"}
                aria-label="Visit my Link of github"
                icon={<BsTwitter />}
              />
            </a>
          </Tooltip>
          <Tooltip bg={"buttonText"} color={"blackColor"} mt={"4"} transition={"500ms"} label={"Location"}>
            <a href={locationLink} target={"_blank"} rel="noreferrer">
              <IconButton
                borderRadius={"3"}
                size={"sm"}
                mx={{ base: "1px", sm: "2", md: "3", lg: "5", xl: "6" }}
                color={"iconBtn"}
                bgColor={"iconBtnBg"}
                transition={"700ms"}
                _hover={{ bgColor: "iconBtnBgHover", color: "iconBtnHover" }}
                fontSize={"20px"}
                aria-label="Visit my Link of github"
                icon={<MdMyLocation />}
              />
            </a>
          </Tooltip>
        </Flex>
      </Flex>
      {/** Email Modal used for different parts */}
      <EmailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Home;
