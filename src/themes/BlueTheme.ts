import { ThemeConfig, extendTheme } from "@chakra-ui/react";

export const blueTheme: ThemeConfig = extendTheme({
  semanticTokens: {
    colors: {
      darker: {
        default: "#000",
        _dark: "#fff",
      },
      white: {
        default: "#ccc",
        _dark: "#eee",
      },
      light: {
        default: "#fff",
        _dark: "#000",
      },
      text: {
        default: "#000",
        _dark: "#CCC",
      },
      placeholder: {
        default: "#4a4a4a",
        _dark: "#aaa",
      },
      primary: {
        default: "#fefefe",
        _dark: "#2a2a2a",
      },
      primaryLight: {
        default: "#fff",
        _dark: "#3a3a3a",
      },
      primaryLighter: {
        default: "#ddd",
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
