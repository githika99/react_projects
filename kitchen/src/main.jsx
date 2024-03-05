// source code is taken from this React Router tutorial
// https://reactrouter.com/en/main/start/tutorial

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./routes/root.jsx";
import ErrorPage from "./pages/error-page.jsx";

import SamosaKitchen from "./pages/kitchen.jsx";
import TestPage from "./pages/testpage.jsx";

// ----------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/kitchen",
    element: <SamosaKitchen />,
  },
  {
    path: "/testroute",
    element: <TestPage />,
  },
]);

// ----------------
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
