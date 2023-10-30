import { Flex, useDisclosure } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { ScrollContext } from "../../contexts/ScrollContext";
import EmailModal from "../../components/EmailModal/EmailModal";
import ReactGA from "react-ga4";
import IconButtonComp from "../../components/HomePage/IconButtonComp";
import HeadingHome from "../../components/HomePage/HeadingHome";
import DescHome from "../../components/HomePage/DescHome";
import { socialBtnDataCreator } from "../../CONSTANTS";

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
        <Flex direction={{ base: "column", sm: "row" }}>
          <HeadingHome />
        </Flex>
        <Flex transition={"1000"} w={{ base: "95%", sm: "90%", md: "85%", lg: "70%" }}>
          <DescHome />
        </Flex>

        <Flex my={"8"} mx={"2"} gap={"3"}>
          {SocialButtonsData.map((info) => {
            return <IconButtonComp icon={info.icon} tooltip={info.tooltip} label={info.label} onClick={info.onClick} link={info.link} />;
          })}
        </Flex>
      </Flex>
      {/** Email Modal used for different parts */}
      <EmailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Home;