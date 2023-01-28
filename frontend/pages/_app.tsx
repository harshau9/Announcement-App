import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import TopicsProviders from "./context/AnnouncmentContext";
import { ColorModeScript } from '@chakra-ui/react'
import theme from "./components/theme";
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
