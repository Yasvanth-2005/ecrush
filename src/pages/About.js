import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

import mentor from "../images/mentor.webp";

import ci1 from "../images/photography/1.webp";
import ci2 from "../images/photography/2.webp";
import ci3 from "../images/photography/7.webp";
import ci4 from "../images/photography/4.webp";
import ci5 from "../images/photography/5.webp";
import ci6 from "../images/photography/6.webp";

export default function About() {
  return (
    <main className='about'>
      <Header />
      
      <div className='head'>
         <h2 className='head-title'>About Us</h2>
         <p className='pt-2'>Who we are... and what we do...</p>
      </div>

      <section id="about" class="mb-4">
        <div className="container">
          <div className="row">
            <div className="about-content col-12 col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0">
              <h3>
                E-CRUSH---<i>PROVISION FOR YOUR VISION</i>
              </h3>
              <i>
                E-Crush is a student body organisation meant to support students
                with their english developing skills. It is intended to promote
                best resources to the students of RGUKT to learn English
                fluently without hesitation and with confidence.
              </i>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i> It is the best platform to
                  improve yourself in many ways related to English..
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>The motto is to help
                  students leave the fear behind and move forward to learn
                  English with love and enthusiasm.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>Our mission is to make every
                  student and every volunteer to be good in English
                  LSRW(Listening, Speaking, Reading, and Writing) skills.
                </li>
              </ul>
              <p>
                We provide you a platform to learn many helpful things. We
                spread knowledge of English to all students of the campus by our
                daily activities, events, sessions, talks and many more
              </p>
            </div>
            <div className="about-carousel col-12 col-lg-6 order-1 order-lg-2">
              <div
                className="carousel slide"
                id="about-carousel"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="img-fluid" src={ci1} alt="" />
                  </div>
                  <div className="carousel-item active">
                    <img className="img-fluid" src={ci2} alt="" />
                  </div>
                  <div className="carousel-item active">
                    <img className="img-fluid" src={ci3} alt="" />
                  </div>
                  <div className="carousel-item active">
                    <img className="img-fluid" src={ci4} alt="" />
                  </div>
                  <div className="carousel-item active">
                    <img className="img-fluid" src={ci5} alt="" />
                  </div>
                  <div className="carousel-item active">
                    <img className="img-fluid" src={ci6} alt="" />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#about-carousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#about-carousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="convenor">
        <div class="container">
          <h3>Convenor</h3>
          <div className='row mb-5'>
             <div className='col-md-4'>
              <img src={mentor} alt="convenor" className='img-fluid'/>
             </div>
             <div className='col-md-7'>
              <h1> Mrs. M. Katyayani </h1>
              <p> <b>Qualifications and Degrees:</b> M.A., M. Phil., M. Ed.(Ph. D), </p>
              <p> Faculty of English Department, </p>
              <p>RGUKT-Nuzvid</p>
             </div>
          </div>
        </div>
      </section>

      <section className='teams'>
        <div className='container'>
          <h3>Team E-Crush</h3>
          <div className='row'>
          <div className='col-12 col-md-4 mb-5'>
                <div className='team-card'>
                   <img src="https://img.freepik.com/free-vector/company-employees-sharing-thoughts-ideas_74855-5469.jpg?t=st=1656766066~exp=1656766666~hmac=00bdd7daf11b2d1e38542e4700133d873501d3196f476700b6521bab15f94cc3&amp;w=740" class="team-card-image" /><br />
                     <Link to="/about/core-team">
                        Student Executive Team
                      </Link>
                </div>
            </div>
            <div className='col-12 col-md-4 mb-5'>
                <div className='team-card'>
                <img src="https://img.freepik.com/free-vector/group-therapy-illustration_74855-5516.jpg?t=st=1656785162~exp=1656785762~hmac=78fb78f2ed792afe0dcc861a59c6fe27da28dff820be3d7bde9d953a3cdd8dfe&amp;w=740"  class="team-card-image" /><br />
                     <Link to="/about/advisory-team">
                        Advisory Team
                      </Link>
                </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
