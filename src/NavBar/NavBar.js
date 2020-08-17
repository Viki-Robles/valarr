import React, { useState } from 'react';
import './NavBar.css';
import burger from './images/burger.png'

export default function NavBar() {
    const [menuDisplay, setMenuDisplay] = useState("menuDisplayoff");

   function toggleMenu() {
    setMenuDisplay(menuDisplay === "menuDisplayoff" ? "" : "menuDisplayoff");
  }
  return (
    <div>
      <nav className="myNav">
        <button className="burgerButton" onClick={() => toggleMenu()}>
        <img className="burger" src={burger} alt="burger" />
        </button>
      </nav>
      <main className="navMenu" id={menuDisplay}>
        <h4 className="navItem">
          <a href="#work" onClick={() => toggleMenu()}>
            Work
          </a>
        </h4>
        <h4 className="navItem">
          <a href="#about" onClick={() => toggleMenu()}>
            About
          </a>
        </h4>
        <h4 className="navItem">
          <a href="#contact" onClick={() => toggleMenu()}>
            Contact
          </a>
        </h4>
      </main>
    </div>
  );
}

/* * <img className="burger" src={mylogo} alt="burger" /> */
