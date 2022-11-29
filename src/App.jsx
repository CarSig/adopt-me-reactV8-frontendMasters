import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MusicContext, MusicContextProvider } from "./Context/MusicContext";
import { ThemeContext, ThemeContextProvider } from "./Context/ThemeContext";
import styled, { ThemeProvider } from "styled-components";

import Fret from "./components/Fret";
import Fretboard from "./components/Fretboard";
import SelectorMain from "./components/Selector/SelectorMain";
import React from "react";


const StyledBody = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};

  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  height: 100vh;
  width: 100vw;
  
  p,h1,h2,h3,h4,h5,h6 {
    color: ${(props) => props.theme.colors.text};}
  
  `


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});


const theme = {
  colors: {
    background: "#444",
    primary: "purple",
    secondary: "blue",
    text: "#fff",

  }

}



const App = () => {

  return (

    <ThemeProvider theme={theme}>
      <StyledBody>



        <BrowserRouter>

          <MusicContextProvider value={MusicContext}>
            <QueryClientProvider client={queryClient}>

              <SelectorMain />
              <div></div>

              <Fretboard />
            </QueryClientProvider>
          </MusicContextProvider>
        </BrowserRouter>
      </StyledBody>
    </ThemeProvider >

  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);