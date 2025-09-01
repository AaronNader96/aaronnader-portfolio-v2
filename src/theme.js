import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: "#e3eafc",
      100: "#c3d2f7",
      200: "#a3baf2",
      300: "#7393e6",
      400: "#4a6ed6",
      500: "#2546b8",
      600: "#1d368e",
      700: "#162764",
      800: "#0e183a",
      900: "#070c1c",
    },
  },
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.900" : "white",
        color: props.colorMode === "dark" ? "white" : "gray.800",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "semibold",
        borderRadius: "lg",
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "brand.600" : "brand.500",
          color: "white",
          _hover: {
            bg: props.colorMode === "dark" ? "brand.700" : "brand.600",
            transform: "translateY(-2px)",
            boxShadow: "lg",
          },
          transition: "all 0.2s",
        }),
      },
    },
    Card: {
      baseStyle: (props) => ({
        container: {
          bg: props.colorMode === "dark" ? "gray.800" : "white",
          borderRadius: "xl",
          boxShadow: props.colorMode === "dark" ? "dark-lg" : "lg",
          transition: "all 0.2s",
          _hover: {
            transform: "translateY(-4px)",
            boxShadow: props.colorMode === "dark" ? "2xl" : "xl",
          },
        },
      }),
    },
  },
});

export default theme;
