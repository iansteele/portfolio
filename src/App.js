import React, { Fragment } from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

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
      <Header />
      <Fragment>
        <ScrollToTop />
        <main className="flex-grow w-full leading-relaxed max-w-screen-2xl ">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/untappd-trial" component={UntappdTrial} />
            <Route path="/virtual-fest" component={VirtualFest} />
            <Route path="/illustration" component={Illustration} />
            <Route path="/grading" component={Grading} />
            <Route path="/annotation" component={Annotation} />
            <Route path="/untappd-digital-menus" component={DigitalMenus} />
          </Switch>
        </main>
      </Fragment>
      <Footer />
    </Router>
  );
}

export default App;
