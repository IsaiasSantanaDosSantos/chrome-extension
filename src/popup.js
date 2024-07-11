import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("popup-root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error("Popup root element not found.");
}
