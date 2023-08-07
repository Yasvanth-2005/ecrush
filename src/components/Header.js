import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap";
import logo from "../images/favicon.png";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export default function Header({ transparent }) {
  const navbarRef = useRef(null);
  const navToggleRef = useRef(null);
  const mobileDropDownRef = useRef(null);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const navToggle = () => {
    navbarRef.current.classList.toggle("navbar-mobile");
    navToggleRef.current.classList.toggle("bi-list");
    navToggleRef.current.classList.toggle("bi-x");
  };

  const mobileDropDown = (e) => {
    if (navbarRef.current.classList.contains("navbar-mobile")) {
      e.preventDefault();
      mobileDropDownRef.current.classList.toggle("dropdown-active");
    }
  };

  const [headerStyle, setHeaderStyle] = useState(
    transparent
      ? {
          backgroundColor: "transparent",
          boxShadow: "none",
        }
      : {
          backgroundColor: "white",
          boxShadow:
            "0 1px 0 0 rgb(139 141 157 / 5%), 0 5px 10px 0 rgb(65 71 108 / 15%)",
        }
  );

  if (transparent) {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setHeaderStyle({
          backgroundColor: "white",
          boxShadow:
            "0 1px 0 0 rgb(139 141 157 / 5%), 0 5px 10px 0 rgb(65 71 108 / 15%)",
        });
      } else {
        setHeaderStyle({
          backgroundColor: "transparent",
          boxShadow: "none",
        });
      }
    });
  }

  return (
    <header className="fixed-top" style={headerStyle}>
      <div className="container d-flex align-items-center">
        <Link to="/" className="logo me-auto">
          <img src={logo} alt="E-Crush" className="img-fluid" />
        </Link>
        <nav
          id="navbar"
          ref={navbarRef}
          className="navbar order-last order-lg-0"
        >
          <ul>
            <li className="navElement">
              <Link className="active" to="/" id="navElement">
                Home
              </Link>
            </li>
            <li className="navElement">
              <Link to="/about" id="navElement">
                About
              </Link>
            </li>
            <li className="navElement">
              <Link to="/trainers" id="navElement">
                Weekend Trivia
              </Link>
            </li>
            <li className="navElement">
              <Link to="/courses" id="navElement">
                Courses
              </Link>
            </li>
            <li className="navElement">
              <Link to="/events" id="navElement">
                Events
              </Link>
            </li>
            <li className="dropdown">
              <a href="#" id="navElement" onClick={mobileDropDown}>
                <span>Clubs</span>
                <i className="bi bi-chevron-down"></i>
              </a>
              <ul ref={mobileDropDownRef}>
                <li style={{ color: "white" }}>
                  <Link to="/club/e-library">E-Library</Link>
                </li>
                <li style={{ color: "white" }}>
                  <Link to="/club/e-skills">E-Skills</Link>
                </li>
                <li style={{ color: "white" }}>
                  <Link to="/club/soft_and_communication">
                    Soft & Communication SkillS
                  </Link>
                </li>
                <li style={{ color: "white" }}>
                  <Link to="/club/content_writing">Content Writing</Link>
                </li>
                <li style={{ color: "white" }}>
                  <Link to="/club/photography">Photography</Link>
                </li>
                <li style={{ color: "white" }}>
                  <Link to="/club/quiz">Quiz</Link>
                </li>
                <li style={{ color: "white" }}>
                  <Link to="/club/podcasting">Podcasting</Link>
                </li>
                <li style={{ color: "white" }}>
                  <Link to="/club/web_development">Web Development</Link>
                </li>
                <li style={{ color: "white" }}>
                  <Link to="/club/desiging">Desiging</Link>
                </li>
                <li style={{ color: "white" }}>
                  <Link to="/club/promotion_and_marketing">
                    Promotions & Marketing
                  </Link>
                </li>
                <li style={{ color: "white" }}>
                  <Link to="/club/technical">Technical</Link>
                </li>
                <li style={{ color: "white" }}>
                  <Link to="/club/infra">Infra Team</Link>
                </li>
              </ul>
            </li>
            <li className="navElement">
              <Link to="/contact" id="navElement">
                Contact Us
              </Link>
            </li>
            <li className="navElement">
              <Link
                to="/newspaper"
                id="navElement"
                style={{ marginRight: "10px" }}
              >
                News
              </Link>
            </li>
          </ul>
          <div>
            {!userData ? (
              <Link
                to="/signin"
                style={{
                  backgroundColor: "#093f5b",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
                className="signin-btn"
              >
                Sign In
              </Link>
            ) : (
              <div
                className="round signin-btn"
                style={{
                  width: "40px",
                  height: "40px",
                  overflow: "hidden",
                  borderRadius: "50%",
                  marginLeft: "5px",
                  cursor: "pointer",
                }}
              >
                {userData.picture == "" ? (
                  <h3 align="center bg-primary">{userData.name.charAt(0)}</h3>
                ) : (
                  <img
                    alt={userData.name}
                    src={userData.picture}
                    className="img-fluid"
                    title={userData.family_name}
                  />
                )}
              </div>
            )}
          </div>
          <i
            className="bi bi-list mobile-nav-toggle"
            style={{ marginLeft: "10px" }}
            onClick={navToggle}
            ref={navToggleRef}
          ></i>
        </nav>
      </div>
    </header>
  );
}
