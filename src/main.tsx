import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <CssBaseline />
    <App />
  </HelmetProvider>
);
