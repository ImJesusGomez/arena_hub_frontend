import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ArenaHub } from "./ArenaHub";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ArenaHub />
  </StrictMode>,
);
