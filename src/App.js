import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Header from './Header.js';
import Home from './Home.js';
import VirtualFest from './projects/VirtualFest.js';

import Footer from './Footer.js';
import "tailwindcss/tailwind.css";

function App() {
  return (
    <BrowserRouter>
      <main className="App grid grid-flow-row auto-rows-max ont-body bg-brand-primary">
        <Header/>
          <Switch>
            <Route path="">
              <Home />
            </Route>
            <Route path="/about">
              <VirtualFest />
            </Route>
          </Switch>
        <Footer/>
      </main>
    </BrowserRouter>
  );
}

export default App;
