import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import AnnouncerProvider from "./context/AnnouncementContext";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./components/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnnouncerProvider>
      <ChakraProvider>
        <Component {...pageProps} />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </ChakraProvider>
    </AnnouncerProvider>
  );
}
