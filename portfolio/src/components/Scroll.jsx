import AOS from 'aos';
import React, { useEffect } from 'react';

const Scroll = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    let scrolltop=()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        // const scrollDuration = 500;
        // const scrollStep = -window.scrollY/(scrollDuration/15)
        // const scrollInterval = setInterval(function () {
        //     if (window.scrollY !== 0){
        //         window.scrollBy(0, scrollStep);
        //     } else {
        //         clearInterval(scrollInterval);
        //     }
        // }, 0);
    }
    return (
        <>
        <div onClick={()=>scrolltop()} className="scroll" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine"> 
            <div className="progress">
                <svg className="progress-circle svg-content" width="56px" height="56px" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
                </svg>
            </div>           
            <div className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#ffae00" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </div>
        </div>
        </>
    );
};

export default Scroll;
