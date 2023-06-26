import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from '../components/SectionTitle';

import i1 from "../images/core team/Farhanulla.webp";
import i2 from "../images/core team/priyanka.jpg";
import i3 from "../images/core team/SKHAZRA.webp";
import i4 from "../images/core team/Adi.webp";
import i5 from "../images/core team/chaitanya.webp";
import i6 from "../images/core team/mohith.webp";
import i7 from "../images/core team/Jan.webp";

const Card = (props) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-center">
               <div class="c-card d-flex flex-column align-items-center justify-content-center">
                 <div className='c-img'>
                    <img src={props.img} className='img-fluid'/>
                 </div>
                 <h3 align="center">{props.name}</h3>
                 <h5>{props.pos}</h5>
                 <h6>{props.branch}</h6>
                 <ul>
                    <li>
                      <a href="http://localhost/final@E-Crush2k22/final@E-Crush2k22/E-Crush2k22_final_site/sebpage.php#"><i className='bi bi-facebook'></i></a>
                    </li>
                    <li>
                      <a href="http://localhost/final@E-Crush2k22/final@E-Crush2k22/E-Crush2k22_final_site/sebpage.php#"><i className='bi bi-instagram'></i></a>
                    </li>
                    <li>
                      <a href="http://localhost/final@E-Crush2k22/final@E-Crush2k22/E-Crush2k22_final_site/sebpage.php#"><i className='bi bi-twitter'></i></a>
                    </li>
                 </ul>
               </div>
    </div>
  )
}

const cardInfo = [
  {id:1,img:i1,name:"FARHANULLA BONTHALA",pos:"President",branch:"ECE"},
  {id:2,img:i2,name:"NAGA PRIYANKA PERECHERLA",pos:"Vice President",branch:"MME"},
  {id:3,img:i3,name:"HAZRA SHAIK",pos:"Vice President",branch:"MME"},
  {id:4,img:i4,name:"ADI LAKSHMI GOLI",pos:"Joint Secratary",branch:"CIVIL"},
  {id:5,img:i5,name:"CHAITANYA PEDASINGU",pos:"Joint Secretary",branch:"CHEMICAL"},
  {id:6,img:i6,name:"MOHITH KUMAR GALLA",pos:"Treasurer",branch:"ECE"},
  {id:7,img:i7,name:"JHANSI UPPADA",pos:"Treasurer",branch:"ECE"}
]

export default function Core() {
  return (
    <main className='about'>
      <Header />
      
      <div className='head'>
         <h2 className='head-title'>About Us</h2>
         <p className='pt-2 px-5'>Here are the details of the core team. They connect with volunteers together for implementation of any kind of activities inside the organisation. Without intimation for the core team nothing happens in the organisation.</p>
      </div>

      <SectionTitle title="STUDENT EXECUTIVE BODY" />
      <div className='container my-5'>
          <div className='row'>
              {cardInfo.map(card => <Card key={card.id} img={card.img} name={card.name} pos={card.pos} branch={card.branch}/>)}
          </div>
      </div>

      <Footer />
    </main>
  )
}
