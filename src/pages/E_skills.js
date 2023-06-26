import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

import i1 from "../images/E-skills/tongue twisters.webp";
import i2 from "../images/E-skills/Vocabulary.webp";
import i3 from "../images/E-skills/E-crush facts.webp";
import i4 from "../images/E-skills/phrases.webp";
import i5 from "../images/E-skills/Riddles and puzzles.webp"; 
import i6 from "../images/E-skills/idioms.webp";

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
  {id:1,img:i1,text:"Tounge twisters",link:"https://docs.google.com/presentation/d/1fu83X5YRYDQYr6GM8JI8mCZ4UX8ddkzw/edit?usp=sharing&ouid=115129751034173287915&rtpof=true&sd=true"},
  {id:2,img:i2,text:"Vocabulary",link:"https://drive.google.com/file/d/1B0GMC2X01_fVFa3if102QqKpVkkdNDjN/view?usp=sharing"},
  {id:3,img:i3,text:"Facts",link:"https://drive.google.com/file/d/1LBXQ4717fJmkJtkVpbmg6ThZ6oxsT7jA/view?usp=sharing"},
  {id:4,img:i4,text:"Phrases and Phrasal verbs",link:"https://drive.google.com/file/d/14CEo3W24J-9-WoKv_aKiNSBQRGzf3SgV/view?usp=sharing"},
  {id:5,img:i5,text:"Riddles and puzzles",link:"https://drive.google.com/file/d/1GG0lsiZMc0s2NwlRuipzTACZp82lj2ki/view?usp=sharing"},
  {id:6,img:i6,text:"Idioms",link:"https://drive.google.com/file/d/1mPhs8XtbAmyvMTEvD4ih1w634ktVCgy3/view?usp=sharing"},
]


export default function E_skills() {
  return (
    <>
      <Header />
          <div className='head eskill e'>
            <h2 className='head-title'>E-SKILLS</h2>
            <p className='pt-2'>This club concentrates on improving all skills of students and volunteers and uses the skills in a way of development of organisation. They also provide week with e-crush content like quote of the day, vocabulary etc... </p>
          </div>

          <div className='elib-main mb-5'>
            <p>WELCOME TO E-SKILLS PAGE OF E-CRUSH RGUKTN.......</p>
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
