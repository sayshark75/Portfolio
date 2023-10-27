import { keyframes } from "@chakra-ui/react";

export const textShadowsAnimGenerator = (minx: string, miny: string, minblur: string, x: string, y: string, blur: string, color: string): string => {
  return keyframes`
  0%{
    text-shadow:${x} ${y} ${blur} ${color};
  }
  100%{
    text-shadow:${minx} ${miny} ${minblur} ${color};
  }
  `;
};

export const TSAnimWhite = textShadowsAnimGenerator("4px", "4px", "0px", "16px", "-16px", "16px", "#FFFFFF");
export const TSAnimBlue = textShadowsAnimGenerator("4px", "4px", "0px", "-16px", "-16px", "16px", "#006aFF");
export const TSAnimBlueSmall = textShadowsAnimGenerator("2px", "2px", "0px", "-6px", "-6px", "32px", "#000");
