import { ThemeConfig, extendTheme } from "@chakra-ui/react";

export const blueTheme: ThemeConfig = extendTheme({
  semanticTokens: {
    colors: {
      darker: {
        default: "#000",
        _dark: "#000",
      },
      light: {
        default: "#fff",
        _dark: "#fff",
      },
      text: {
        default: "#CCC",
        _dark: "#CCC",
      },
      placeholder: {
        default: "#aaa",
        _dark: "#aaa",
      },
      primary: {
        default: "#212121",
        _dark: "#212121",
      },
      primaryLight: {
        default: "#3a3a3a",
        _dark: "#3a3a3a",
      },
      primaryLighter: {
        default: "#4a4a4a",
        _dark: "#4a4a4a",
      },
      accent: {
        default: "#006aff",
        _dark: "#0954BD",
      },
      accentLight: {
        default: "#009aff",
        _dark: "#009aff",
      },
      accentDark: {
        default: "#003aff",
        _dark: "#003aff",
      },
      themeBlue: {
        default: "#006aff",
        _dark: "#0954BD",
      },
      themeRed: {
        default: "#FF0000",
        _dark: "#E10202",
      },
      themeYellow: {
        default: "#FFD800",
        _dark: "#DBBA03",
      },
      themeViolet: {
        default: "#AA00FF",
        _dark: "#8406C3",
      },
      themeOrange: {
        default: "#FF5500",
        _dark: "#C44201",
      },
      themeGreen: {
        default: "#2CD61E",
        _dark: "#11C402",
      },
    },
  },
});
