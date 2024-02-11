import React from 'react'
import { Link } from 'react-router-dom'
import wave from "../../assets/wave.png"
import send from "../../assets/giphy.gif"
import "./Homedata.css"
export default function HomeData() {
  return (
    <div>
      <div className="home_data">
        <h1 className="home title">
          Sourav Kanti Hati
          <img src={wave} alt="wave" className='wave_img' />
        </h1>
        <h3 className="home_subtitle">Frontend Developer</h3>
        <p>I'm a frontend developer and I'm very passionate and dedicated to my work.</p>
        <Link to="/contact" className="hello_btn">Say Hello
          <img src={send} alt="send" className='send_img' />
        </Link>
      </div>
    </div>
  )
}
