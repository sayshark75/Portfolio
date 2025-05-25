import { createSystem, defaultConfig, defineConfig, mergeConfigs } from "@chakra-ui/react";
import { fonts } from "./fonts";
import { breakpoints } from "./breakpoints";

const customConfig = defineConfig({
  theme: {
    breakpoints,
    tokens: {
      fonts,
    },
    semanticTokens: {
      colors: {
        darker: {
          value: { base: "#000", _dark: "#fff" },
        },
        white: {
          value: {
            base: "#fff",
            _dark: "#2a2a2a",
          },
        },
        light: {
          value: {
            base: "#fff",
            _dark: "#000",
          },
        },
        text: {
          value: {
            base: "#000",
            _dark: "#CCC",
          },
        },
        placeholder: {
          value: {
            base: "#4a4a4a",
            _dark: "#aaa",
          },
        },
        primary: {
          value: {
            base: "#fefefe",
            _dark: "#2a2a2a",
          },
        },
        primaryLight: {
          value: {
            base: "#fff",
            _dark: "#3a3a3a",
          },
        },
        primaryLighter: {
          value: {
            base: "#ddd",
            _dark: "#4a4a4a",
          },
        },
        accent: {
          value: {
            base: "#006aff",
            _dark: "#0954BD",
          },
        },
        accentLight: {
          value: {
            base: "#009aff",
            _dark: "#009aff",
          },
        },
        accentDark: {
          value: {
            base: "#003aff",
            _dark: "#003aff",
          },
        },
        themeBlue: {
          value: {
            base: "#006aff",
            _dark: "#0954BD",
          },
        },
        themeRed: {
          value: {
            base: "#FF0000",
            _dark: "#E10202",
          },
        },
        themeYellow: {
          value: {
            base: "#FFD800",
            _dark: "#DBBA03",
          },
        },
        themeViolet: {
          value: {
            base: "#AA00FF",
            _dark: "#8406C3",
          },
        },
        themeOrange: {
          value: {
            base: "#FF5500",
            _dark: "#C44201",
          },
        },
        themeGreen: {
          value: {
            base: "#2CD61E",
            _dark: "#11C402",
          },
        },
      },
    },
  },
});

export const initialThemeConfig = mergeConfigs(defaultConfig, customConfig);

export default createSystem(defaultConfig, initialThemeConfig);
