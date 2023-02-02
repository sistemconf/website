import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.scss"
import 'leaflet/dist/leaflet.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './pages/Index';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import Test from './pages/Test';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/test",
    element: <Test/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)