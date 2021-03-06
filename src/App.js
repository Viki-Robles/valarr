import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import GalleryOfCards from './Cards/GalleryOfCards';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <h2 className="cards-title">Our Work<span className="dot">.</span></h2>
      <GalleryOfCards/>
      <Footer/>
    </div>
  );
}

export default App;
