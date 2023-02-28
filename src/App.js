import React from "react";

import { Header, Footer, ThemeSwitcher } from "../pages/components/Index";
import ScrollToTop from "../pages/components/ScrollToTop.js";
import Home from "../pages/Home.js";
import UntappdTrial from "../pages/projects/UntappdTrial.js";
import VirtualFest from "../pages/projects/VirtualFest.js";
import Illustration from "../pages/projects/Illustration.js";
import Grading from "../pages/projects/Grading.js";
import Annotation from "../pages/projects/Annotation.js";
import DigitalMenus from "../pages/projects/DigitalMenus.js";

function App() {
  return (
    <Router basename={"/"}>
      <ScrollToTop>
        <ThemeSwitcher />
        <Header />
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
