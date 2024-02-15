import { List, ListItem } from "@chakra-ui/react";
import { polishAnim } from "../../animations/NavbarAnimations";
import { ContributionData } from "../../CONSTANTS";
import { fadeRight } from "../../animations/FadeAnimations";

const ContributionList = () => {
  return (
    <List mt={4}>
      {ContributionData.map((info, index) => {
        return (
          <ListItem
            key={`contribution-key-${index}`}
            transition={"400ms"}
            rounded={"full"}
            border={"2px solid"}
            borderColor={"transparent"}
            px={4}
            py={1}
            opacity={0}
            fontFamily={"Poppins"}
            fontSize={"12px"}
            fontWeight={"400"}
            color={"text"}
            mt={1}
            shadow={"xl"}
            cursor={"pointer"}
            bgColor={"primaryLighter"}
            animation={`${fadeRight} 300ms ease forwards ${info.delay}`}
            _hover={{ bgColor: "light", color: "text" }}
            _active={{ animation: `${polishAnim} 80ms ease` }}
          >
            {info.title}
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContributionList;
