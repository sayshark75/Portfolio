import { Flex, useDisclosure } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { ScrollContext } from "../../contexts/ScrollContext";
import EmailModal from "../../components/EmailModal/EmailModal";
import ReactGA from "react-ga4";
import IconButtonComp from "../../components/HomePage/IconButtonComp";
import DescHome from "../../components/HomePage/DescHome";
import { socialBtnDataCreator } from "../../CONSTANTS";
import { nanoid } from "nanoid";
import BigHeading from "../../components/Headings/BigHeading";

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
      <Flex ref={HomeRef} transition={"500ms"} direction={"column"} justifyContent={"center"} alignItems={"center"} w={"100%"} h={"100vh"} gap={"12"}>
        <BigHeading title1="Hi I'm" title2="Sharuk Sayyed" />
        <Flex transition={"1000"} w={{ base: "95%", sm: "90%", md: "85%", lg: "70%" }}>
          <DescHome />
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

export default Home;
