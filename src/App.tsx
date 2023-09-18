import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import NavBar from "./components/NavBar";
import "./App.css";
import Mobilebar from "./components/Mobilebar";

function App() {
  return (
    <>
      <div className="Navbar">
        <NavBar />
      </div>
      <div className="Mobilebar">
        <Mobilebar />
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
