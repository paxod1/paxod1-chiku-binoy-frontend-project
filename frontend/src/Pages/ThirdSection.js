import React from 'react'
import './ThirdSection.css'
import frame24 from '../Images/Frame 24 (2).png'
import frame25 from '../Images/Frame 25 (3).png'
import { GoDotFill } from 'react-icons/go'
function ThirdSection() {
    return (
        <div className='third-section-main-div'>
        
            <div className='third-section-left-side'>
                <div className='third-section-card-design'>
                    <div className='third-section-card-image'>
                        <img src={frame24} alt="" />
                    </div>
                    <div className='third-section-card-description'>
                        <button className='third-section-card-description-button'>
                            Development
                        </button>
                        <button className='third-section-card-description-button'>
                            UI/UX
                        </button>
                        <button className='third-section-card-description-button'>
                            Illustration
                        </button>
                    </div>
                    <div className='third-section-card-title-description'>
                        Roboto Landing page
                    </div>
                </div>
                <div className='third-section-card-design'>
                    <div className='third-section-card-image'>
                        <img src={frame24} alt="" />
                    </div>
                    <div className='third-section-card-description'>
                        <button className='third-section-card-description-button'>
                            Development
                        </button>
                        <button className='third-section-card-description-button'>
                            UI/UX
                        </button>
                        <button className='third-section-card-description-button'>
                            Illustration
                        </button>
                    </div>
                    <div className='third-section-card-title-description'>
                        Groteck Website
                    </div>
                </div>
            </div>
            <div className='third-section-right-side'>
                <div className='third-section-right-side-dot'>
                    <GoDotFill /> Featured Works
                </div>
                <div className='third-section-right-side-heading'>
                    Take a look at <br />
                    our projects
                </div>
                <div className='third-section-card-design'>
                    <div className='third-section-card-image'>
                        <img src={frame25} alt="" />
                    </div>
                    <div className='third-section-card-right-description'>
                        <button className='third-section-card-right-description-button'>
                            UI/UX
                        </button>
                        <button className='third-section-card-right-description-button'>
                            Illustration
                        </button>
                    </div>
                    <div className='third-section-card-right-title-description'>
                        Poppin App Design
                    </div>
                </div>
                <div className='third-section-card-design'>
                    <div className='third-section-card-image'>
                        <img src={frame24} alt="" />
                    </div>
                    <div className='third-section-card-right-description'>
                        <button className='third-section-card-right-description-button'>
                            Branding
                        </button>
                        <button className='third-section-card-right-description-button'>
                            UI/UX
                        </button>
                    </div>
                    <div className='third-section-card-right-title-description'>
                       Halvatica Branding
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection