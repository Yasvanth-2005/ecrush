import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";

export default function Technical() {
  return (
    <>
      <Header />

      <div className='head tech e'>
         <h2 className='head-title'>TECHNICAL</h2>
         <p className='pt-2'>This club is also one of the main pillars that handles all technical support for the organisation. It provides video contents etc.. in the website.</p>
      </div>

      <div className='elib-main mb-5'>
        <p>WELCOME TO TECHNICAL PAGE OF E-CRUSH RGUKTN.......</p>
        <hr />
      </div>

      <SectionTitle title="Will be UPDATED soon..." />

      <Footer />
    </>
  )
}