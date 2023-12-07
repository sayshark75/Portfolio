import { useColorModeValue, useTheme } from "@chakra-ui/react";
import { CustomThemeType } from "../TYPES";

const useCustomTheme = () => {
  const theme = useTheme();

  if (!theme.semanticTokens) {
    return null;
  }

  const { primary, accent, text, primaryLight, darker } = theme.semanticTokens.colors;
  //! We cannot proceed without theme.semanticTokens present.

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const _primary = useColorModeValue(primary.default, primary._dark);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const _accent = useColorModeValue(accent.default, accent._dark);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const _text = useColorModeValue(text.default, text._dark);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const _darker = useColorModeValue(darker.default, darker._dark);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const _primaryLight = useColorModeValue(primaryLight.default, primaryLight._dark);

  const __primary = _primary.split("#")[1];
  const __accent = _accent.split("#")[1];

  const resObj: CustomThemeType = {
    customTheme: {
      light: [_primary, _accent],
    },
    _text,
    _accent,
    __primary,
    __accent,
    _primaryLight,
    _darker,
  };
  return resObj;
};

export default useCustomTheme;
