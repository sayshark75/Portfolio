import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { Links } from "@/resources/CONSTANTS";
import { MotionButton } from "@/libs/motionComponents";

const ResumeButton = () => {
  const { resumeDownload, resumelink } = Links;
  const handleResumeDownload = () => {
    window.open(resumelink, "_blank");
  };
  return (
    <Link href={resumeDownload} onClick={handleResumeDownload}>
      <Flex pos={"relative"}>
        <MotionButton
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
          fontFamily={"Poppins"}
          fontSize={["12px", "14px"]}
          fontWeight={400}
          letterSpacing={"1.5px"}
          bgColor={"accent"}
          opacity={0}
          rounded={"base"}
          color={"light"}
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
        </MotionButton>
      </Flex>
    </Link>
  );
};

export default ResumeButton;
