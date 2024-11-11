import { Flex, useDisclosure } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { ScrollContext } from "../../contexts/ScrollContext";
import EmailModal from "../../components/EmailModal/EmailModal";
import IconButtonComp from "../../components/HomePage/IconButtonComp";
import DescHome from "../../components/HomePage/DescHome";
import BigHeading from "../../components/Headings/BigHeading";
import ThemeContainer from "../../components/ThemesComponent/ThemeContainer";
import { socialBtnDataCreator } from "../../sources/SocialButtonsDataGen";
import ReactGA from "react-ga4";

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

  const SocialButtonsData = socialBtnDataCreator(onOpen);

  return (
    <>
      <Flex
        ref={HomeRef}
        transition={"500ms"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        maxW={"1440px"}
        mx={"auto"}
        minH={"100vh"}
        gap={["6", "12"]}
      >
        <BigHeading title1="Hi I'm" title2="Sharuk Sayyed" />
        <Flex w={{ base: "95%", sm: "90%", md: "85%", lg: "70%" }}>
          <DescHome />
        </Flex>
        <ThemeContainer />

        <Flex mb={"12"} mx={"2"} gap={["2", "3"]}>
          {SocialButtonsData.map((info, index) => {
            return (
              <IconButtonComp
                key={`social-button-key-${index}`}
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

export default Home;
