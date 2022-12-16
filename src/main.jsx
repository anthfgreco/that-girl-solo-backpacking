import React from "react";
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

import "./index.css";

import App from "./App";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import ContactPage from "./Contact/ContactPage";
import TravelMustHavesPage from "./TravelMustHavesPage";
import BlogPage from "./BlogPage";
import DestinationsPage from "./DestinationsPage";
import Post from "./Post";

// use createHashRouter instead of createBrowserRouter to fix 404
// error when refreshing /projects route on GitHub pages
const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/blog" element={<BlogPage />}></Route>
      <Route path="/blog/:id" element={<Post />}></Route>
      <Route path="/destinations" element={<DestinationsPage />}></Route>
      <Route
        path="/travel-must-haves"
        element={<TravelMustHavesPage />}
      ></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
