import { keyframes } from "@chakra-ui/react";

export const polishAnim: string = keyframes`
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
export const borderAnim = keyframes`
0%{
  border-bottom:2px solid #006aff00;
}
12%{
  border-bottom:2px solid #006aff;
}
25%{
  border-right:2px solid #006aff;
}
50%{
  border-top:2px solid #006aff;
}
75%{
  border-left:2px solid #006aff;
}
100%{
  border-bottom:2px solid #006aff00;
}
`;
export const runAnim: string = keyframes`
  0%{
    text-shadow: 16px 0px 32px #009aFF;
    box-shadow: 16px 0px 32px #009aFF;
    border:2px solid #009aff;
  }
  50%{
    text-shadow: 28px 0px 0px #000000;
    box-shadow: 20px 0px 0px #009aFF;
    border:2px solid #009aff00;
  }
  100%{
    text-shadow: 16px 0px 32px #009aFF;
    box-shadow: 16px 0px 32px #009aFF;
    border:2px solid #009aff;
  }
  `;
