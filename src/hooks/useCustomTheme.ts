import { useColorModeValue, useTheme } from "@chakra-ui/react";
import { ThemeInput } from "../TYPES";

const useCustomTheme = () => {
  const theme = useTheme();

  if (!theme.semanticTokens) {
    return null;
  }

  const { primary, accent, text, primaryLight } = theme.semanticTokens.colors;
  //! We cannot proceed without theme.semanticTokens present.

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const _primary = useColorModeValue(primary.default, primary._dark);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const _accent = useColorModeValue(accent.default, accent._dark);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const _text = useColorModeValue(text.default, text._dark);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const _primaryLight = useColorModeValue(primaryLight.default, primaryLight._dark);

  const __primary = _primary.split("#")[1];
  const __accent = _accent.split("#")[1];

  // Resolve type in Future
  const resObj: {
    customTheme: ThemeInput;
    __primary: string;
    __accent: string;
    _accent: string;
    _text: string;
    _primaryLight: string;
  } = {
    customTheme: {
      light: [_primary, _accent],
    },
    _text,
    _accent,
    __primary,
    __accent,
    _primaryLight,
  };
  return resObj;
};

export default useCustomTheme;
