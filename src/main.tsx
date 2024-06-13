import ReactDOM from "react-dom/client";
import { Box, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App.tsx";
import theme from "./themes.ts";
import "./main.css";
import { HashRouter } from "react-router-dom";
import backgroundImage from "./assets/black1.jpg";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Box
      backgroundImage={backgroundImage}
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      padding="1.5%"
    >
      <HashRouter>
        <App />
      </HashRouter>
    </Box>
  </ChakraProvider>
);
