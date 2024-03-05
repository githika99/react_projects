// concepts is taken from this React Router tutorial
// https://github.com/remix-run/react-router/blob/main/examples/basic/src/App.tsx

import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Home from "./pages/home.jsx";
import SamosaKitchen from "./pages/kitchen.jsx";
import TestPage from "./pages/testpage.jsx";
import ErrorPage from "./pages/error-page.jsx";
import "./index.css";

// ----------------------------------
const App = () => {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="kitchen" element={<SamosaKitchen />} />
          <Route path="testroute" element={<TestPage />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
};

// ---------------------------------
const Layout = () => {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <div>
          &nbsp; &nbsp;
          <Link to="/">Home</Link> &nbsp; &nbsp;
          <Link to="/kitchen">Kitchen</Link>&nbsp; &nbsp;
          <Link to="/testroute">Test Page</Link>&nbsp; &nbsp;
        </div>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
};

// ----------------
export default App;
