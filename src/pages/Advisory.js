import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from '../components/SectionTitle';
import StudentAdvisoryCarousel from "../components/StudentAdvisoryCarousel";

export default function Advisory() {
  return (
    <main className='about'>
      <Header />
      
      <div className='head'>
         <h2 className='head-title'>About Us</h2>
         <p className='pt-2 px-5'>The backbone of E-Crush lies in the advisory body. This consists of previous batch core team members and active volunteers. They help us clear our queries and support us at difficult situations... They guide us to move forward and encourages us to achieve something. They rectify our mistakes and make us stronger in every aspect</p>
      </div>

      <SectionTitle title="ADVISORY TEAM" />

      <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-6 col-md-3' style={{width:"300px",color:"#333"}}>
            <h2 style={{fontSize:"26px"}}>HOD of ENGLISH DEPARTMENT</h2>
            <p>Desigination</p>
          </div>
          <div className='col-12 col-sm-6 col-md-3' style={{width:"300px",color:"#333"}}>
            <h2 style={{fontSize:"26px"}}>DSW/ASSOCIATE DEAN WELFARE</h2>
            <p>Desigination</p>
          </div>
        </div>
      </div>

      <SectionTitle title="STUDENT ADVISORY TEAM" />
      <div className='container mb-5'>
        <StudentAdvisoryCarousel />
      </div>

      <Footer />
    </main>
  )
}
