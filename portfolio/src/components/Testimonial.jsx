import AOS from "aos";
import React, { useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa6";

const Testimonail=()=>{
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <>
        <div id="list-item6" className="testimonail section">
            <p className="name-surname" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_8679_11899)">
                    <path d="M7.8 0.359999C7.8 0.161177 7.63873 -0.000867624 7.44012 0.00830546C6.53872 0.0499378 5.65042 0.247723 4.81507 0.593738C3.86873 0.985725 3.00886 1.56027 2.28457 2.28456C1.56027 3.00886 0.985726 3.86873 0.59374 4.81507C0.201753 5.7614 9.25978e-08 6.77569 0 7.8C-9.25977e-08 8.82431 0.201753 9.83858 0.593739 10.7849C0.985726 11.7313 1.56027 12.5911 2.28457 13.3154C3.00886 14.0397 3.86873 14.6143 4.81507 15.0063C5.65042 15.3523 6.53872 15.5501 7.44012 15.5917C7.63873 15.6009 7.8 15.4388 7.8 15.24L7.8 0.359999Z" fill="#FFAE00"/>
                    <path d="M23.64 7.8C23.8388 7.8 24.0009 7.63873 23.9917 7.44012C23.95 6.53872 23.7523 5.65042 23.4062 4.81507C23.0143 3.86873 22.4397 3.00886 21.7154 2.28457C20.9911 1.56027 20.1313 0.985727 19.1849 0.59374C18.2386 0.201753 17.2243 1.66431e-07 16.2 0C15.1757 -1.66431e-07 14.1614 0.201753 13.2151 0.593739C12.2687 0.985725 11.4089 1.56027 10.6846 2.28457C9.96026 3.00886 9.38572 3.86873 8.99373 4.81507C8.64772 5.65042 8.44993 6.53872 8.4083 7.44012C8.39913 7.63873 8.56117 7.8 8.75999 7.8L23.64 7.8Z" fill="#FFAE00"/>
                    <path d="M16.2 23.64C16.2 23.8388 16.3613 24.0009 16.5599 23.9917C17.4613 23.95 18.3496 23.7523 19.1849 23.4062C20.1313 23.0143 20.9911 22.4397 21.7154 21.7154C22.4397 20.9911 23.0143 20.1313 23.4062 19.1849C23.7982 18.2386 24 17.2243 24 16.2C24 15.1757 23.7982 14.1614 23.4062 13.2151C23.0143 12.2687 22.4397 11.4089 21.7154 10.6846C20.9911 9.96026 20.1313 9.38572 19.1849 8.99373C18.3496 8.64772 17.4613 8.44993 16.5599 8.4083C16.3613 8.39913 16.2 8.56117 16.2 8.75999L16.2 23.64Z" fill="#FFAE00"/>
                    <path d="M0.360001 16.2C0.161179 16.2 -0.000865658 16.3613 0.00830739 16.5599C0.0499396 17.4613 0.247725 18.3496 0.59374 19.1849C0.985726 20.1313 1.56027 20.9911 2.28457 21.7154C3.00886 22.4397 3.86873 23.0143 4.81507 23.4062C5.76141 23.7982 6.77569 24 7.8 24C8.82431 24 9.83859 23.7982 10.7849 23.4062C11.7313 23.0143 12.5911 22.4397 13.3154 21.7154C14.0397 20.9911 14.6143 20.1313 15.0063 19.1849C15.3523 18.3496 15.5501 17.4613 15.5917 16.5599C15.6009 16.3613 15.4388 16.2 15.24 16.2L0.360001 16.2Z" fill="#FFAE00"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_8679_11899">
                    <rect width="24" height="24" fill="#FFAE00"/>
                    </clipPath>
                    </defs>
                    </svg>
                </span>
                <span>Testimonial</span>
            </p><br />
            <p className="design" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">What Client Says</p>
            <p className="inspire" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">About <span>My Work</span></p><br /><br />
            <div className="row">
                <div className="review review-big" data-aos="zoom-out-up">
                    <div className="top">
                        <div className="left">⭐⭐⭐⭐⭐</div>
                        <div className="right"><FaQuoteRight/></div>
                    </div><br />
                    <div className="middle">
                        <p>"Working with Alex was a game-changer for our brand. Their attention to detail and focus on creating a seamless user experience truly transformed our website. We’ve seen an incredible boost in user engagement and satisfaction."</p>
                    </div><br />
                    <div className="bottom">
                        <div className="left">
                            <img src="https://html.vikinglab.agency/ovro/assets/img/all-images/testimonials/tesi-img1.png" alt="" />
                        </div>
                        <div className="right">
                            <p>David Elson</p>
                            <p>Ezhe Source</p>
                        </div>
                    </div>
                </div>
                <div className="review review-small" data-aos="zoom-out-up">
                    <div className="top">
                        <div className="left">⭐⭐⭐⭐⭐</div>
                        <div className="right"><FaQuoteRight/></div>
                    </div><br />
                    <div className="middle">
                        <p>"Alex exceeded all expectations with their innovative designs and collaborative approach. Reality that perfectly resonates with our audience."</p>
                    </div><br />
                    <div className="bottom">
                        <div className="left">
                            <img src="https://html.vikinglab.agency/ovro/assets/img/all-images/testimonials/tesi-img1.png" alt="" />
                        </div>
                        <div className="right">
                            <p>David Elson</p>
                            <p>Ezhe Source</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="review review-small" data-aos="zoom-out-up">
                    <div className="top">
                        <div className="left">⭐⭐⭐⭐⭐</div>
                        <div className="right"><FaQuoteRight/></div>
                    </div><br />
                    <div className="middle">
                        <p>"Alex exceeded all expectations with their innovative designs and collaborative approach. Reality that perfectly resonates with our audience."</p>
                    </div><br />
                    <div className="bottom">
                        <div className="left">
                            <img src="https://html.vikinglab.agency/ovro/assets/img/all-images/testimonials/tesi-img1.png" alt="" />
                        </div>
                        <div className="right">
                            <p>David Elson</p>
                            <p>Ezhe Source</p>
                        </div>
                    </div>
                </div>
                <div className="review review-big" data-aos="zoom-out-up">
                    <div className="top">
                        <div className="left">⭐⭐⭐⭐⭐</div>
                        <div className="right"><FaQuoteRight/></div>
                    </div><br />
                    <div className="middle">
                        <p>"Working with Alex was a game-changer for our brand. Their attention to detail and focus on creating a seamless user experience truly transformed our website. We’ve seen an incredible boost in user engagement and satisfaction."</p>
                    </div><br /><br />
                    <div className="bottom">
                        <div className="left">
                            <img src="https://html.vikinglab.agency/ovro/assets/img/all-images/testimonials/tesi-img1.png" alt="" />
                        </div>
                        <div className="right">
                            <p>David Elson</p>
                            <p>Ezhe Source</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Testimonail;