// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#DDE5E8",
        color: "#46535B",
      },
    },
  },
  colors: {
    brand: {
      "50": "#FE952F",
      "100": "#FE952F",
      "200": "#FE952F",
      "300": "#FE952F",
      "400": "#FE952F",
      "500": "#266FB2",
      "600": "#2587be",
      "700": "#2587be",
      "800": "#2587be",
      "900": "#2587be",
    }
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
});
