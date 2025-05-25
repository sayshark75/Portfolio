import { Button, Flex, Highlight, Image, Text } from "@chakra-ui/react";
import SmHeading from "../Headings/SmHeading";
import { ProjectDataProps } from "@/resources/TYPES";
import Link from "next/link";
import { MdLock } from "react-icons/md";

const ProjectsCard = ({ live, github, image, workType, heading1, heading2, status, summary, TStack }: ProjectDataProps) => {
  return (
    <Flex
      pos={"relative"}
      transition={"300ms"}
      mb={{ base: 2, sm: 4, md: 2, lg: 8 }}
      mx={{ base: 1, sm: 4, md: 1 }}
      direction={"column"}
      rounded={"lg"}
      overflow={"hidden"}
      bgColor={"primaryLight"}
      minH={"100%"}
    >
      {/* Image of Project */}
      <Image
        src={image}
        w={"100%"}
        h={{ base: "160px", sm: "230px", md: "160px", lg: "170px", xl: "230px" }}
        transition={"7s"}
        objectFit={"cover"}
        objectPosition={"top"}
        _hover={{ objectPosition: "bottom" }}
        alt={`thumbnail of ${heading1}, scrolling automatically on hover.`}
      />

      {/* Details of Project */}
      <Flex transition={"300ms"} direction={"column"} gap={1} p={{ base: "8px 16px", sm: 4 }}>
        <Flex transition={"300ms"} justifyContent={"center"} alignItems={"center"} direction={{ base: "column", sm: "column", md: "row" }}>
          <SmHeading title1={heading1} title2={heading2 || ""} />
        </Flex>
        <Text
          transition={"300ms"}
          fontSize={{ base: "10px", sm: "14px", md: "12px", lg: "10px", xl: "14px" }}
          as={"b"}
          fontFamily={"Poppins"}
          fontWeight={400}
          letterSpacing={"1.5px"}
          color={"text"}
        >
          {summary}
        </Text>
        <Text
          transition={"300ms"}
          justifyContent={"center"}
          gap={"2"}
          fontSize={{ base: "10px", sm: "14px", md: "12px", lg: "10px", xl: "14px" }}
          fontWeight={"semibold"}
          color={"text"}
          minH={"70px"}
        >
          <Highlight
            query={TStack}
            styles={{
              fontFamily: "Poppins",
              fontWeight: 400,
              letterSpacing: "2px",
              color: "text",
              mr: "1",
              px: "2",
              rounded: "full",
              border: "1px solid",
              borderColor: "accent",
              lineHeight: "28px",
            }}
          >
            {TStack.join(" ")}
          </Highlight>
        </Text>
        <Text
          fontFamily={"Poppins"}
          alignSelf={"flex-start"}
          fontWeight={400}
          fontSize={{ base: "10px", sm: "12px" }}
          letterSpacing={"1.5px"}
          bgColor={"accent"}
          color={"#fff"}
          rounded={"full"}
          px={"12px"}
          py={"2px"}
        >
          {workType}
        </Text>
        <Text
          fontFamily={"Poppins"}
          alignSelf={"flex-start"}
          fontWeight={400}
          fontSize={{ base: "10px", sm: "12px" }}
          letterSpacing={"1.5px"}
          bgColor={"accentLight"}
          color={"#fff"}
          rounded={"full"}
          px={"12px"}
          py={"2px"}
        >
          {status}
        </Text>
        <Flex transition={"300ms"} borderRadius={"5"} justifyContent={"space-between"} mt={"2"} alignItems={"center"} gap={"4"} mb={"8px"}>
          <Link href={live} target={"_blank"} rel="noreferrer" style={{ width: "100%" }}>
            <Flex pos={"relative"} width={"100%"}>
              <Button
                pos={"relative"}
                zIndex={2}
                transition={"300ms"}
                rounded={"full"}
                fontSize={{ base: "14px", sm: "16px" }}
                fontWeight={{ base: "300", sm: "400" }}
                width={"7rem"}
                color={"#fff"}
                overflow={"hidden"}
                letterSpacing={"1.5px"}
                _active={{ transform: "translateY(10px)" }}
                bgColor={"accent"}
                _hover={{
                  color: "accent",
                  _after: {
                    w: "100%",
                    left: "0px",
                    border: "1px solid",
                    borderColor: "accent",
                  },
                }}
                _after={{
                  content: '"."',
                  color: "transparent",
                  w: "0px",
                  minH: "100%",
                  pos: "absolute",
                  top: "0px",
                  right: "0px",
                  zIndex: -1,
                  transition: "300ms",
                  bgColor: "primary",
                  rounded: "full",
                  border: "0px solid",
                  borderColor: "accent",
                }}
              >
                View Page
              </Button>
            </Flex>
          </Link>

          <Link href={github ? github : "#"} target={"_blank"} rel="noreferrer">
            <Flex pos={"relative"}>
              <Button
                disabled={!github}
                pos={"relative"}
                zIndex={2}
                transition={"300ms"}
                rounded={"full"}
                overflow={"hidden"}
                fontSize={{ base: "14px", sm: "16px" }}
                fontWeight={{ base: "300", sm: "400" }}
                width={"7rem"}
                color={"#fff"}
                letterSpacing={"1.5px"}
                _active={{ transform: "translateY(10px)" }}
                bgColor={"accent"}
                _hover={{
                  color: "accent",
                  _after: {
                    w: "100%",
                    left: "0px",
                    border: "1px solid",
                    borderColor: "accent",
                  },
                }}
                _after={{
                  content: '"."',
                  color: "transparent",
                  w: "0px",
                  minH: "100%",
                  pos: "absolute",
                  top: "0px",
                  right: "0px",
                  zIndex: -1,
                  transition: "300ms",
                  bgColor: "primary",
                  rounded: "full",
                  border: "0px solid",
                  borderColor: "accent",
                }}
              >
                Github {github ? "" : <MdLock />}
              </Button>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectsCard;
