import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeContext.js";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          {/* <QueryClientProvider client={queryClient}> */}
            <App />
          {/* </QueryClientProvider> */}
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
