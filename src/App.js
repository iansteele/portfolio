import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/Index";
import ScrollToTop from "./components/ScrollToTop.js";
import Home from "./Home.js";
import UntappdTrial from "./projects/UntappdTrial.js";
import VirtualFest from "./projects/VirtualFest.js";
import Illustration from "./projects/Illustration.js";
import Grading from "./projects/Grading.js";
import Annotation from "./projects/Annotation.js";
import DigitalMenus from "./projects/DigitalMenus.js";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <Router basename={"/"}>
      <ScrollToTop>
        <Header />
        {/* <ScrollToTop /> */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/untappd-trial" element={<UntappdTrial />} />
          <Route path="/virtual-fest" element={<VirtualFest />} />
          <Route path="/illustration" element={<Illustration />} />
          <Route path="/grading" element={<Grading />} />
          <Route path="/annotation" element={<Annotation />} />
          <Route path="/untappd-digital-menus" element={<DigitalMenus />} />
        </Routes>

        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
