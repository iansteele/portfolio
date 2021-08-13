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
        <Header/>
        <main className="flex-grow w-full max-w-screen-2xl bg-brand-primary">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/virtual-fest" component={VirtualFest}/>
            <Route path="/illustration" component={Illustration}/>
            <Route path="/grading" component={Grading}/>
          </Switch>
        </main>
        <Footer/>
    </Router>
  );
}

export default App;
