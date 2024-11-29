import React, { useState, useEffect } from 'react';
import './App.css';
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Navbar from './components/Navbar/Navbar';
import Page1 from './components/Page1/Page1';
import Cursor from './components/Cursor/Cursor';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';
import Page4 from './components/Page4/Page4';
import Page5 from './components/Page5/Page5';
function App() {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  return (
    <div id="main">
      
      <Cursor />
      <Navbar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
    </div>
  );
}

export default App;
