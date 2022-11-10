import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Montserrat, sans-serif",
        color: "black",
        fontWeight: "900",
      },
      html: {
        fontFamily: "Montserrat, sans-serif",
        color: "black",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "inherit",
        color: "black",
      },
    },
  },
});

export default theme;
