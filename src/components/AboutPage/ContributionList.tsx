import { List, ListItem } from "@chakra-ui/react";
import { borderAnim, polishAnim } from "../../animations/NavbarAnimations";
import { ContributionData } from "../../CONSTANTS";

const ContributionList = () => {
  return (
    <List mt={4}>
      {ContributionData.map((info) => {
        return (
          <ListItem
            transition={"200ms"}
            rounded={"full"}
            border={"2px solid #006aff00"}
            px={4}
            py={1}
            fontFamily={"Poppins"}
            fontSize={"12px"}
            fontWeight={"300"}
            color={"#fff"}
            mt={1}
            shadow={"xl"}
            bgColor={"#4a4a4a"}
            animation={`${borderAnim} 1s ease-out`}
            _active={{ animation: `${polishAnim} 80ms ease-in-out` }}
          >
            {info}
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContributionList;
