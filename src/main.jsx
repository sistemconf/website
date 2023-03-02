import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import "leaflet/dist/leaflet.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Test from "./pages/Test";

import markerIcon from "../node_modules/leaflet/dist/images/marker-icon.png";
import Team from "./pages/Team";
import CodeOfConduct from "./pages/CodeOfConduct";
import Speakers from "./pages/Speakers";
import speakers from "./data/speakers";

L.Marker.prototype.setIcon(
  L.icon({
    iconUrl: markerIcon,
  })
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/code-of-conduct",
    element: <CodeOfConduct />,
  },
  {
    path: "/speakers",
    element: <Speakers speakers={speakers} />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
