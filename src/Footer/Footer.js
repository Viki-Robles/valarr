import React from 'react';
import './Footer.css';
import linkedin from '../Footer/images/linkedin.png';
import github from '../Footer/images/github.png';

export default function Footer() {
    return (
        <div className="footer" id="contact">
            <div className="footer-itemA">
                <ul>
                    <li className="footer-li">Home</li>
                    <li className="footer-li">Services</li>
                    <li className="footer-li">Work</li>
                </ul>
            </div>
            <div className="footer-itemB">
                <div className="footer-item">VALARR</div>
                <div className="footer-item">155 Endlesham Road</div>
                <div className="footer-item">London</div>
                <div className="footer-item">SW12 8JN</div>
                <div className="footer-item">+44 (0) 7438 577 974</div>
                <div className="footer-item">
                    <a href="mailto:vasiliki.robles@gmail.com" className="email">vasiliki.robles@gmail.com</a>
                </div>
                <div className="footer-icons">
                <div className="footer-item-linkedin"><img src={linkedin} alt=""/></div>
                <div className="footer-item-github"><img src={github} alt=""/></div>
                </div>
            </div>
            <div className="copywrite">@Copywrite 2020. VALARR</div>
        </div>
    )
}