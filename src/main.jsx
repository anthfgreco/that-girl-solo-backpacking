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
import TravelMustHavesPage from "./Travel Must Haves/TravelMustHavesPage";
import BlogMainPage from "./Blog/BlogMainPage";
import DestinationsPage from "./Destinations/DestinationsPage";
import BlogPost from "./Blog/BlogPost";

// use createHashRouter instead of createBrowserRouter to fix 404
// error when refreshing /projects route on GitHub pages
const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/blog" element={<BlogMainPage />}></Route>
      <Route path="/blog/:titleUrl" element={<BlogPost />}></Route>
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
