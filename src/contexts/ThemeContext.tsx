import { createContext, useState } from "react";
import { BlueTheme } from "../themes/BlueTheme";
import { ChakraProvider } from "@chakra-ui/react";
import { ContextProviderProps } from "../TYPES";
export type ThemeContextProps = {
  themeData: Record<string, any>;
  handleThemeChange: (themeObj: Record<string, any>) => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
const ThemeContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [themeData, setThemeData] = useState(BlueTheme);
  const handleThemeChange = (themeObj: Record<string, any>) => {
    setThemeData(themeObj);
  };
  return (
    <ThemeContext.Provider value={{ themeData, handleThemeChange }}>
      <ChakraProvider theme={themeData}>{children}</ChakraProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
export { ThemeContext };
