import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";

import ejub from "../images/events/E-jubiliant.webp";
import republika from "../images/events/republika 2k21.webp";
import yp from "../images/events/youthparliament.webp";
import exploria from "../images/events/exploria2k21.webp";

const Eventcard = (props) => {
  return (
    <div className='col-12 col-md-6 col-lg-4 d-flex align-items-strech'>
              <div className='event-card'>
                  <div className='event-info'>
                     <h3>{props.name}</h3>
                     <h5>{props.date}</h5>
                     <p>{props.desc}</p>
                     <a href={props.link}><button>Visit &nbsp;&nbsp;→ </button></a>
                  </div>
                  <div className='event-img'>
                    <img src={props.img} className='img-fluid'/>
                  </div>
              </div>
    </div>
  )
}

const eventCardDetails = [
  {id:1,img:ejub,name:"E-jubliant 2k21",date:"16-04-2022 to 23-04-2022",desc:"To spread more importance of English, UN traditionally observed the 'WORLD ENGLISH DAY ' on William Shakespeare's birthday, 23rd April.s",link:"https://sites.google.com/view/e-jubilant2k21/home"},
  {id:2,img:republika,name:"REPUBLIKA 2K21",date:"24-01-2021 to 25-01-2021",desc:"On 26th January, we celebrate republic day every consecutive year in India. In 1950, the Constitution was started by our freedom fighters.",link:"https://sites.google.com/view/ecrushrguktn/events/REPUBLIKA"},
  {id:3,img:yp,name:"NATIONAL YOUTH DAY",date:"10-01-2021 to 11-01-2021",desc:"National Youth Day is observed to honour the ideals and thoughts of Swamiji Vivekananda who had tremendous faith in youth",link:"https://sites.google.com/view/ecrushrguktn/events/YOUTH-DAY"},
  {id:4,img:exploria,name:"EXPLORIA 2K21",date:"21-09-2021 to 27-09-2021",desc:"This year the theme of World Tourism Day is 'Tourism for Inclusive Growth'. We celebrate the explore event on the eve of national tourism day",link:"https://bit.ly/explore2k21"}
]

export default function web_development() {
  return (
    <>
      <Header />

      <div className='head web e'>
         <h2 className='head-title'>WEB DEVELOPMENT</h2>
         <p className='pt-2'>This club handles the website of E-crush. It connects students with the organisation. It combines and posts the content of all clubs and attracts students towards the organisation.</p>
      </div>

      <div className='elib-main mb-5'>
        <p>WELCOME TO WEB DEVELOPMENT PAGE OF E-CRUSH RGUKTN.......</p>
        <hr />
      </div>

      <SectionTitle title="RECENT WORKS" />
      <div className='container events'>
        <div className='row'>
          {eventCardDetails.map(card => <Eventcard key={card.id} name={card.name} date={card.date} desc={card.desc} link={card.link} img={card.img}/>)}
        </div>
      </div>

      <Footer />
    </>
  )
}
