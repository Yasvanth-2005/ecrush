import { Routes,Route } from "react-router-dom";
import "./App.css"

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Events from "./pages/Events";
import Trainers from "./pages/Trainers";


function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/trainers" element={<Trainers />} />
      </Routes>
  );
}

export default App;
