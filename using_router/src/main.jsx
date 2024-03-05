import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { Link, Routes, Route } from "react-router-dom";

import SamosaKitchen from "./pages/SamosaKitchen.jsx";
import TestPage from "./pages/TestPage.jsx";

import "./index.css";

// concepts are  taken from this React Router tutorial
// https://github.com/remix-run/react-router/blob/main/examples/basic/src/App.tsx

// ------------------
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/kitchen">Kitchen...</Link>
          </li>
          <li>
            <Link to="/testroute">Test Page</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/kitchen" element={<SamosaKitchen />} />
        <Route path="/testroute" element={<TestPage />} />
      </Routes>
    </>
  );
}

// --------------------
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
