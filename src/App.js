import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Header from './components/Header.js';
import Home from './Home.js';
import VirtualFest from './projects/VirtualFest.js';
import Illustration from './projects/Illustration.js';
import Grading from './projects/Grading.js';
import Footer from './components/Footer.js';
import "tailwindcss/tailwind.css";

function App() {
  return (
    <Router>
        <Header className="max-w-screen-2xl"/>
        <main className="flex-grow max-w-screen-2xl bg-brand-primary">
          <Switch>
            <Route exact path="/portfolio" component={Home}/>
            <Route path="/portfolio/virtual-fest" component={VirtualFest}/>
            <Route path="/portfolio/illustration" component={Illustration}/>
            <Route path="/portfolio/grading" component={Grading}/>
          </Switch>
        </main>
        <Footer className="max-w-screen-2xl"/>
    </Router>
  );
}

export default App;
