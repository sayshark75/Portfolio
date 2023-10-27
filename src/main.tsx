import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import ScrollContextProvider from "./contexts/ScrollContext.tsx";
import "./index.css";
import ThemeContextProvider from "./contexts/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeContextProvider>
        <ScrollContextProvider>
          <App />
        </ScrollContextProvider>
      </ThemeContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
