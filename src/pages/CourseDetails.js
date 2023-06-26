import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

import course1 from "../images/courses/Spoken english.webp";
import course2 from "../images/courses/E grammar.webp";
import course3 from "../images/courses/Airforce.webp";
import course4 from "../images/courses/AA course.webp";
import course5 from "../images/courses/PUC 2 Content.webp";
import nmrsir from "../images/courses/nmrsir.webp";
import { useParams } from 'react-router-dom';

const courseCardInfo = [
    {id:1,name:"course1",img:course1,vn:55,price:"Free",title:"Spoken English Classes",sub:"This course provides you the content for learning English and you'll be taught how to apply it in your daily communication.",aimg:nmrsir,n1:19980,n2:776,author:"NMR.Polagni",link:"/courses/1"},
    {id:2,name:"course2",img:course2,vn:4,price:"Free",title:"English Grammar",sub:"Grammar is the basic structure of any language. This course introduces you the different aspects of grammar in English language.",aimg:nmrsir,n1:799,n2:251,author:"NMR.Polagni",link:"/courses/2"},
    {id:3,name:"course3",img:course3,vn:7,price:"Free",title:"Indian Air Force",sub:"This course helps many students and aspirants in learning English required for cracking IAF examination.",aimg:nmrsir,n1:57,n2:14,author:"NMR.Polagni",link:"/courses/3"},
    {id:4,name:"course4",img:course4,vn:9,price:"Free",title:"A..AA... PLAYLIST",sub:"In this course,you'll be learning English language from scratch.This course is helpful for many beginners where you'll learn English from very basic level.",aimg:nmrsir,n1:20,n2:85,author:"NMR.Polagni",link:"/courses/4"},
    {id:5,name:"course5",img:course5,vn:1,price:"Free",title:"PUC courses",sub:"This course provides you the best content for PUC.",aimg:nmrsir,n1:412,n2:37,author:"NMR.Polagni",link:"/courses/5"}
]

const Details = ({id}) => {
    return (
        <>
        <div className='head'>
         <h2 className='head-title'>{courseCardInfo[id].title}</h2>
         <p className='pt-2 px-5'>{courseCardInfo[id].sub}</p>
      </div>

      <div className='container mb-5 cd'>
        <div className='row'>
            <div className='col-12 col-md-6'>
                <img src={courseCardInfo[id].img} className='img-fluid'/>
            </div>
            <div className='col-12 col-md-6'>
                <div className='d-flex justify-content-space-between'>
                    <h3>Trainer</h3>
                    <h4>{courseCardInfo[id].author}</h4>
                </div>
                <div className='d-flex justify-content-space-between'>
                    <h3>Course Fee</h3>
                    <h4>{courseCardInfo[id].price}</h4>
                </div>
                <div className='d-flex justify-content-space-between'>
                    <h3>Number of Videos</h3>
                    <h4>{courseCardInfo[id].vn}</h4>
                </div>
                <div className='d-flex justify-content-space-between'>
                    <h3>Number of Views</h3>
                    <h4>{courseCardInfo[id].n1}</h4>
                </div>
                <div className='d-flex justify-content-space-between'>
                    <h3>Number of Likes</h3>
                    <h4>{courseCardInfo[id].n2}</h4>
                </div>

            </div>
        </div>
      </div></>
    )
}
export default function CourseDetails() {
  var {id} = useParams();
  id = parseInt(id) - 1;
  return (
    <>
      <Header />
        <Details id={id}/>
      <Footer />
    </>
  )
}
