import React from 'react';
import './SectionOne.css';
import video from '../Video/images/videovk.mp4';
import rocket from '../SectionOne/images/rocket.png';
import Card from '../Cards/Card';

export default function SectionOne() {
    return (
        <div className="sectionOne">
            <video autoPlay loop muted
            style={{
                width:"100%",
                zIndex:"-1",
                heigth:"150%",
                // marginTop:"15%"
            }}>
            <source src={video} type="video/mp4"/>
            </video>
            <div className="sectionOne-Items">
                <div className="sectionOne-itemA">
                </div>
                <div className="sectionOne-itemB">
                    <h2 className="sectionOne-itemB-header">We Build Digital Time Wraps.</h2>
                    <button className="sectionOne-button">VIEW OUR WORK</button>
                </div>
            </div>
        </div>
    );
}
