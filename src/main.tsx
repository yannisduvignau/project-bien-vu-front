import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./hooks/theme/ThemeContext.js";
import { AssistantProvider } from "./hooks/assistant/AssistantContext.js";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider>
        <AssistantProvider>
          <BrowserRouter>
            {/* <QueryClientProvider client={queryClient}> */}
            <App />
            {/* </QueryClientProvider> */}
          </BrowserRouter>
        </AssistantProvider>
      </ThemeProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
