import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { AuthProvider } from "../lib/auth";
import theme from '../utils/theme'
import "./styles.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
        {useEffect(() => {
          const handleContextmenu = (e) => {
            e.preventDefault();
          };
          document.addEventListener("contextmenu", handleContextmenu);
          return function cleanup() {
            document.removeEventListener("contextmenu", handleContextmenu);
          };
        }, [])}
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
