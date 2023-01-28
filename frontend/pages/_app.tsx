import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Signup from './components/Signup';
import Login from './components/Login';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
