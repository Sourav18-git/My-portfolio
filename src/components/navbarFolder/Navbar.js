import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {

  const [click, setclick] = useState(false);
  const handleClick = () => { setclick(!click); }


  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">MY-Portfolio </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

            <span onClick={handleClick}>
              {click ? (<i className="uil uil-times"></i>) : (<i className="uil uil-apps"></i>)}


            </span>
          </button>
          <div className="collapse navbar-collapse nav justify-content-end " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="#">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Contact Me</Link>
              </li>

            </ul>

          </div>
          {/* <div className="nav_toogle">
      <i className="uil uil-apps"></i>
    </div> */}
        </div>
      </nav>
    </>
  )
}
