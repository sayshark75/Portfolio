import { keyframes } from "@emotion/react";

export const ScalePing: string = keyframes`
0%{
  opacity:0;
  transform:scale(1);
}
30%{
  opacity:1;
  transform:scale(.6);
}
100%{
  opacity:1;
  transform:scale(1);
}
`;
