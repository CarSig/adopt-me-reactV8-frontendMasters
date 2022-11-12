import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MusicContext, MusicContextProvider } from "./Context/MusicContext";

import Fret from "./components/Fret";
import Fretboard from "./components/Fretboard";
import SelectorMain from "./components/Selector/SelectorMain";
import React from "react";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {

  return (
    <React.StrictMode>
      <div>


        <BrowserRouter>
          <MusicContextProvider value={MusicContext}>
            <QueryClientProvider client={queryClient}>
              <header>
                <Link to="/"><h1>Guitar</h1></Link>
              </header>
              <SelectorMain />


              <Routes>
                <Route path="/details/:id" element={<Fret />} />
                <Route path="/" element={<Fretboard />} />
              </Routes>
            </QueryClientProvider>
          </MusicContextProvider>
        </BrowserRouter>
      </div >
    </React.StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);