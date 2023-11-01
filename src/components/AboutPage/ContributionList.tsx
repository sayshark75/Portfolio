import { List, ListItem } from "@chakra-ui/react";
import { polishAnim } from "../../animations/NavbarAnimations";
import { ContributionData } from "../../CONSTANTS";
import { fadeRight } from "../../animations/FadeAnimations";

const ContributionList = () => {
  return (
    <List mt={4}>
      {ContributionData.map((info) => {
        return (
          <ListItem
            transition={"400ms"}
            rounded={"full"}
            border={"2px solid #006aff00"}
            px={4}
            py={1}
            opacity={0}
            fontFamily={"Poppins"}
            fontSize={"12px"}
            fontWeight={"300"}
            color={"#fff"}
            mt={1}
            shadow={"xl"}
            cursor={"pointer"}
            bgColor={"#4a4a4a"}
            animation={`${fadeRight} 1s ease-in forwards ${info.delay}`}
            _hover={{ bgColor: "black", color: "white" }}
            _active={{ animation: `${polishAnim} 80ms ease-in-out` }}
          >
            {info.title}
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContributionList;
