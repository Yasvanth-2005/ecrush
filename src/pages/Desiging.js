import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SecitonTitle from "../components/SectionTitle";

import ci1 from "../images/Desinging pics/1.webp";
import ci2 from "../images/Desinging pics/2.webp";
import ci3 from "../images/Desinging pics/3.webp";
import ci4 from "../images/Desinging pics/4.webp";
import ci5 from "../images/Desinging pics/5.webp";
import ci6 from "../images/Desinging pics/6.webp";
import ci7 from "../images/Desinging pics/7.webp";
import ci8 from "../images/Desinging pics/8.webp";
import ci9 from "../images/Desinging pics/9.webp";
import ci10 from "../images/Desinging pics/10.webp";
import ci11 from "../images/Desinging pics/11.webp";

export default function Desinging() {
  return (
    <>
      <Header />

      <div className="head Desing e">
        <h2 className="head-title">DESIGING TEAM</h2>
        <p className="pt-2 px-5">
          The most important club of E-crush is designing club. This improves
          content provided into informative and interesting posts and designs to
          attract students and learn more. Event posters, daily content posts,
          all type of designing work are done by this club.
        </p>
      </div>

      <div className="elib-main mb-5">
        <p>WELCOME TO DESIGING PAGE OF E-CRUSH RGUKTN.......</p>
        <hr />
      </div>

      <SecitonTitle title="RECENT WORKS" />

      <div className="container mt-3">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 d-flex align-items-center justify-content-center">
            <div className="photo-card">
              <img src={ci1} className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 d-flex align-items-center justify-content-center">
            <div className="photo-card">
              <img src={ci2} className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 d-flex align-items-center justify-content-center">
            <div className="photo-card">
              <img src={ci3} className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 d-flex align-items-center justify-content-center">
            <div className="photo-card">
              <img src={ci4} className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 d-flex align-items-center justify-content-center">
            <div className="photo-card">
              <img src={ci5} className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 d-flex align-items-center justify-content-center">
            <div className="photo-card">
              <img src={ci6} className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 d-flex align-items-center justify-content-center">
            <div className="photo-card">
              <img src={ci7} className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 d-flex align-items-center justify-content-center">
            <div className="photo-card">
              <img src={ci8} className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 d-flex align-items-center justify-content-center">
            <div className="photo-card">
              <img src={ci9} className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 d-flex align-items-center justify-content-center">
            <div className="photo-card">
              <img src={ci10} className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 d-flex align-items-center justify-content-center">
            <div className="photo-card">
              <img src={ci11} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
