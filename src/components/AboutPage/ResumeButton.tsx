import { Button, Flex } from "@chakra-ui/react";
import { ScalePing } from "../../animations/ScaleAnimations";
import { resumeDownload, resumelink } from "../../sources/Links";

const ResumeButton = () => {
  const handleResumeDownload = () => {
    window.open(resumelink, "_blank");
  };
  return (
    <a href={resumeDownload} onClick={handleResumeDownload}>
      <Flex pos={"relative"}>
        <Button
          fontFamily={"Poppins"}
          fontSize={["12px", "14px"]}
          fontWeight={400}
          letterSpacing={"2px"}
          animation={`${ScalePing} 500ms ease 600ms forwards`}
          bgColor={"accent"}
          opacity={0}
          rounded={"base"}
          color={"light"}
          transition={"200ms"}
          _hover={{
            color: "text",
            _after: {
              w: "100%",
              left: "0px",
              border: "1px solid",
              borderColor: "accent",
            },
          }}
          _active={{ bgColor: "darker" }}
          _after={{
            content: '"."',
            w: "0px",
            rounded: "base",
            transition: "300ms",
            minH: "100%",
            color: "transparent",
            bgColor: "primary",
            pos: "absolute",
            top: "0px",
            right: "0px",
            zIndex: -1,
            border: "0px solid",
            borderColor: "transparent",
          }}
        >
          View Resume
        </Button>
      </Flex>
    </a>
  );
};

export default ResumeButton;
