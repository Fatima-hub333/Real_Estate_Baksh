/* eslint-disable linebreak-style */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';

import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Services from './Components/Services';

const App = () => (
  <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </div>
    {/* <Navbar />
    <Projects />
    <About />
    <Services /> */}
  </>
);

export default App;
