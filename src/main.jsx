import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "./ErrorPage";
import "./index.css";
import HomePage from "./HomePage";
import ContactPage from "./Contact/ContactPage";
import TravelMustHavesPage from "./TravelMustHavesPage";

// use createHashRouter instead of createBrowserRouter to fix 404
// error when refreshing /projects route on GitHub pages
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/travel-must-haves",
        element: <TravelMustHavesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// This goes to outlet:

/*
// use createHashRouter instead of createBrowserRouter to fix 404 error when refreshing /projects route
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);
*/
