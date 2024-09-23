import React from 'react'
import './FifthSection.css'
import { GoDotFill } from 'react-icons/go'
import { RxLinkedinLogo } from "react-icons/rx";
import { RxInstagramLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
function FifthSection() {
    return (
        <>
            <div className='fifth-section-main-div'>
                <div className='fifth-section-main-inner-div'>
                    <div className='fifth-section-main-heading-dotHeading'>
                        <div className='fifth-section-main-heading-left'>
                            <GoDotFill style={{ fontSize: 'large', marginLeft: '9vh' }} /> Our leader
                        </div>
                        <div className='fifth-section-main-heading-right'>
                            Each product is crafted with passion and <br />
                            dedication.Meet our leader!
                        </div>
                    </div>
                </div>
                <div className='fifth-section-main-design'>
                    <div className='fifth-section-main-design-first-layer'>
                        <div className='fifth-section-main-design-fist-layer-one'>
                        </div>
                        <div className='fifth-section-main-design-fist-layer-two'>
                            <div className='first-layer-two-left'>
                            </div>
                            <div className='first-layer-two-right'>
                                <div className='two-right-inner-head'>
                                    Cody Fisher
                                </div>
                                <div className='two-right-inner-sub'>
                                    CEO Founder
                                </div>
                                <div >
                                    <FaXTwitter className='two-right-inner-logos' />
                                    <RxInstagramLogo className='two-right-inner-logos' />
                                    <RxLinkedinLogo className='two-right-inner-logos' />
                                </div>
                            </div>
                        </div>
                        <div className='fifth-section-main-design-fist-layer-three'>
                        </div>
                    </div>
                    <div className='fifth-section-main-design-second-layer'>
                        <div className='fifth-section-main-design-second-layer-one'>
                        </div>
                        <div className='fifth-section-main-design-second-layer-two'>
                            <div className='second-layer-two-left'>
                            </div>
                            <div className='second-layer-two-right'>
                                <div className='two-right-inner-head'>
                                    Kristin Watson
                                </div>
                                <div className='two-right-inner-sub'>
                                    Manger
                                </div>
                                <div >
                                    <FaXTwitter className='two-right-inner-logos' />
                                    <RxInstagramLogo className='two-right-inner-logos' />
                                    <RxLinkedinLogo className='two-right-inner-logos' />
                                </div>
                            </div>
                        </div>
                        <div className='fifth-section-main-design-second-layer-three'>
                        </div>
                    </div>
                    <div className='fifth-section-main-design-third-layer'>
                        <div className='fifth-section-main-design-third-layer-one'>
                        </div>
                        <div className='fifth-section-main-design-third-layer-two'>
                            <div className='third-layer-two-left'>
                            </div>
                            <div className='third-layer-two-right'>
                                <div className='two-right-inner-head'>
                                    Leslie Alexander
                                </div>
                                <div className='two-right-inner-sub'>
                                    Design Leader
                                </div>
                                <div >
                                    <FaXTwitter className='two-right-inner-logos' />
                                    <RxInstagramLogo className='two-right-inner-logos' />
                                    <RxLinkedinLogo className='two-right-inner-logos' />
                                </div>
                            </div>
                        </div>
                        <div className='fifth-section-main-design-third-layer-three'>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FifthSection