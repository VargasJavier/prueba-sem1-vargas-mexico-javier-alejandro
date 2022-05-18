import React, { StrictMode } from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";

// BEFORE
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// AFTER
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
