import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Logo from '../assests/photos/header/logo.png'

const Header=()=>{
    return(
        <div className='header'>
        <div className="top-nav">
            <div className="container">
                <p>Phone : (+88 - 123456789)</p>
                <p>Opening Hours : Monday To Saturday - 8AM TO 8PM</p>
                <p><span><FaLocationDot/></span><span>KA-62/1, Kuril, Progoti, Canada</span></p>
            </div>
        </div>
        <div className="bottom-nav">
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="fresh-valid logo"/>
                </div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
                <div className="right">
                    <button type="button" className='basket'><FaShoppingBasket/></button>
                    <button type="button" className='search'><FaSearch/></button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header;