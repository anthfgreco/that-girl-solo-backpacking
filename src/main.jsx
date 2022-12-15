import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "./ErrorPage";
import "./index.css";
import HomePage from "./HomePage";
import ContactPage from "./Contact/ContactPage";
import TravelMustHavesPage from "./TravelMustHavesPage";
import BlogPage from "./BlogPage";

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
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/travel-must-haves",
        element: <TravelMustHavesPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
