import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useEffect } from "react";
import theme from '../utils/theme'
import "./styles.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps}/>
    </ChakraProvider>
  );
}

export default App;
