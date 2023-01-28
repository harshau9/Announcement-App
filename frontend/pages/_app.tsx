import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
<<<<<<< HEAD
import Signup from './components/Signup';
import Login from './components/Login';

=======
import TopicsProviders from "./context/AnnouncmentContext";
import { ColorModeScript } from '@chakra-ui/react'
import theme from "./components/theme";
>>>>>>> dec24c69bc1d15a8bf79ccf82803415bb218c472
export default function App({ Component, pageProps }: AppProps) {
  return (
    <TopicsProviders>
      <ChakraProvider>
        <Component {...pageProps} />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </ChakraProvider>
    </TopicsProviders>
  );
}
