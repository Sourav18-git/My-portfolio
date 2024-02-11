import React, { Children } from 'react'
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
import Skills from './routes/Skills'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    // Children: [
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      }
    ]
  }
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
