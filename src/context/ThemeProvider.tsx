"use client";

import { createContext, useContext, useEffect, useState } from "react";
import colorGroup from "@/styles/colorGroup";
import { ChakraProvider, createSystem, defineConfig, mergeConfigs, SystemConfig, SystemContext } from "@chakra-ui/react";
import { initialThemeConfig } from "@/styles/theme";
import systemContextConfig from "@/styles/theme";
import { ColorModeProvider, ColorModeProviderProps } from "@/components/ui/color-mode";

export const ThemeContext = createContext({
  currentColor: "blue",
  handleColorChange: (color: string) => {},
  config: initialThemeConfig,
});

export const ThemeContextProvider = (props: ColorModeProviderProps) => {
  const [currentColor, setColor] = useState("blue");
  const [config, setConfig] = useState<SystemConfig>(initialThemeConfig);
  const [theme, setTheme] = useState<SystemContext>(systemContextConfig);

  // Handle the logic of updating the theme configuration
  useEffect(() => {
    const newConfig = mergeConfigs(
      initialThemeConfig,
      defineConfig({
        theme: {
          semanticTokens: {
            colors: {
              ...initialThemeConfig.theme?.semanticTokens?.colors,
              ...colorGroup[currentColor], // Use updated color
            },
          },
        },
      })
    );
    setConfig(newConfig);
    setTheme(createSystem(newConfig));
  }, [currentColor]); // Re-run when `currentColor` changes

  const handleColorChange = (color: string) => {
    if (currentColor !== color) {
      setColor(color); // Update color, triggering `useEffect` to update the theme
    }
  };

  return (
    <ThemeContext.Provider value={{ config, currentColor, handleColorChange }}>
      <ChakraProvider value={theme}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </ThemeContext.Provider>
  );
};

export const useCustomTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useCustomTheme must be used within a ThemeProvider");
  }
  return context;
};
