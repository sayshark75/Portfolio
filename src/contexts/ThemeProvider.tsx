import { createContext, useEffect, useState } from "react";
import { ContextProviderProps, ThemeContextProps, ThemeFunction } from "../TYPES";
import { ChakraProvider, ThemeConfig } from "@chakra-ui/react";
import { blueTheme } from "../themes/BlueTheme";
import changeThemeMeta from "../helpers/MobileChromeTheme";

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeConfig>({});

  useEffect(() => {
    setTheme(blueTheme);
  }, []);

  const handleTheme: ThemeFunction = (config, metaColor) => {
    setTheme(config);
    changeThemeMeta(metaColor);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
export { ThemeContext };
