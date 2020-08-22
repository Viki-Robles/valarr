import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import GalleryOfCards from './Cards/GalleryOfCards';

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <GalleryOfCards/>
    </div>
  );
}

export default App;
