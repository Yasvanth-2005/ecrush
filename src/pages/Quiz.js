import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";

export default function Quiz() {
  return (
    <>
      <Header />

      <div className='head quiz e'>
         <h2 className='head-title'>QUIZ</h2>
         <p className='pt-2'>This club works on weekend quiz of E-crush. They obtain different English related, logical, reasoning, interesting questions and make students participate with excitement.</p>
      </div>

      <div className='elib-main mb-5'>
        <p>WELCOME TO QUIZ PAGE OF E-CRUSH RGUKTN.......</p>
        <hr />
      </div>

      <SectionTitle title="Will be UPDATED soon..." />

      <Footer />
    </>
  )
}
