// pages/_app.js
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";
import { AuthProvider } from "@/contexts/auth";
import { AppProvider } from "@/contexts/app";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NextNProgress />
      <AppProvider>
        <AuthProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </AuthProvider>
      </AppProvider>
    </ChakraProvider>
  );
}

export default MyApp;
