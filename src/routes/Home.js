import React from 'react'
import Navbar from '../components/navbarFolder/Navbar'
import { Outlet } from "react-router-dom";
import HomeBody from '../components/home_body/HomeBody';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomeBody/>
      <Outlet/>
    </div>
  )
}
