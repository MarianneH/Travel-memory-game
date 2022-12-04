import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rules from "./pages/rules/Rules";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <div className="grid_main_wrapper">
          <Navbar />
          <Routes>
            <Route element={<Home />} exact path="/" />
            <Route element={<Rules />} path="/rules" />
            <Route element={<AboutUs />} path="/about-us" />
          </Routes>
        </div>
        <div className="grid_footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
