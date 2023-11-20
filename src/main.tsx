import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ScrollContextProvider from "./contexts/ScrollContext.tsx";
import "./index.css";
import ThemeContextProvider from "./contexts/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ScrollContextProvider>
        <App />
      </ScrollContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
