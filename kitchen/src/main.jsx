// concepts is taken from this React Router tutorial
// https://github.com/remix-run/react-router/blob/main/examples/basic/src/App.tsx

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app";
// --------------------
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
