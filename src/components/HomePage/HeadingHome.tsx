import { Highlight, Text } from "@chakra-ui/react";
import { TSAnimBlue, TSAnimWhite } from "../../animations/HomeAnimations";

const HeadingHome = () => {
  return (
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
        styles={{
          color: "#fffffd",
          textShadow: ["2px 2px 0px #006aff", "3px 3px 0px #006aff", "4px 4px 0px #006aff"],
          animation: `${TSAnimBlue} 1s ease-out `,
        }}
      >
        Hi, I'm Sayyed Sharuk
      </Highlight>
    </Text>
  );
};

export default HeadingHome;
