// pages/_app.js
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";
import "react-toastify/dist/ReactToastify.min.css";
import { AuthProvider } from "@/contexts/auth";
import { AppProvider } from "@/contexts/app";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NextNProgress />
      <AppProvider>
        <AuthProvider>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </AuthProvider>
      </AppProvider>
    </ChakraProvider>
  );
}

export default MyApp;
