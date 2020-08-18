import React from 'react';
import './SectionTwo.css';
import design from '../SectionOne/images/design1.png';

export default function SectionTwo() {
    return (
        <div className="sectionTwo-container">
            <div className="sectionTwo-itemA">
                <img src={design} alt=""/>
            </div>
            <div className="sectionTwo-itemB">
                <h4 className="sectionTwo-titleOne">01. Who</h4>
                <h2 className="sectionTwo-titleTwo">A creative web design and development agency based in Balham, London.</h2>
                <p className="sectionTwo-details">We are VALARR, a leading Creative Web Design Agency in London.
                We specialise in
                Creative Websites and Branding.
                </p>
            </div>
        </div>
    )
}