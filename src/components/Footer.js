import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-info" id="footer">
        <div className="container">
          <div class="row footer-top">
            <div class="col-lg-3 col-md-6 footer-contact">
              <h4 class="text-white">E-Crush</h4>
              <p>
                Rajiv Gandhi University of Knowledge and Technologies,
                <br />
                Nuzvid, Eluru,
                <br />
                Andhra Pradesh - 521202
                <br />
                <br />
                <strong>Email:</strong> ecrush@rguktn.ac.in <br />
              </p>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4 class="text-white">Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <Link to="/">Home</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link to="/contact">Contact us</Link>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4 class="text-white">Our Services</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link to="/club/e-library">E-Library</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link to="/club/e-skills">E-Skills</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link href="/club/quiz">Quiz</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link to="/club/web_development">Web Development</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link to="/club/soft_and_communication">
                    Communtaions Skills
                  </Link>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4 class="text-white">Comment us</h4>
              <p>Give your valuable suggestions</p>
              <form action="apis/add_suggestions.php" method="post">
                <input type="email" name="message" />
                <input type="submit" value="send" />
              </form>
              <br />

              <div class="social-links text-center text-md-right pt-3 pt-md-0">
                <div class="icons">
                  <a
                    href="https://www.youtube.com/channel/UCG7OmgaVdsa0QASdBsHNo-w"
                    class="yt"
                  >
                    <i class="bi bi-youtube"></i>
                  </a>
                  <a href="https://www.facebook.com/ecrush.rgukt.9" class="fb">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="https://twitter.com/ERgukt?s=08" class="twitter">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a
                    href="https://instagram.com/ecrushrguktn?utm_medium=copy_link"
                    class="insta"
                  >
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a
                    href="http://www.linkedin.com/in/ecrush-rguktn"
                    class="linkedin"
                  >
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-credits">
        <p>
          &copy; Copyright E-Crush. All Rights Reserved Designed by{" "}
          <Link to="/club/web-development" style={{ textDecoration: "none" }}>
            {" "}
            Web Team E-Crush{" "}
          </Link>
        </p>
      </div>
    </footer>
  );
}
