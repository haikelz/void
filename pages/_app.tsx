import React from "react";
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import customTheme from "@/styles/theme";
import { Global, css } from "@emotion/react";
import { prismLightTheme, prismDarkTheme } from "@/styles/prism";
import Footer from '@/components/Footer';
import NextProgress from 'nextjs-progressbar';

const GlobalStyle = ({ children } : { children: any }) => {
  const { colorMode } = useColorMode();
  const bar = useColorModeValue('#F05454', '#2D31FA'); 

  return (
    <>
      <Global
        styles={css`
          ${colorMode === `light` ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "#D8DEE9" : "#282a36"};
          }
        `}
      />
      <NextProgress
      color={bar}
      />
      {children}
    <Footer />
    </>
  );
};

const MyApp = ({ Component, pageProps } : { Component: any, pageProps: any }) => {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: true,
        }}
      >
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
