import React from 'react'
import './SecondSection.css'
import { GoDotFill } from "react-icons/go";
import frame66 from '../Images/Frame 66.png'
import { MdOutlineArrowOutward } from 'react-icons/md';
import Group2 from '../Images/Group 2 (1).png'

function SecondSection() {
  return (
    <div className='second-section-main-div'>
      <div className='second-section-left-side'>
        <div className='second-section-left-side-point'>
          <GoDotFill /> Who are we?
        </div>
        <div className='second-section-left-side-frame'>
          <img src={frame66} alt="" />
        </div>
      </div>
      <div className='second-section-right-side'>
        <div className='second-section-rigth-side-font-sizebigger'>
          We create mind-blowing visuals,brand, <br />
          website and products
          <span className="second-section-right-side-font-sizediffernt"> that help startups <br />and innovative companies gains more <br /> exposure</span>
        </div>
        <button className='learn-more-buttons'>
          Explore
          <MdOutlineArrowOutward className='learn-more-arrowIcons' />
        </button>
      </div>
      <img src={Group2} alt="" className='second-section-group2-image' />
    </div>
  )
}

export default SecondSection