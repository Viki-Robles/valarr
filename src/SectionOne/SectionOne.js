import React from 'react';
import './SectionOne.css';

export default function SectionOne() {
    return (
        <div className="sectionOne">
            <div className="sectionOne-Items">
                <div className="sectionOne-itemA">
                    <h2 className="logo">VΑL</h2>
                    <h2 className="logo">ΛRR</h2>
                </div>
                <div className="sectionOne-itemB">
                    <h2 className="sectionOne-itemB-header">Building Digital</h2>
                    <h2 className="sectionOne-itemB-header">Time Wraps.</h2>
                    <button className="sectionOne-button">VIEW OUR WORK</button>
                </div>
            </div>
        </div>
    );
}
