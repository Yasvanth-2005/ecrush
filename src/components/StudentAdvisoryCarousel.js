import React,{ useEffect, useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import i1 from "../images/advisory/chandu.webp"
import i2 from "../images/advisory/rohitha.webp"
import i3 from "../images/advisory/Mohan.webp"
import i4 from "../images/advisory/yamuna.webp"
import i5 from "../images/advisory/surya.webp"
import i6 from "../images/advisory/Reshma.webp"
import i7 from "../images/advisory/alekhya.webp"
import i8 from "../images/advisory/Manvitha.webp"
import i9 from "../images/advisory/Aditya.webp"
import i10 from "../images/advisory/Mohan_Krishna.webp"

const StudentAdvisoryCard = (props) => {
  return(
    <div className="sa-card mb-5">
        <div className="img">
          <img src={props.img} className="img-fluid"/>
        </div>
        <h4>{props.name}</h4>
        <p align="center">{props.pos}</p>
    </div>
  )
}

const sa = [
  {id:1,img:i1,name:"Chandra Shekar Kalisetti",pos:"Ex-President"},
  {id:2,img:i2,name:"ROHITHA UPPALA",pos:" EX-Vice President"},
  {id:3,img:i3,name:"MOHAN VEMULA",pos:"Ex-Vice President"},
  {id:4,img:i4,name:"YAMUNA KADAVA",pos:"Ex-General Secretary"},
  {id:5,img:i5,name:"SURYA TRINADH",pos:"Ex-General Secretary"},
  {id:6,img:i6,name:"RESHMA PATHAN",pos:"Ex-Joint Secretary"},
  {id:7,img:i7,name:"ALEKHYA TAMISETTI",pos:"Ex-Joint Secretary"},
  {id:8,img:i8,name:"MANVITHA Y",pos:"Ex-Treasurer"},
  {id:9,img:i9,name:"MOHAN ADITYA",pos:"Web Team Co-ordinator"},
  {id:10,img:i10,name:"MOHAN KRISHNA",pos:"E-Crush Pods Co-ordinator"}
]

const MyCarousel = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 660 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 660, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  
    const [deviceType, setDeviceType] = useState("");
  
    useEffect(() => {
      const handleResize = () => {
        const { innerWidth } = window;
        if (innerWidth >= responsive.desktop.breakpoint.min) {
          setDeviceType("desktop");
        } else if (
          innerWidth >= responsive.tablet.breakpoint.min &&
          innerWidth <= responsive.tablet.breakpoint.max
        ) {
          setDeviceType("tablet");
        } else {
          setDeviceType("mobile");
        }
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [responsive]);

  
    return (
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        deviceType={deviceType}
        showDots={true}
        customTransition="all 0.5s ease"
        transitionDuration={500}
      >
        <div className="d-flex justify-content-center align-items-strech">
          <StudentAdvisoryCard key={sa[0].id} name={sa[0].name} img={sa[0].img} pos={sa[0].pos}/>
        </div>
        <div className="d-flex justify-content-center align-items-strech">
          <StudentAdvisoryCard key={sa[1].id} name={sa[1].name} img={sa[1].img} pos={sa[1].pos}/>
        </div>
        <div className="d-flex justify-content-center align-items-strech">
          <StudentAdvisoryCard key={sa[2].id} name={sa[2].name} img={sa[2].img} pos={sa[2].pos}/>
        </div>
        <div className="d-flex justify-content-center align-items-strech">
          <StudentAdvisoryCard key={sa[3].id} name={sa[3].name} img={sa[3].img} pos={sa[3].pos}/>
        </div>
        <div className="d-flex justify-content-center align-items-strech">
          <StudentAdvisoryCard key={sa[4].id} name={sa[4].name} img={sa[4].img} pos={sa[4].pos}/>
        </div>
        <div className="d-flex justify-content-center align-items-strech">
          <StudentAdvisoryCard key={sa[5].id} name={sa[5].name} img={sa[5].img} pos={sa[5].pos}/>
        </div>
        <div className="d-flex justify-content-center align-items-strech">
          <StudentAdvisoryCard key={sa[6].id} name={sa[6].name} img={sa[6].img} pos={sa[6].pos}/>
        </div>
        <div className="d-flex justify-content-center align-items-strech">
          <StudentAdvisoryCard key={sa[7].id} name={sa[7].name} img={sa[7].img} pos={sa[7].pos}/>
        </div>
        <div className="d-flex justify-content-center align-items-strech">
          <StudentAdvisoryCard key={sa[8].id} name={sa[8].name} img={sa[8].img} pos={sa[8].pos}/>
        </div>
        <div className="d-flex justify-content-center align-items-strech">
          <StudentAdvisoryCard key={sa[9].id} name={sa[9].name} img={sa[9].img} pos={sa[9].pos}/>
        </div>
      </Carousel>
    );
  };
  

  export default MyCarousel;