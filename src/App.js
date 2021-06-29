import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
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
        <switch>
          <Route path="/" component={Home} exact/>
          <Route path="./projects/VirtualFest"  component={VirtualFest} />
          {/* <Route component={Error} /> */}
        </switch>
        <Footer/>
      </main>
    </BrowserRouter>
  );
}

export default App;
