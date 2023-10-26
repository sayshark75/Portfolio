import { Button, SlideFade, keyframes } from "@chakra-ui/react";

type Props = {
  title: string;
  onClick: () => void;
  x: string;
  y: string;
};

const NavButton = ({ title, onClick, x, y }: Props) => {
  const polishAnim: string = keyframes`
  0%{
    background: linear-gradient(142deg, #0064FF 20%, rgba(149,202,167,0) 50%, rgba(0,129,43,0) 100%);
  }
  50%{
    background: linear-gradient(142deg, rgba(149,202,167,0) 0%, rgba(149,202,167,0) 31%, #003aff 47%, rgba(145,200,164,0) 63%, rgba(0,129,43,0) 100%);
  }
  100%{
    background: linear-gradient(311deg, #0064FF 20%, rgba(149,202,167,0) 50%, rgba(0,129,43,0) 100%);
  }
  `;
  return (
    <SlideFade in={true} offsetY={y} offsetX={x}>
      <Button
        onClick={onClick}
        bgColor={"#2a2a2a"}
        color={"#FFFFFF"}
        border={"2px solid #006aff"}
        rounded={"full"}
        h={"25px"}
        transition={"200ms"}
        fontSize={"12px"}
        fontFamily={"Montserrat"}
        _hover={{
          backgroundColor: "transparent",
        }}
        _active={{
          transform: "translateY(4px)",
          backgroundColor: "transparent",
          animation: `${polishAnim} 80ms ease-in-out`,
          color: "#fff",
          borderColor: "#006aff",
          boxShadow: "0px 0px 8px #ffffff77",
        }}
      >
        {title}
      </Button>
    </SlideFade>
  );
};

export default NavButton;
