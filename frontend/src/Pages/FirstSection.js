import React from 'react';
import './FirstSection.css';
import Navbar from './Navbar';
import WeCreateAward from '../Images/We create award winning website.png';
import Frame125 from '../Images/Frame 125.png'
import { MdOutlineArrowOutward } from "react-icons/md";

function FirstSection() {
  return (
    <div className="first-sections">
      <div
        className="first-section-background-grid"
      >
        <Navbar />
        <div className='first-section-inner-though'>
          <div className='first-section-inner-left'>
            <img src={WeCreateAward} alt="We Create Award" className='first-section-inner-left-image' />
          </div>
          <div className='first-section-inner-down'>
            <div className='first-section-inner-down-left'>
           Based in San Francisco,We're a digital <br />
           products design& development studio <br />
           that passionate with the creation high <br />
           applicability of digital experiences
           <button className='Explore-buttons'>
           Explore
           <MdOutlineArrowOutward className='Explore-arrowIcons' />
         </button>
            </div>
            <div className='first-section-inner-down-right'>
              <img src={Frame125} alt="We Create Award" className='first-section-inner-right-image ' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
