import React from 'react'
import "./Social.css"
import linke from "../../assets/in.jpg"
export default function Social() {
  return (
   <div className="home_social">
    <a href='https://www.instagram.com/' className="home_social-icon" target='_blank'>
<i className="uil uil-instagram"></i>
    </a>
    <a href='https://www.linkedin.com/in/sourav-kanti-hati-05a0a023a/' className="home_social-icon" target='_blank'>
    <img src={linke} alt="send" className='linke_img' />
    </a>
    <a href='https://github.com/Sourav18-git' className="home_social-icon" target='_blank'>
    <i className="uil uil-github-alt"></i>
    </a>
   </div>  )
}
