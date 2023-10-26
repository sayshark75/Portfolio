import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import ScrollContextProvider from "./contexts/ScrollContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ScrollContextProvider>
        <App />
      </ScrollContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
