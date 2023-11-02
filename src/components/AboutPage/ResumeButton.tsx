import { Button } from "@chakra-ui/react";
import { ScalePing } from "../../animations/ScaleAnimations";
import { resumeDownload, resumelink } from "../../sources/Links";
import ReactGA from "react-ga4";

const ResumeButton = () => {
  const handleResumeDownload = () => {
    window.open(resumelink, "_blank");
    ReactGA.event({
      category: "Resume",
      action: "Downloaded the Resume",
    });
  };
  return (
    <a href={resumeDownload} onClick={handleResumeDownload}>
      <Button
        fontFamily={"Poppins"}
        fontSize={["12px", "14px"]}
        fontWeight={400}
        letterSpacing={"2px"}
        animation={`${ScalePing} 1s ease-in 2s forwards`}
        bgColor={"#006aff"}
        opacity={0}
        color={"#fff"}
        transition={"200ms"}
        _hover={{}}
        _active={{ bgColor: "#000" }}
      >
        View Resume
      </Button>
    </a>
  );
};

export default ResumeButton;