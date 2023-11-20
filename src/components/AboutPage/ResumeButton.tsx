import { Button } from "@chakra-ui/react";
import { ScalePing } from "../../animations/ScaleAnimations";
import { resumeDownload, resumelink } from "../../sources/Links";

const ResumeButton = () => {
  const handleResumeDownload = () => {
    window.open(resumelink, "_blank");
  };
  return (
    <a href={resumeDownload} onClick={handleResumeDownload}>
      <Button
        fontFamily={"Poppins"}
        fontSize={["12px", "14px"]}
        fontWeight={400}
        letterSpacing={"2px"}
        animation={`${ScalePing} 1s ease-in 2s forwards`}
        bgColor={"accent"}
        opacity={0}
        color={"light"}
        transition={"200ms"}
        _hover={{}}
        _active={{ bgColor: "dark" }}
      >
        View Resume
      </Button>
    </a>
  );
};

export default ResumeButton;
