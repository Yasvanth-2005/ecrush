import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Webcarousel from "../components/Webcarousel"

import heroImg from "../images/hero-img.png";
import ci1 from "../images/photography/1.webp";
import ci2 from "../images/photography/2.webp";
import ci3 from "../images/photography/7.webp";
import ci4 from "../images/photography/4.webp";
import ci5 from "../images/photography/5.webp";
import ci6 from "../images/photography/6.webp";

import c1 from "../images/Club Cards/e-library.webp";
import c2 from "../images/Club Cards/e-skills.webp";
import c3 from "../images/Club Cards/soft and communication.webp";
import c4 from "../images/Club Cards/content-writing.webp";
import c5 from "../images/Club Cards/photography.webp";
import c6 from "../images/Club Cards/quiz.webp";
import c7 from "../images/Club Cards/podcast.webp";
import c8 from "../images/Club Cards/Website designer.webp";
import c9 from "../images/Club Cards/desigin.webp";
import c10 from "../images/Club Cards/technical club.webp";
import c11 from "../images/Club Cards/promotion and marketing.webp";
import c12 from "../images/Club Cards/infra.webp";

import course1 from "../images/courses/Spoken english.webp";
import course2 from "../images/courses/E grammar.webp";
import course3 from "../images/courses/Airforce.webp";
import nmrsir from "../images/courses/nmrsir.webp";

const SectionTitle = (props) => {
  return (
    <div className="section-title">
      <h1>{props.title}</h1>
    </div>
  );
};

const ClubCard = (props) => {
    return(
        <div className="col-lg-3 col-md-4 card-container">
              <div className="card" style={{ backgroundColor: props.bgcolor }}>
                <div className="card-img">
                  <img src={props.img} className="img-fluid"/>
                </div>
                <div className="card-info">
                  <div className="clubname">{props.title}</div>
                  <p className="card-text">
                    {props.desc}
                  </p>
                  <Link to={props.link}>
                    <button className="card-btn"> Visit <span>&rarr;</span> </button>
                  </Link>
                </div>
              </div>
        </div>
    )
}

const clubCardsInfo = [
    {id:1,img:c1,bgcolor:"white",title:"E-Library",desc:"Explore through the shelves of our library...",link:"/club/e-library"},
    {id:2,img:c2,bgcolor:"#E7E0F3",title:"E-Skills",desc:"Enhance skills into strongest weapons...",link:"/club/e-skills"},
    {id:3,img:c3,bgcolor:"white",title:"Soft and Communication",desc:"Improves you in eloquence and fluency...",link:"/club/soft_and_communication"},
    {id:4,img:c4,bgcolor:"rgba(165, 185, 255, 0.33)",title:"Content Writing",desc:"Build a pavement for your voice and visions...",link:"/club/content_writing"},
    {id:5,img:c5,bgcolor:"#C5E6C0",title:"Photography",desc:"Captures our charming moments...",link:"/club/photography"},
    {id:6,img:c6,bgcolor:"white",title:"Quiz",desc:"Unlocks your knowledge and skills...",link:"/club/quiz"},
    {id:7,img:c7,bgcolor:"rgba(227, 228, 164, 0.62)",title:"Podcasting",desc:"This team works on giving voice over...",link:"/club/podcasting"},
    {id:8,img:c8,bgcolor:"white",title:"Web Development",desc:"We make progress with lines of code...",link:"/club/web_development"},
    {id:9,img:c9,bgcolor:"white",title:"Designing",desc:"Your creativity maintains our dignity...",link:"/club/desiging"},
    {id:10,img:c10,bgcolor:"rgba(183, 223, 225, 0.56)",title:"Technical",desc:"Brings us together through technology...",link:"/club/technical"},
    {id:11,img:c11,bgcolor:"white",title:"Promotion & Marketing",desc:"Best way to connect and reach you...",link:"/club/promotion_and_marketing"},
    {id:12,img:c12,bgcolor:"rgba(226, 190, 216, 0.48)",title:"Infra Team",desc:"We teach you real-time dedication...",link:"/club/infra"}
];

const CourseCard = (props) => {
  return (
    <div className="col-12 col-lg-4 col-md-6">
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
    </div>
  )
}

const courseCardInfo = [
  {id:1,img:course1,vn:55,price:"Free",title:"Spoken English Classes",sub:"This course provides you the content for learning English and you'll be taught how to apply it in your daily communication.",aimg:nmrsir,n1:19980,n2:776,author:"NMR.Polagni"},
  {id:2,img:course2,vn:4,price:"Free",title:"English Grammar",sub:"Grammar is the basic structure of any language. This course introduces you the different aspects of grammar in English language.",aimg:nmrsir,n1:799,n2:251,author:"NMR.Polagni"},
  {id:3,img:course3,vn:7,price:"Free",title:"Indian Air Force",sub:"This course helps many students and aspirants in learning English required for cracking IAF examination.",aimg:nmrsir,n1:57,n2:14,author:"NMR.Polagni"}
]

const Qlinks = (props) => {
   return (
    <div className="link-section container">
                <h1 className="link-title">{props.title}</h1>
                <div className="q-links">
                  <button>
                    <a href={props.l1}>{props.l1n}</a>
                  </button>
                  <button>
                    <a href={props.l2}>{props.l2n}</a>
                  </button>
                  <button>
                    <a href={props.l3}>{props.l3n}</a>
                  </button>
                  <button>
                    <a href={props.l4}>{props.l4n}</a>
                  </button>
                </div>
    </div>
   )
}

const qLinkSection = [
  {id:1,title:"RGUKT Websites",l1:"https://rguktn.ac.in/",l1n:"RGUKT Nuzvid",l2:"https://rguktrkv.ac.in/",l2n:"RGUKT RK Valley",l3:"https://rguktsklm.ac.in/",l3n:"RGUKT Sklm",l4:"https://rguktong.ac.in/",l4n:"RGUKT Ongole"},
  {id:2,title:"Student Websites",l1:"https://intranet.rguktn.ac.in/",l1n:"Intranet",l2:"https://intranet.rguktn.ac.in/SMS/",l2n:"SMS",l3:"http://103.225.13.244/updates/login.php",l3n:"Seating Position",l4:"https://examcell.rguktn.ac.in/",l4n:"Examination Cell"},
  {id:3,title:"Student Organisation Websites",l1:"https://www.instagram.com/sdcac_rguktn/",l1n:"SDCAC",l2:"https://www.instagram.com/studentmitra/",l2n:"Student Mitra",l3:"https://www.instagram.com/helpinghands_rguktn/",l3n:"Helping Hands",l4:"https://www.instagram.com/campus.chronicle/",l4n:"Campus Chronicle"}
]

export default function Home() {
  return (
    <>
      <Header />

      <section
        id="hero"
        className="container-fluid d-flex justify-content-center align-items-center"
      >
        <div className="hero-content container">
          <div className="heading">
            <h2 className="title">E-Crush</h2>
            <h4 className="sub-title">Provision for your vision</h4>
            <p className="context">
              This site is intended to provide the best resources to the
              RGUKTians.
            </p>
          </div>
          <div className="img">
            <img src={heroImg} alt="" className="img-fluid" />
          </div>
        </div>
      </section>

      <section id="about">
        <SectionTitle title="About US" />
        <div className="container">
          <div className="row">
            <div className="about-content col-12 col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0">
              <h3>
                E-CRUSH---<i>PROVISION FOR YOUR VISION</i>
              </h3>
              <i>
                E-Crush is a student body organisation meant to support students
                with their english developing skills. It is intended to promote
                best resources to the students of RGUKT to learn English
                fluently without hesitation and with confidence.
              </i>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i> It is the best platform to
                  improve yourself in many ways related to English..
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>The motto is to help
                  students leave the fear behind and move forward to learn
                  English with love and enthusiasm.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>Our mission is to make every
                  student and every volunteer to be good in English
                  LSRW(Listening, Speaking, Reading, and Writing) skills.
                </li>
              </ul>
              <p>
                We provide you a platform to learn many helpful things. We
                spread knowledge of English to all students of the campus by our
                daily activities, events, sessions, talks and many more...&nbsp;
                <Link
                  to="/about"
                  style={{
                    fontWeight: "bold",
                    fontSize: "17px",
                    color: "#093f5b",
                  }}
                >
                  read more&nbsp;<span>&rarr;</span>
                </Link>
              </p>
            </div>
            <div className="about-carousel col-12 col-lg-6 order-1 order-lg-2">
              <div
                className="carousel slide"
                id="about-carousel"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="img-fluid" src={ci1} alt="" />
                  </div>
                  <div className="carousel-item active">
                    <img className="img-fluid" src={ci2} alt="" />
                  </div>
                  <div className="carousel-item active">
                    <img className="img-fluid" src={ci3} alt="" />
                  </div>
                  <div className="carousel-item active">
                    <img className="img-fluid" src={ci4} alt="" />
                  </div>
                  <div className="carousel-item active">
                    <img className="img-fluid" src={ci5} alt="" />
                  </div>
                  <div className="carousel-item active">
                    <img className="img-fluid" src={ci6} alt="" />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#about-carousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#about-carousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="clubs">
        <SectionTitle title="clubs" />
        <div className="container">
          <div className="row">
             {clubCardsInfo.map(card => <ClubCard key={card.id} img={card.img} title={card.title} desc={card.desc} link={card.link} bgcolor={card.bgcolor}/>)}
          </div>
        </div>
      </section>

      <section id="courses">
      <SectionTitle title="courses" />
         <div className="container">
           <div className="row">
              {courseCardInfo.map(card => <CourseCard key={card.id} img={card.img} title={card.title} vn={card.vn} price={card.price} n1={card.n1} n2={card.n2} sub={card.sub} aimg={card.aimg} author={card.author}/>)}
           </div>
           <h2 className="coursetext"><Link to="/courses">Explore more<span>&rarr;</span></Link></h2>
         </div>
      </section>

      <section id="quick-links">
          <SectionTitle title="Quick Links" />
          {qLinkSection.map(link => <Qlinks key={link.id} title={link.title}  l1={link.l1} l1n={link.l1n} l2={link.l2} l2n={link.l2n} l3={link.l3} l3n={link.l3n} l4={link.l4} l4n={link.l4n}/>)}
      </section>

      <section id="web-developers">
          <div className="container">
             <SectionTitle title="WEBSITE DEVELOPERS" />
             <Webcarousel />
          </div>
      </section>

      <Footer />
    </>
  );
}
