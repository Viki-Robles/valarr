import React from 'react';
import './SectionThree.css';
import mobile from '../SectionThree/images/mobile.png';


export default function SectionThree() {
    return (
        <div className="sectionThree-container">
            <div className="sectionThree-itemA">
                <h4 className="sectionThree-titleOne">02. How</h4>
                <h2 className="sectionThree-titleTwo">VALARR are specialists in :</h2>
                <ul>
                    <li className="sectionThree-details">Web Development</li>
                    <li className="sectionThree-details">Web Design</li>
                    <li className="sectionThree-details">UI and UX Design</li>
                </ul>
            </div>
            <div className="sectionThree-itemB">
                <img src={mobile} alt=""/>
            </div>
        </div>
    )
}