import React from 'react';
import './SectionOne.css';
import video from '../Video/images/videoplayback.mp4';
import rocket from '../SectionOne/images/rocket.png';

export default function SectionOne() {
    return (
        <div className="sectionOne">
            <div className="spider">
                <div className="spiderWeb"></div>
                <div className="body">
                    <div className="eye left"></div>
                    <div className="eye right"></div>
                    </div>
                <div className="legs left">
                    <div className="leg"></div>
                    <div className="leg"></div>
                    <div className="leg"></div>
                </div>
                <div className="legs right">
                    <div className="leg"></div>
                    <div className="leg"></div>
                    <div className="leg"></div>
                </div>
               
            </div>
            {/* <video autoPlay loop muted
            style={{
                position:"absolute",
                width:"100%",
                objectFit:"cover",
                left:"50%",
                rigth:"50%",
                transform:"translate(-50%, -50%)",
                zIndex:"-1",
                heigth:"150%",
                // marginTop:"15%"
            }}>
                <source src={video} type="video/mp4"/>
            </video> */}
            <div className="sectionOne-Items">
                <div className="sectionOne-itemA">
                    {/* <img src={rocket} alt=""/> */}
                    {/* <h2 className="logo">VΑL</h2>
                    <h2 className="logo two">ΛRR</h2> */}
                </div>
                <div className="sectionOne-itemB">
                    <h2 className="sectionOne-itemB-header"><span>Sky</span>Rocket your Business.</h2>
                    <h2 className="sectionOne-itemB-header">Build your brand.</h2>
                    <button className="sectionOne-button">VIEW OUR WORK</button>
                </div>
            </div>
        </div>
    );
}
