import React from 'react'
import './EndSection.css'
import xlogo from '../Images/X tiwwter logo.png'
import instagrmlog from '../Images/instagram logo.png'
import worldlogo from '../Images/world log.png'
import belogo from '../Images/be logo.png'
import phonelogo from '../Images/phone logo.png'
import emaillogo from '../Images/mail logo.png'
import { MdOutlineArrowOutward } from 'react-icons/md'
import Wefologo from '../Images/Wefo.png';

function EndSection() {
    return (
        <div className='end-section-first-div'>
            <div className='end-section-main-div'>
                <div className='end-section-left-inner-div'>
                    <div className='end-section-left-side-bigfont'> Feel free to connect <br />with us !</div>
                    <div className='logos-end'>
                        <img src={xlogo} alt="" className='one-logos-end' />
                        <img src={instagrmlog} alt="" className='one-logos-end' />
                        <img src={worldlogo} alt="" className='one-logos-end' />
                        <img src={belogo} alt="" className='one-logos-end' />
                    </div>
                    <div className='end-section-contact-details'>
                        <div className='contact'>
                            <img src={phonelogo} alt="" style={{ marginTop: '1%' }} /> 0972663633
                        </div>
                        <div className='contact'>
                            <img src={emaillogo} alt="" style={{ marginTop: '1%' }} /> hello@wefo.com
                        </div>
                    </div>
                </div>
                <div className='end-section-right-inner-div'>
                    <div className='input-fields'>
                        <div className='heading-name'>
                            Name<div style={{ color: 'red' }}>*</div>
                        </div>
                        <input type="text" name="" id="" placeholder='Your name' className='input-name' />
                    </div>
                    <div className='input-fields'>
                        <div className='heading-name'>
                            Email<div style={{ color: 'red' }}>*</div>
                        </div>
                        <input type="text" name="" id="" placeholder='Your email address' className='input-email' />
                    </div>
                    <div className='input-fields'>
                        <div className='heading-name'>
                            Message
                        </div>
                        <input type="text" name="" id="" placeholder='Write your message here...' className='input-message' />
                    </div>
                    <button className='comment-button'>
                        Send
                        <MdOutlineArrowOutward className='comment-arrowIcon' />
                    </button>
                </div>
            </div>
            <div className='end-div'>
                <div className='end-div-line'>
                    <div className='down-section-text'>
                        <img src={Wefologo} alt="Wefo Logo" />
                        <div style={{ float: 'right' }} className='down-section-bottons-right'>
                            <button className='down-button'>
                                Privacy
                            </button>
                            <button className='down-button'>
                                Term
                            </button>
                            <button className='down-button'>
                                Security
                            </button> 
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EndSection