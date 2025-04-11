import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Main CSS file
import "slick-carousel/slick/slick.css"; // Styles for react-slick
import "slick-carousel/slick/slick-theme.css"; // Theme styles for react-slick

// Create a root for the React application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
