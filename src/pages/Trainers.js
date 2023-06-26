import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import siddu from "../images/trainers/siddhu.jpeg"


export default function Trainers() {
  return (
    <>
      <Header />

      <div className='head'>
         <h2 className='head-title'>Weekend Trivia</h2>
         <p className='pt-2'>Test your knowledge.</p>
      </div>

      <div className='click-here-to-attempt'>
        <h1><a href="#">Click Here</a> to attempt quiz</h1>
      </div>

      <SectionTitle title="Winners"/>
      <div className='container mb-4'>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-4'>
              <div className='winner-card d-flex justify-content-center align-items-center' style={{flexDirection:"column"}}>
                <img src={siddu} className='img-fluid' style={{width:"300px",height:"320px"}}/>
                 <h3>Yasvanth Hanumantu</h3>
                 <p>N210368</p>
              </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
              <div className='winner-card d-flex justify-content-center align-items-center' style={{flexDirection:"column"}}>
                <img src={siddu} className='img-fluid' style={{width:"300px",height:"320px"}}/>
                 <h3>Yasvanth Hanumantu</h3>
                 <p>N210368</p>
              </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
              <div className='winner-card d-flex justify-content-center align-items-center' style={{flexDirection:"column"}}>
                <img src={siddu} className='img-fluid' style={{width:"300px",height:"320px"}}/>
                 <h3>Yasvanth Hanumantu</h3>
                 <p>N210368</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
