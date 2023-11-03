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

export const ScaleCertificate: string = keyframes`
0%{
  transform:scale(1);
}
10%{
  transform:scale(2);
}
90%{
  transform:scale(2);
}
100%{
  transform:scale(1);
}
`;
