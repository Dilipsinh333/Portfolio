import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: {
    body: {
      fontFamily: "Arial, sans-serif",
      bg: "gray.900",
      color: "whiteAlpha.900",
    },
  },
};

const theme = extendTheme({ config, styles });

export default theme;