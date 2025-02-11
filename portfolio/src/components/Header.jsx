import BlackLogo from '../assets/photos/blacklogo.png';
import WhiteLogo from '../assets/photos/whitelogo.png';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Header=({pageTheme, setpageTheme, setIsVisibleHeader})=>{
    let changetheme=()=>{
        pageTheme==='dark'? setpageTheme('light')
        : setpageTheme('dark');
    }
    let showsidebar=()=>{
        setIsVisibleHeader(true);
    }
    return(
        <>
        <div className="nav-bar">
            <div className="nav-elements">
                <div className="logo">
                    <a href="../src/index.html">
                        <img className='dark-theme-logo' src={WhiteLogo} alt="ovrologo"/>
                        <img className='light-theme-logo' src={BlackLogo} alt="ovrologo"/>
                    </a>
                </div>
                <div className="btn-grp">
                    <div className="switch-container">
                        <div className="theme-toggle-switch" onClick={changetheme}>
                            <div className="toggle">
                                <FaMoon className='moon'/>
                                <FaSun className='sun'/>
                            </div>
                        </div>
                    </div>
                    <div className="contact-btn">
                        <button type="button">
                            <span>HIRE ME</span>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M2 9V16.0072C1.99998 16.5129 1.99997 16.9494 2.03057 17.3087C2.06287 17.6881 2.13419 18.0653 2.32698 18.4284C2.33578 18.4449 2.34474 18.4614 2.35385 18.4778L7.51937 12.5304L2 9ZM3.83366 19.7715C4.15115 19.8936 4.47733 19.9449 4.80498 19.9706C5.17952 20 5.63424 20 6.16134 20H17.8385C18.3656 20 18.8205 20 19.195 19.9706C19.5227 19.9449 19.8489 19.8936 20.1664 19.7715L14.8071 13.601L14.2182 13.9777C13.6891 14.3172 13.2243 14.6155 12.6991 14.7362C12.2396 14.8418 11.7605 14.8418 11.3009 14.7362C10.7758 14.6155 10.3109 14.3172 9.78185 13.9777L9.19299 13.601L3.83366 19.7715ZM21.6462 18.4777C21.6553 18.4614 21.6642 18.4449 21.673 18.4284C21.8658 18.0653 21.9371 17.6881 21.9694 17.3087C22 16.9493 22 16.513 22 16.0073V9.00003L16.4807 12.5304L21.6462 18.4777Z" fill="#0E161F"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.09084 4H17.9091C18.4426 3.99998 18.903 3.99997 19.282 4.03201C19.6822 4.06582 20.0802 4.14049 20.4631 4.34233C21.0344 4.64345 21.4989 5.12395 21.79 5.71493C21.8869 5.91169 21.9535 6.11229 22 6.31508L14.4868 11.4963C14.4795 11.5013 14.4722 11.5063 14.4651 11.5114L13.2352 12.3596C12.5197 12.8529 12.3691 12.9381 12.2359 12.9712C12.0809 13.0096 11.9192 13.0096 11.7642 12.9712C11.6309 12.9381 11.4803 12.8529 10.7649 12.3596L9.535 11.5114C9.52779 11.5063 9.52052 11.5013 9.51322 11.4963L2 6.31506C2.04649 6.11227 2.11306 5.91168 2.20998 5.71493C2.50108 5.12395 2.96557 4.64345 3.53689 4.34233C3.91984 4.14049 4.31782 4.06582 4.71794 4.03201C5.09703 3.99997 5.55734 3.99998 6.09084 4Z" fill="#0E161F"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="hamburger-menu" onClick={showsidebar}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66699 10H33.3337M6.66699 20H33.3337M6.66699 30H18.3337" stroke="white" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;