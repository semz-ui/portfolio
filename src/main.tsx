import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import PageSkeleton from "./components/PageSkeleton.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<PageSkeleton />}>
      <App />
    </Suspense>
  </StrictMode>
);
