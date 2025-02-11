import BlackLogo from '../assets/photos/blacklogo.png';
import WhiteLogo from '../assets/photos/whitelogo.png';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

const offcanvas=({isVisibleMenu, setIsVisibleMenu})=>{
    const hideSidebar = () => {
        setIsVisibleMenu(false);
    };
    return(
        <>
        {isVisibleMenu&&(
        <div className="offcanvas-container animate__animated animate__slideInRight">
            <div className="offcanvas-elements">
                <div className="cancel">
                    <MdOutlineClose onClick={hideSidebar}/>
                </div>
                <div className="logo">
                    <a href="../src/index.html">
                        <img className='dark-theme-logo' src={WhiteLogo} alt="ovrologo"/>
                        <img className='light-theme-logo' src={BlackLogo} alt="ovrologo"/>
                    </a>
                </div>
                <ul>
                    <li><a href="#list-item1">HOME</a></li>
                    <li><a href="#list-item2">ABOUT US</a></li>
                    <li><a href="#list-item3">SERVICE</a></li>
                    <li><a href="#list-item4">SKILL</a></li>
                    <li><a href="#list-item5">PORTFOLIO</a></li>
                    <li><a href="#list-item6">TESTIMONIAL</a></li>
                    <li><a href="#list-item7">BLOGS</a></li>
                    <li><a href="#list-item8">CONTACT</a></li>
                </ul><br /><br />
                <div className="contact-btn">
                    <button type="button">
                        <span>GET IN TOUCH NOW</span>
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M2 9V16.0072C1.99998 16.5129 1.99997 16.9494 2.03057 17.3087C2.06287 17.6881 2.13419 18.0653 2.32698 18.4284C2.33578 18.4449 2.34474 18.4614 2.35385 18.4778L7.51937 12.5304L2 9ZM3.83366 19.7715C4.15115 19.8936 4.47733 19.9449 4.80498 19.9706C5.17952 20 5.63424 20 6.16134 20H17.8385C18.3656 20 18.8205 20 19.195 19.9706C19.5227 19.9449 19.8489 19.8936 20.1664 19.7715L14.8071 13.601L14.2182 13.9777C13.6891 14.3172 13.2243 14.6155 12.6991 14.7362C12.2396 14.8418 11.7605 14.8418 11.3009 14.7362C10.7758 14.6155 10.3109 14.3172 9.78185 13.9777L9.19299 13.601L3.83366 19.7715ZM21.6462 18.4777C21.6553 18.4614 21.6642 18.4449 21.673 18.4284C21.8658 18.0653 21.9371 17.6881 21.9694 17.3087C22 16.9493 22 16.513 22 16.0073V9.00003L16.4807 12.5304L21.6462 18.4777Z" fill="#0E161F"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.09084 4H17.9091C18.4426 3.99998 18.903 3.99997 19.282 4.03201C19.6822 4.06582 20.0802 4.14049 20.4631 4.34233C21.0344 4.64345 21.4989 5.12395 21.79 5.71493C21.8869 5.91169 21.9535 6.11229 22 6.31508L14.4868 11.4963C14.4795 11.5013 14.4722 11.5063 14.4651 11.5114L13.2352 12.3596C12.5197 12.8529 12.3691 12.9381 12.2359 12.9712C12.0809 13.0096 11.9192 13.0096 11.7642 12.9712C11.6309 12.9381 11.4803 12.8529 10.7649 12.3596L9.535 11.5114C9.52779 11.5063 9.52052 11.5013 9.51322 11.4963L2 6.31506C2.04649 6.11227 2.11306 5.91168 2.20998 5.71493C2.50108 5.12395 2.96557 4.64345 3.53689 4.34233C3.91984 4.14049 4.31782 4.06582 4.71794 4.03201C5.09703 3.99997 5.55734 3.99998 6.09084 4Z" fill="#0E161F"/>
                            </svg>
                        </span>
                    </button>
                </div><br /><br />
                <div className="social-links">
                    <p><b>SOCIAL LINKS</b></p>
                    <ul>
                        <li>
                            <button>
                                <FaFacebookF />
                            </button>
                        </li>
                        <li>
                            <button>
                                <FaInstagram />
                            </button>
                        </li>
                        <li>
                            <button>
                                <FaLinkedinIn />
                            </button>
                        </li>
                        <li>
                            <button>
                                <FaPinterestP />
                            </button>
                        </li>
                        <li>
                            <button>
                                <FaYoutube />
                            </button>
                        </li>
                    </ul>
                </div><br /><br />
                <div className="subscribe">
                    <p><b>SUBSCRIBE TO NEWSLETTER</b></p><br />
                    <form action="">
                        <input type="email" name="mail" id="mail" placeholder='Email Address*'/>
                        <button type="button">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
        </div>)}
        </>
    )
}

export default offcanvas;