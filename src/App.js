/* eslint-disable no-unused-vars */
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/landingpage/landingpage';
import Navbar from './components/TopBar/Topbar';
import Contact from './components/contact/contact';
import Ourproject from './components/ourprojects/ourproject';
import Service from './components/services/service';
import Ourleader from './components/leaders/ourleaders';
import Leaders from './components/leaders/leaders';
import MarketingSlider from './components/activites/slider/slider';
import About from './components/about/about';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Landing />
      <Contact />
      <Ourproject />
      <MarketingSlider />
      {/* <About/> */}
      <Service />
      <Ourleader />
      <Leaders />
    </BrowserRouter>
  );
}

export default App;
