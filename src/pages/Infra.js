import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";

import ci1 from "../images/photography/1.webp";

export default function Infra(){
  return (
    <>
      <Header />

      <div className='head infra e'>
         <h2 className='head-title'>INFRA TEAM</h2>
         <p className='pt-2'>One of the important club in helping organisation look attractive with their art work and infra works. At the times of events and activities also this takes huge responsibility.</p>
      </div>

      <div className='elib-main mb-5'>
        <p>WELCOME TO INFRA TEAM PAGE OF E-CRUSH RGUKTN.......</p>
        <hr />
      </div>

      <SectionTitle title="RECENT WORKS" />

      <div className='container mt-3'>
            <div className='row d-flex justify-content-center'>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-5'>
                 <div className='photo-card'>
                    <img src={ci1} className='img-fluid'/>
                 </div>
              </div>
            </div>
      </div>

      <Footer />
    </>
  )
}