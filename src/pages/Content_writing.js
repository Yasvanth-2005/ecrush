import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

import i1 from "../images/content writing/UPSC interviews.webp";
import i2 from "../images/content writing/Movie reviews.webp";
import i3 from "../images/content writing/student writings.webp";
import i4 from "../images/content writing/Historical places.webp";
import i5 from "../images/content writing/Success story.webp"; 

const Card = (props) => {
  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center'>
            <div className='lib-card'>
               <a target="_blank" href={props.link}>
                    <img src={props.img} className='img-fluid'/>
               </a>
               <h5 style={{fontSize:"12px"}} align="center">{props.text}</h5>
            </div>
    </div>
  )
}

const cards = [
  {id:1,img:i1,text:"Review on UPSE interview",link:"yash"},
  {id:2,img:i2,text:"Movie Review",link:"yash"},
  {id:3,img:i3,text:"Student writings",link:"yash"},
  {id:4,img:i4,text:"Know about this place",link:"yash"},
  {id:5,img:i5,text:"Continuation of success story",link:"yash"},
]

export default function Content_writing() {
  return (
    <>
      <Header />

      <div className='head content e'>
         <h2 className='head-title'>CONTENT WRITING</h2>
         <p className='pt-2 px-5'>This club is all meant to provide content like captions, poster content, website content, all types of descriptive information for the organisation. It is more like a pillar to any work to be started.</p>
      </div>

      <div className='elib-main mb-5'>
        <p>WELCOME TO CONTENT WRITING PAGE OF E-CRUSH RGUKTN.......</p>
        <hr />
      </div>

      <div className='container'>
        <div className='row mb-5'>
          {cards.map(card => <Card key={card.id} link={card.link} img={card.img} text={card.text}/>)}
        </div>
      </div>

      <Footer />
    </>
  )
}
