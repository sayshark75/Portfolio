import { useColorModeValue, useTheme } from "@chakra-ui/react";

const useCustomTheme = () => {
  const theme = useTheme();

  if (!theme.hasOwnProperty("semanticTokens")) {
    return null;
  }

  const { primary, accent } = theme.semanticTokens.colors;

  const _primary = useColorModeValue(primary.default, primary._dark);
  const _accent = useColorModeValue(accent.default, accent._dark);

  const __primary = _primary.split("#")[1];
  const __accent = _accent.split("#")[1];

  // Resolve type in Future
  const resObj: {
    customTheme: any;
    __primary: string;
    __accent: string;
  } = {
    customTheme: {
      light: [_primary, _accent],
    },
    __primary,
    __accent,
  };
  return resObj;
};

export default useCustomTheme;
