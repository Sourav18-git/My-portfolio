import React from 'react'
import "./index.css"
import About
 from './routes/About'
 import Projects from './routes/Projects'
 import Contact from './routes/Contact'
 import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 

import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/about",
    element:<About/>,
  },
  {
    path: "/contact",
    element:<Contact/>,
  },
  {
    path: "/projects",
    element:<Projects/>,
  },
]);
export default function App() {
  return (
<>
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
</>
  )
}
