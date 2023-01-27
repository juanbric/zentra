import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#0D0D0D',
    800: '#0D0D0D',
    700: '#0D0D0D',
  },
}

const theme = extendTheme({ colors })


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
       <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Analytics />
      </ChakraProvider>
    </>
  );
}
export default MyApp;
