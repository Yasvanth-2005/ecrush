import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";

export default function Podcasting() {
  return (
    <>
      <Header />

      <div className='head pods e'>
         <h2 className='head-title'>E-CRUSH PODS</h2>
         <p className='pt-2 px-5'>This club is made for providing students with pods of different types to improve them in listening skills. They record the voice of students talking on some particulars and post them in the website.</p>
      </div>

      <div className='elib-main mb-5'>
        <p>WELCOME TO ONLINE PODCASTS PAGE OF E-CRUSH RGUKTN.......</p>
        <hr />
      </div>

      <SectionTitle title="STRUGGLE OF INDEPENDENCE" />
      <div className='container mb-5 mt-5'>
        <div className='row'>
            <div className="col-lg-3 col-md-4 col-6">
              <iframe width="260" className="pods" src="https://www.youtube.com/embed/wxJa5Vp3QXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <iframe width="260" className="pods" src="https://www.youtube.com/embed/MkF6cV2-Nb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <iframe width="260" className="pods" src="https://www.youtube.com/embed/HLC19DomwrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <iframe width="260" className="pods" src="https://www.youtube.com/embed/Ra2vmZnU6es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <iframe width="260" className="pods" src="https://www.youtube.com/embed/46POCzRjcBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
      </div>

      <SectionTitle title="NEWS ROOM" />
      <div className='container mb-5 mt-5'>
        <div className='row'>
            <div className="col-lg-3 col-md-4 col-6">
              <iframe width="260" className="pods" src="https://www.youtube.com/embed/-Bqkp_jvDCU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
      </div>

      <SectionTitle title="STORY HOUSE" />
      <div className='container mb-5 mt-5'>
        <div className='row'>
        <div className="col-lg-3 col-md-4 col-6">
         <iframe width="260" className="pods" src="https://www.youtube.com/embed/iu9qzV6T5z0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <iframe width="260" className="pods" src="https://www.youtube.com/embed/wzbHNf5vNBk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <iframe width="260" className="pods" src="https://www.youtube.com/embed/jAjIE8DTfHE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
      </div>

      <SectionTitle title="POETASTIC" />
      <div className='container mb-5 mt-5'>
        <div className='row'>
          <div className="col-lg-3 col-md-4 col-6">
            <iframe width="260" className="pods" src="https://www.youtube.com/embed/Co_fTmX99JU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <iframe width="260" className="pods" src="https://www.youtube.com/embed/SLxa7oA2IIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <iframe width="260" className="pods" src="https://www.youtube.com/embed/8A4XqmWJoo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <iframe width="260" className="pods" src="https://www.youtube.com/embed/CZUhLOJk4FM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}