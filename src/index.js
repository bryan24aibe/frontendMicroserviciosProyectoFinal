import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Importa desde "react-dom/client"
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Usar createRoot()
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
