import React from 'react';
import './App.css';

import header_background from "./media/Header_background.jpg"

import Title from "../src/Title/Title"
import About from "./About/About"
import Projects from "./Projects/Projects"
import Strategic from  "./Strategic/Strategic"
import ServiceProv from "./ServicesProv/ServiceProv"
import Team from "./Team/Team"
import Testimonials from './Testimonials/Testimonials'
import Blogs from "./Blogs/Blogs"
import Contact from './Contact/Contact'
import FinalNav from "./FinalNav/FinalNav"
import Navigation from "./Navigation/Navigation"
import SideNavigation from './Side_Navigation/Side_Navigation'

function App() {
  return (
    <div className="App">
      <div className="App__first">
        <img alt='' src={header_background} className="header__background"/>
        <div className="App__container">
          <Title/>
        </div>
      </div>
      <div className="App__second  background-color_brown">
        <SideNavigation/>
        <div className="App__container">
          <div className="app__mobile-item">
            <Navigation/>
          </div>
          <About/>
          <Projects/>
          <Strategic/>
          <ServiceProv/>
          <Team/>
          <Testimonials/>
          <Blogs/>
          <Contact/>
          <FinalNav/>
        </div>
     </div>
    </div>
  );
}

export default App;
