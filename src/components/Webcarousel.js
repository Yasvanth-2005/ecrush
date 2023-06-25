import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

import siddu from "../images/trainers/siddhu.jpeg";
import rohita from "../images/trainers/siddhu.webp";
import anand from "../images/trainers/anand.jpg";
import arun from "../images/trainers/arun.jpg";

const WebCard = (props) => {
  return (
        <div className="webcard">
          <div className="web-img">
            <img src={props.img} alt="Siddhu" />
          </div>
          <div className="web-info">
            <h2 className="web-name">
              {props.name} <br /> <span>{props.pos}</span>
            </h2>
            <ul className="social-link">
              <li>
                <a
                  href="https://www.linkedin.com/in/siddartha-yernagula-a4745b238/"
                  className="bi bi-linkedin"
                  aria-hidden="true"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/siddhu_from_srikakulam/"
                  className="bi bi-instagram"
                  aria-hidden="true"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/siddhu_from_srikakulam/"
                  className="bi bi-facebook"
                  aria-hidden="true"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/siddartha-yernagula-a4745b238/"
                  className="bi bi-twitter"
                  aria-hidden="true"
                ></a>
              </li>
            </ul>
          </div>
        </div>
  );
};

const webDevs = [
    {id:1,img:siddu,name:"Siddartha Yernagula",pos:"Full Stack Web Developer"},
    {id:2,img:rohita,name:"Rohita Uppala",pos:"Full Stack Web Developer"},
    {id:3,img:anand,name:"Anand Prasad",pos:"Full Stack Web Developer"},
    {id:4,img:arun,name:"MAT574",pos:"Full Stack Web Developer"}
]

const MyCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 0,
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

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [responsive]);

  const showDots = deviceType !== "desktop";
  const swipeable = deviceType !== "desktop";
  const draggable = deviceType !== "desktop";
  const autoPlay = deviceType !== "desktop";

  return (
    <Carousel
      responsive={responsive}
      swipeable={swipeable}
      draggable={draggable}
      infinite={true}
      autoPlay={autoPlay}
      autoPlaySpeed={5000}
      removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      deviceType={deviceType}
      showDots={showDots}
      customTransition="all 0.5s ease"
      transitionDuration={500}
    >
      <div className="d-flex justify-content-center align-items-center">
        <WebCard key={webDevs[0].id} name={webDevs[0].name} img={webDevs[0].img} pos={webDevs[0].pos}/>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <WebCard key={webDevs[1].id} name={webDevs[1].name} img={webDevs[1].img} pos={webDevs[1].pos}/>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <WebCard key={webDevs[2].id} name={webDevs[2].name} img={webDevs[2].img} pos={webDevs[2].pos}/>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <WebCard key={webDevs[3].id} name={webDevs[3].name} img={webDevs[3].img} pos={webDevs[3].pos}/>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
