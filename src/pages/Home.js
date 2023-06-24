import React from "react";
import Header from "../components/Header";
import heroImg from "../images/hero-img.png";

export default function Home() {
  return (
    <>
      <Header />
      <section id="hero" className="container-fluid d-flex justify-content-center align-items-center">
        <div class="hero-content container">
            <div className="heading">
              <h2 className="title">E-Crush</h2>
              <h4 className="sub-title">Provision for your vision</h4>
              <p className="context">
                This site is intended to provide the best resources to the RGUKTians.
              </p>
            </div>
            <div className="img">
              <img src={heroImg} alt="" className="img-fluid"/>
            </div>
        </div>
      </section>
    </>
  );
}
