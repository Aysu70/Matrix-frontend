import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../assets/css/foooter.css';
import Apple from '../assets/photo/apple.png'

const Footer=()=>{
    return(
        <div className='footer-wrapper'>
        <div className="footer">
            <div className="top">
                <div className="left">
                    <h1><b>Join our newsletter for £10 offs</b></h1>
                    <p>Register now to get latest updates on promotions & coupons.Don’t worry, we not spam!</p>
                </div>
                <div className="right">
                    <div className="sub">
                        <input type="email" name="email" id="email" />
                        <button type="button"><b>SEND</b></button>
                    </div>
                    <p>By subscribing you agree to our <span>Terms & Conditions and Privacy & Cookies Policy.</span></p>
                </div>
            </div>
            <hr />
            <div className="middle">
                <div className="help">
                    <p className='footer-title'><b>Do You Need Help ?</b></p>
                    <p>Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska.</p>
                    <div className="phone">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                        </div>
                        <div className="content">
                            <p>Monday-Friday: 08am-9pm</p>
                            <h2>0 800 300-353</h2>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                        </div>
                        <div className="content">
                            <p>Monday-Friday: 08am-9pm</p>
                            <h2>0 800 300-353</h2>
                        </div>
                    </div>
                </div>
                <div className="money">
                    <p className='footer-title'><b>Make Money with Us</b></p>
                    <ul>
                        <li>Sell on Grogin</li>
                        <li>Sell on Grogin</li>
                        <li>Sell on Grogin</li>
                        <li>Sell on Grogin</li>
                        <li>Sell on Grogin</li>
                        <li>Sell on Grogin</li>
                        <li>Sell on Grogin</li>
                        <li>Sell on Grogin</li>
                    </ul>
                </div>
                <div className="help-2">
                    <p className='footer-title'><b>Let Us Help You</b></p>
                    <ul>
                        <li>Accessibility Statement</li>
                        <li>Accessibility Statement</li>
                        <li>Accessibility Statement</li>
                        <li>Accessibility Statement</li>
                        <li>Accessibility Statement</li>
                        <li>Accessibility Statement</li>
                        <li>Accessibility Statement</li>
                        <li>Accessibility Statement</li>
                        <li>Accessibility Statement</li>
                    </ul>
                </div>
                <div className="know">
                    <p className='footer-title'><b>Get to Know Us</b></p>
                    <ul>
                        <li>Careers for Grogin</li>
                        <li>Careers for Grogin</li>
                        <li>Careers for Grogin</li>
                        <li>Careers for Grogin</li>
                        <li>Careers for Grogin</li>
                        <li>Careers for Grogin</li>
                        <li>Careers for Grogin</li>
                    </ul>
                </div>
                <div className="download">
                    <p className='footer-title'><b>Download our app</b></p>
                    <div className="store-wrapper">
                        <div className="store">
                            <img src={Apple} alt="apple" width="150px" height="auto"/>
                            <p>Download App Get -10% Discount</p>
                        </div>
                        <div className="store">
                            <img src={Apple} alt="apple"  width="150px" height="auto" />
                            <p>Download App Get -10% Discount</p>
                        </div>
                    </div>
                    <div className="follow">
                        <p>Follow us on social media</p>
                        <div className="media">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z"/></svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z"/></svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z"/></svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="bottom">
                <div className="left">
                    <p>Copyright 2024 © Grogin WooCommerce WordPress Theme. All right reserved. Powered by <span>KLBTheme.</span></p>
                </div>
                <div className="right">
                    <ul>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Order Tracking</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer;