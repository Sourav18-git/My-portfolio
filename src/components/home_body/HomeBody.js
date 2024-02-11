import React from 'react'
import Social from './Social'
import HomeData from './HomeData'
import "./Homebody.css"
export default function HomeBody() {
   return (
      // <section className="home section" id='home'>
      //    {/* <div className="home_container container grid"> */}
      //    <div class="row">
      //       <div className="home_conatiner grid">
      //          <div className="home_content">
      //             <Social />
      //             <div className="home_img"></div>
      //             <HomeData />
      //          </div>
      //       </div>
      //    </div>
      // </section>
      <div class="row" id='row'>
         <div class="col-sm-3">
         <Social />
         </div>
         <div class="col-sm-3">
         <HomeData />
         </div>
         <div class="col-sm-3">
         <div className="home_img"></div>
         </div>
         
      </div>
   )
}
