import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CreationFlow } from "./screens/CreationFlow";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <CreationFlow />
  </StrictMode>,
);
