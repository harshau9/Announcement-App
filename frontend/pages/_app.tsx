import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import TopicsProviders from "./context/TopicsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TopicsProviders>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </TopicsProviders>
  );
}
