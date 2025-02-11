import Words from '../assets/photos/words-circualar.png';
import Reviews from '../assets/photos/reviews.png';
import { MdArrowOutward } from "react-icons/md";
import AOS from 'aos';
import React, { useEffect } from 'react';

const Home=()=>{
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <>
        <div id="list-item1" className='home section'>
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
                <span>Hi, I’m Alex, UI/UX Designer</span>
            </p><br />
            <p className="design"  data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">Designing Intuitive</p>
            <p className="inspire" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">Experiences <span>Inspire</span></p>
            <p className="gateway" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            Your gateway to innovative design, seamless user experiences, and impactful solutions. Turning complex ideas into user-friendly designs.
            </p>
            <div className="circular">
                <div className="circle">
                    <img src={Words} alt="words" />
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6886 4.07866C24.9233 4.07046 25.1517 4.15585 25.3234 4.31603C25.4952 4.47621 25.5963 4.69807 25.6045 4.9328L25.9754 15.5533C25.9836 15.788 25.8982 16.0164 25.738 16.1882C25.5778 16.36 25.356 16.4611 25.1213 16.4693C24.8865 16.4775 24.6582 16.3921 24.4864 16.2319C24.3146 16.0717 24.2135 15.8499 24.2053 15.6151L23.909 7.1311L6.57695 25.7193C6.49754 25.8045 6.40213 25.8732 6.29617 25.9215C6.19021 25.9698 6.07578 25.9967 5.9594 26.0008C5.84303 26.0048 5.727 25.9859 5.61793 25.9451C5.50886 25.9044 5.40889 25.8425 5.32373 25.7631C5.23857 25.6837 5.16988 25.5883 5.12159 25.4823C5.07331 25.3764 5.04636 25.2619 5.0423 25.1455C5.03823 25.0292 5.05713 24.9131 5.09791 24.8041C5.13869 24.695 5.20055 24.595 5.27997 24.5099L22.6139 5.92335L14.1299 6.21962C13.8951 6.22782 13.6668 6.14244 13.495 5.98225C13.3232 5.82207 13.2221 5.60021 13.2139 5.36549C13.2057 5.13076 13.2911 4.90239 13.4513 4.73061C13.6115 4.55884 13.8333 4.45773 14.068 4.44954L24.6886 4.07866Z" fill="white"/>
                    </svg>
                </div>
                <div className="review">
                    <img src={Reviews} alt="reviews" />
                    <span><span>2k+ reviews</span><span>(4.90 of 5)</span></span>
                </div>
            </div><br /><br />
            <button type="button" className='work-together' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <span>Lets Work Together</span>
                <span><button type="button"><MdArrowOutward/></button></span>
            </button>
        </div>
        </>
    )
}

export default Home;