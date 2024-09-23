import React from 'react';
import './FourthSection.css';
import { GoDotFill } from 'react-icons/go';
import { BsArrowUpRightCircle } from "react-icons/bs";
import { PiArrowCircleUpRightThin } from "react-icons/pi";

function FourthSection() {
    return (
        <div className='fourth-section-main-div'>
            <div className='fourth-section-inner-box'>
                <div className='fourth-section-inner-box-heightHalf'>
                    <GoDotFill style={{ fontSize: 'large', marginTop: '5px' }} /> Our Services
                    <div className='fourth-section-inner-box-right-side'>
                        <div className='fourth-section-inner-box-right-side-hardcolor'>
                            We are a close-knit team of experts <br />
                            dedicated to crafting memorable and
                        </div>
                        <div className='fourth-section-inner-box-right-side-lowcolor'>
                            emotionally engaging websites, digital <br />
                            experiences, and native apps.
                        </div>

                    </div>

                </div>
                <div className='fourth-section-inner-box-down-heightHalf'>
                    <div className='fourth-section-inner-box-bottom'>
                        <div className='fourth-section-box' style={{ backgroundColor: '  rgb(77, 43, 244)' }}>
                            <div className='fourth-section-Box-heading'>BRAND <br /> IDENTITY
                            <PiArrowCircleUpRightThin className='arrowIcon' />
                            </div>
                            <div className='fourth-section-box-description'> 
                                  we provide digital solution as Website <br />
                                  Design,Mobile App Design,Landing <br />
                                  Page design,Illustration,Animation,etc <br />
                                  that increase company's values
                            </div>
                        </div>
                        <div className='fourth-section-box'>
                            <div className='fourth-section-Box-heading'>UI/UX <br />DESIGN
                            <PiArrowCircleUpRightThin className='arrowIcon' /></div>
                            <div className='fourth-section-box-description'> 
                                  we provide digital solution as Website <br />
                                  Design,Mobile App Design,Landing <br />
                                  Page design,Illustration,Animation,etc <br />
                                  that increase company's values
                            </div>
                        </div>
                        <div className='fourth-section-box'>
                            <div className='fourth-section-Box-heading'>WEBFLOW <br /> DEVELOPER
                            <PiArrowCircleUpRightThin className='arrowIcon' /></div>
                            <div className='fourth-section-box-description'> 
                                  we provide digital solution as Website <br />
                                  Design,Mobile App Design,Landing <br />
                                  Page design,Illustration,Animation,etc <br />
                                  that increase company's values
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FourthSection;
