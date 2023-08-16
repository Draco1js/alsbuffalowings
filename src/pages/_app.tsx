import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { AppProps } from "next/app";
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
