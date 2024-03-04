import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SamosaKitchen from "./pages/SamosaKitchen.jsx";
import TestPage from "./pages/TestPage.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SamosaKitchen />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
