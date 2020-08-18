import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <br/>
      <SectionOne/>
      <SectionTwo/>
    </div>
  );
}

export default App;
