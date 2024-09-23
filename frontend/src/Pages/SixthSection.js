import React from 'react'
import './SixthSection.css'
import { GoDotFill } from 'react-icons/go'
import avator from '../Images/avatar.png'
import leftarrow from '../Images/Frame 73.png'
import rightarrow from '../Images/Frame 72.png'

function SixthSection() {
    return (
        <div className='sixth-section-main-div'>
            <div className='sixth-section-main-inner-div'>
                <div className='sixth-section-dot-heading'>
                    <GoDotFill style={{ fontSize: 'large', marginTop: '5px' }} /> Testimonials
                </div>
                <div className='sixth-section-right-side'>
                    <div className='sixth-section-text-right-side'>
                        A studio filled with passion,professionlism,
                        <br /> and boundless creativity.They exceeded my
                        <br /> expectations with their excellent services,
                        <br /> high-quality products,and affordable prices.
                        <br /> I'm extremly satisfied!
                    </div>
                    <div className='sixth-section-avator-right-side'>
                        <img src={avator} alt="" className='sixth-section-avatar-img' />
                        <div className='sixth-section-avator-text'>
                            Kathryn Murphy
                            <div style={{ fontSize: '75%' }}>
                                Senior Marketing, Spotify
                            </div>
                        </div>

                    </div>
                    <div className='sixth-section-avator-right-side-arrow'>
                        <img src={leftarrow} alt="" style={{marginRight:'3%'}} />
                        <img src={rightarrow} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SixthSection