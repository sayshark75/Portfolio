import { keyframes } from "@chakra-ui/react";

export const fadeLeft: string = keyframes`
0%{
  opacity:0;
  transform:translateX(-80px);
}
100%{
  opacity:1;
  transform:translateX(0px);
}
`;

export const fadeTop: string = keyframes`
0%{
  opacity:0;
  transform:translateY(-80px);
}
100%{
  opacity:1;
  transform:translateY(0px);
}
`;

export const fadeRight: string = keyframes`
0%{
  opacity:0;
  transform:translateX(80px);
}
100%{
  opacity:1;
  transform:translateX(0px);
}
`;

export const fadeBottom: string = keyframes`
0%{
  opacity:0;
  transform:translateY(80px);
}
100%{
  opacity:1;
  transform:translateY(0px);
}
`;
