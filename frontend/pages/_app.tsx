import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import AnnouncerProvider from "./context/AnnouncementContext";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./components/theme";
import { AuthProvider } from "./context/AuthProvider";
import Navbar from "./components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AnnouncerProvider>
        <ChakraProvider>
          <Navbar />
          <Component {...pageProps} />
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        </ChakraProvider>
      </AnnouncerProvider>
    </AuthProvider>
  );
}