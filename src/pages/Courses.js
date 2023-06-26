import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";

import course1 from "../images/courses/Spoken english.webp";
import course2 from "../images/courses/E grammar.webp";
import course3 from "../images/courses/Airforce.webp";
import course4 from "../images/courses/AA course.webp";
import course5 from "../images/courses/PUC 2 Content.webp";
import nmrsir from "../images/courses/nmrsir.webp";

const CourseCard = (props) => {
  return (
    <div className="col-12 col-lg-4 col-md-6 ccor">
      <Link to={props.link}>
                <div className="course-card">
                  <div className="course-img">
                    <img src={props.img} className="img-fluid"/>
                  </div>
                  <div className="course-info">
                     <div className="end-alignment">
                       <div className="main-info">
                          <p>No.of Videos : {props.vn}</p>
                          <p>{props.price}</p>
                       </div>
                       <h3>{props.title}</h3>
                       <p>{props.sub}</p>
                     </div>
                     <div className="course-author-maybe d-flex">
                        <div className="author">
                          <div className="author-img"><img src={props.aimg} alt="author-img" /></div>
                          <span style={{marginLeft:"5px",fontWeight:700}}>{props.author}</span>
                        </div>
                        <div className="views">
                          <span style={{marginRight:"5px"}}>{props.n1}</span>
                          <span style={{marginLeft:"5px"}}>{props.n2}</span>
                        </div>
                     </div>
                  </div>
                </div>
        </Link>
    </div>

  )
}

const courseCardInfo = [
  {id:1,img:course1,vn:55,price:"Free",title:"Spoken English Classes",sub:"This course provides you the content for learning English and you'll be taught how to apply it in your daily communication.",aimg:nmrsir,n1:19980,n2:776,author:"NMR.Polagni",link:"/courses/1"},
  {id:2,img:course2,vn:4,price:"Free",title:"English Grammar",sub:"Grammar is the basic structure of any language. This course introduces you the different aspects of grammar in English language.",aimg:nmrsir,n1:799,n2:251,author:"NMR.Polagni",link:"/courses/2"},
  {id:3,img:course3,vn:7,price:"Free",title:"Indian Air Force",sub:"This course helps many students and aspirants in learning English required for cracking IAF examination.",aimg:nmrsir,n1:57,n2:14,author:"NMR.Polagni",link:"/courses/3"},
  {id:4,img:course4,vn:9,price:"Free",title:"A..AA... PLAYLIST",sub:"In this course,you'll be learning English language from scratch.This course is helpful for many beginners where you'll learn English from very basic level.",aimg:nmrsir,n1:20,n2:85,author:"NMR.Polagni",link:"/courses/4"},
  {id:5,img:course5,vn:1,price:"Free",title:"PUC courses",sub:"This course provides you the best content for PUC.",aimg:nmrsir,n1:412,n2:37,author:"NMR.Polagni",link:"/courses/5"}
]

export default function Courses() {
  return (
    <>
      <Header />

      <div className='head'>
         <h2 className='head-title'>Courses</h2>
         <p className='pt-2 px-5'>E-Crush here gives you chance to learn different english related courses from our mentors and seniors. Courses that includes english grammar, english phonetics, pronunciations, and others that could help you out to improve in different aspects. The main theme of implementing these courses is to bring everyone together and learn with a new platform.</p>
      </div>

      <div className="container">
        <SectionTitle title="Courses" />
        <div className="row mb-5">
          {courseCardInfo.map(card => <CourseCard key={card.id} link={card.link} img={card.img} title={card.title} vn={card.vn} price={card.price} n1={card.n1} n2={card.n2} sub={card.sub} aimg={card.aimg} author={card.author}/>)}
        </div>
      </div>

      <Footer />
    </>
  )
}
