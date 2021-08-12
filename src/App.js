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
import Footer from './components/Footer.js';
import "tailwindcss/tailwind.css";

function App() {
  return (
    <Router>
        <Header/>
        <main className="flex-grow bg-brand-primary">
          <Switch>
            <Route exact path="/portfolio" component={Home}/>
            <Route path="/portfolio/virtual-fest" component={VirtualFest}/>
            <Route path="/portfolio/illustration" component={Illustration}/>
          </Switch>
        </main>
        <Footer/>
    </Router>
  );
}

export default App;
