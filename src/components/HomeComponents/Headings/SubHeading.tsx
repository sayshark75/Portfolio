import { Flex, Highlight } from "@chakra-ui/react";

import { MotionText } from "@/libs/motionComponents";

const SubHeading = ({ title1, title2 }: { title1: string; title2: string }) => {
  return (
    <Flex pos={"relative"} zIndex={2}>
      <MotionText
        initial={{ opacity: 0, y: "-80px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 0.9, y: "-20px" }}
        fontFamily={"Poppins"}
        fontSize={["18px", "18px", "22px", "22px", "24px"]}
        fontWeight={["500", "400", "500"]}
        color={"accent"}
        cursor={"pointer"}
        rounded={"full"}
      >
        <Highlight query={title2} styles={{ color: "text" }}>
          {`${title1} ${title2}`}
        </Highlight>
      </MotionText>
    </Flex>
  );
};

export default SubHeading;
