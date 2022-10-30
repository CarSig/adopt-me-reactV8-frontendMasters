import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Fret from "./components/Fret";
import Fretboard from "./components/Fretboard";
import SelectorMain from "./components/Selector/SelectorMain";

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
    <div>

      <BrowserRouter>

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

      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);