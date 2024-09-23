import React from 'react';
import './Navbar.css';
import Wefologo from '../Images/Wefo.png';
import { MdOutlineArrowOutward } from "react-icons/md";

function Navbar() {
  return (
    <div className='navbar-main'>
      <div className='wefologo-image'>
        <img src={Wefologo} alt="Wefo Logo" />
      </div>
      <div className='navbar-options'>
        <div className='menuItems'>Menu item</div>
        <div className='menuItems'>Menu item</div>
        <div className='menuItems'>Menu item</div>
        <div className='menuItems'>Menu item</div>
      </div>
      <button className='start-project-button'>
        Start Project
        <MdOutlineArrowOutward className='start-project-arrowIcon' />
      </button>
    </div>
  );
}

export default Navbar;
