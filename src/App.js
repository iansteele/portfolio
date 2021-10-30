import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import Header from './components/Header.js';
import Home from './Home.js';
import UntappdTrial from './projects/UntappdTrial.js';
import VirtualFest from './projects/VirtualFest.js';
import Illustration from './projects/Illustration.js';
import Grading from './projects/Grading.js';
import DigitalMenus from './projects/DigitalMenus.js';
import Footer from './components/Footer.js';
import "tailwindcss/tailwind.css";

function App() {
  return (
    <Router basename={"/"}>
        <Header/>
        <main className="flex-grow w-full max-w-screen-2xl bg-brand-primary">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/untappd-trial" component={UntappdTrial}/>
            <Route path="/virtual-fest" component={VirtualFest}/>
            <Route path="/illustration" component={Illustration}/>
            <Route path="/grading" component={Grading}/>
            <Route path="/untappd-digital-menus" component={DigitalMenus}/>
          </Switch>
        </main>
        <Footer/>
    </Router>
  );
}

export default App;
