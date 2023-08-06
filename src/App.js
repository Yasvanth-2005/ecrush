import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Events from "./pages/Events";
import Trainers from "./pages/Trainers";

import E_library from "./pages/E_library";
import E_skills from "./pages/E_skills";
import Content_writing from "./pages/Content_writing";
import Desiging from "./pages/Desiging";
import Infra from "./pages/Infra";
import Photography from "./pages/Photography";
import Podcasting from "./pages/Podcasting";
import Promotion_and_marketing from "./pages/Promotion_and_marketing";
import Quiz from "./pages/Quiz";
import Soft_and_communications from "./pages/Soft_and_communications";
import Soft_skills from "./pages/Soft_skills";
import Technical from "./pages/Technical";
import Web_Dev from "./pages/Web_development";
import SignIn from "./pages/SignIn";

import Core from "./pages/Core";
import Advisory from "./pages/Advisory";
import CourseDetails from "./pages/CourseDetails";
import Newspaper from "./pages/Newspaper";

import Admin from "./admin/admin";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const google_api_token =
    "1039475539573-dmibas8it6c09r3qm91dl2apnfnck7tq.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={google_api_token}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/club/e-library" element={<E_library />} />
        <Route path="/club/e-skills" element={<E_skills />} />
        <Route path="/club/content_writing" element={<Content_writing />} />
        <Route path="/club/desiging" element={<Desiging />} />
        <Route path="/club/infra" element={<Infra />} />
        <Route path="/club/photography" element={<Photography />} />
        <Route path="/club/podcasting" element={<Podcasting />} />
        <Route
          path="/club/promotion_and_marketing"
          element={<Promotion_and_marketing />}
        />
        <Route path="/club/quiz" element={<Quiz />} />
        <Route
          path="/club/soft_and_communication"
          element={<Soft_and_communications />}
        />
        <Route path="/club/soft_skills" element={<Soft_skills />} />
        <Route path="/club/technical" element={<Technical />} />
        <Route path="/club/web_development" element={<Web_Dev />} />
        <Route path="/about/core-team" element={<Core />} />
        <Route path="/about/advisory-team" element={<Advisory />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/newspaper" element={<Newspaper />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
