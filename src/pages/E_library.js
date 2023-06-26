import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

import i1 from "../images/E-Library cover photos/1.webp";
import i2 from "../images/E-Library cover photos/2.webp";
import i3 from "../images/E-Library cover photos/3.webp";
import i4 from "../images/E-Library cover photos/4.webp";
import i5 from "../images/E-Library cover photos/5.webp"; 
import i6 from "../images/E-Library cover photos/6.webp";
import i7 from "../images/E-Library cover photos/7.webp";
import i8 from "../images/E-Library cover photos/8.webp";
import i9 from "../images/E-Library cover photos/9.webp";
import i10 from "../images/E-Library cover photos/10.webp";
import i11 from "../images/E-Library cover photos/11.webp";
import i12 from "../images/E-Library cover photos/12.webp";

const Card = (props) => {
  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center'>
            <div className='lib-card'>
               <a target="_blank" href={props.link}>
                    <img src={props.img} className='img-fluid'/>
               </a>
               <h5 align="center">{props.text}</h5>
            </div>
    </div>
  )
}

const cards = [
  {id:1,img:i1,text:"Newspapers",link:"#"},
  {id:2,img:i2,text:"Novels",link:"https://drive.google.com/drive/folders/1EftUqvjPCLTlwFAzFrhVco-14iWdjP0j"},
  {id:3,img:i3,text:"Documentaries",link:"https://drive.google.com/drive/folders/1f3ZreTwEniBFy3OSTOCQi2xihBa-4LPp"},
  {id:4,img:i4,text:"Comics",link:"https://drive.google.com/drive/folders/194FkbZ7tB7d60Rber0ce2ZPzJv702mEu"},
  {id:5,img:i5,text:"Competitive Corner",link:"https://drive.google.com/drive/folders/1TM0vNJkg2YXJH_sXDeCzCKvRUWA2Yvif"},
  {id:6,img:i6,text:"Articles",link:"https://drive.google.com/drive/folders/15eTk8E-ACwNASmSKYw3z-eIAk9-hu_lY"},
  {id:7,img:i7,text:"Epics",link:"https://drive.google.com/drive/folders/1fPSSYQjQzN5k-j3mq8knj7IhSvmwJmsr"},
  {id:8,img:i8,text:"Engineer's Corner",link:"https://drive.google.com/drive/folders/1B6Xm0njGVQrrkWLjbjlu04SLJRSo986K"},
  {id:9,img:i9,text:"Auto Biographies",link:"https://drive.google.com/drive/folders/102dR0ICO0s1UFPbAQG79KkCl0oDHPibs"},
  {id:10,img:i10,text:"Career Guidence",link:"https://drive.google.com/drive/folders/10ryo1prPaUMr6ETXxFn2MAYMGN7Tm7gZ"},
  {id:11,img:i11,text:"Programming Languages",link:"https://drive.google.com/drive/folders/16sX87w8r8WR1zf2KyyuWwZOSX_4qH8KL"},
  {id:12,img:i12,text:"Magazines",link:"https://drive.google.com/drive/folders/1YUrPR6MCQ_kkoPcW1QwCCbNYiiGkTC93"}
]

export default function E_library() {
  return (
    <>
      <Header />

      <div className='head elib e'>
         <h2 className='head-title'>E-LIBRARY</h2>
         <p className='pt-2'>This club provides many resources for students to improve their reading skills mainly.This club handles the content and reviews of different comic books, novels, and different information to improve reading skills.</p>
      </div>

      <div className='elib-main mb-5'>
        <p>WELCOME TO ONLINE LIBRARY OF E_CRUSH</p>
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
