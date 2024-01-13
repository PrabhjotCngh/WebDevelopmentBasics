import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Install EsLint commands for vite project
// npm install eslint vite-plugin-eslint eslint-config-react-app --save-dev
// Go to or create .eslintrc.cjs or .eslintrc.json file and add below line
// extends: [
//   "react-app"
// ]
// Go to vite.config.js file
// import eslint from "vite-plugin-eslint";
// add eslint() in  plugins: [react()] i.e plugins: [react(), eslint()]
