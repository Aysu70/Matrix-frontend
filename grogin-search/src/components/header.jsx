import React, { useContext, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../assets/css/header.css';
import Grogin from '../assets/photo/logo.png'
import { CurrencyContext } from '../context/CurrencyContext';
import { ThemeContext } from '../context/ThemeContext';
import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import Cart from './Cart';
import { useCart } from 'react-use-cart';
const Header=()=>{

    const data = useContext(ProductContext);

    const [keyword, setKeyword] = useState("");
    let [currency, setCurrency] = useContext(CurrencyContext);
    
    const handleCurrencyChange=(e)=>{
        let current_currency = e.target.value.toUpperCase();
        setCurrency(current_currency);
        localStorage.setItem('currency', current_currency)
    }

    let [theme, setTheme] = useContext(ThemeContext);

    const changetheme=()=>{
        if(theme==='light'){
            localStorage.setItem('theme', 'dark')
            setTheme('dark')
            document.body.classList.add('dark')
            document.body.setAttribute('data-bs-theme', 'dark')
        }else{
            localStorage.setItem('theme', 'light')
            setTheme('light')
            document.body.classList.add('light')
            document.body.setAttribute('data-bs-theme', 'light')
        }
    }

    const {totalItems} = useCart()
    return(
        <div className="nav">
            <div className="top">
                <p className='free-delivery'><b>FREE delivery & 40% Discount for next 3 orders! Place your first order in.</b></p>
                <div className="timer">
                    <p>Until the end of the sale:</p>
                    <div className="clock">
                        <div className="number">50</div><span>days</span>
                        <div className="number">00</div><span>hours</span>
                        <div className="number">00</div><span>minutes</span>
                        <div className="number">00</div><span>seconds</span>
                    </div>
                </div>
            </div>
            <div className="middle-1">
                <div className="left">
                    <div className="about">
                        <p style={{ color: theme === 'light' ? "#212529" : "#f34f3f" }}>About Us</p>
                        <p style={{ color: theme === 'light' ? "#212529" : "#f34f3f" }}>My account</p>
                        <p style={{ color: theme === 'light' ? "#212529" : "#f34f3f" }}>Wishlist</p>
                    </div>
                    <div className="delivering">We deliver to you everyday from <span>7:00 to 23:00</span></div>
                </div>
                <div className="right">
                    <div className="lang">
                        <select style={{ color: theme === 'light' ? "#212529" : "#ffffff" }} name="lang" id="lang">
                            <option value="EN">ENGLISH</option>
                            <option value="AZ">AZ</option>
                            <option value="GR">GERMAN</option>
                        </select>
                    </div>
                    <div className="currency">
                        <select style={{ color: theme === 'light' ? "#212529" : "#ffffff" }} onChange={handleCurrencyChange} name="currency" id="currency" value={currency.toLowerCase()}>
                            <option value="usd">USD</option>
                            <option value="azn">AZN</option>
                            <option value="gbp">GBP</option>
                        </select>
                    </div>
                    <div className="theme">
                        <button className='btn btn-warning py-0' onClick={changetheme}>{theme==='dark'? <IoSunnySharp />: <FaMoon />}</button>
                    </div>
                </div>
            </div>
            <div className="middle-2">
                <div className="logo">
                    <img src={Grogin} alt="grogin logo" height="auto" width="180px"/>
                </div>
                <div className="search-bar">
                    <div className="delivery">
                        {/* <button className="loc">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                        </button> */}
                        {/* <p>Deliver to all</p> */}
                    </div>
                    <div className="search">
                        <input id='finding' type="text" placeholder='Search...' />
                        <button type="button" className='first-search' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                        </button>
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Search Bar</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        <div className="input-group mb-3">
                                            <input onChange={e=>setKeyword(e.target.value)} type="text" className="form-control" placeholder="Enter the product name" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                                        </div>
                                        <ul style={{overflowY: 'scroll', maxHeight: '300px'}}>
                                                {!keyword?"": data.filter(p=>p.title.toLowerCase().includes(keyword.toLowerCase())).map((item,index)=>(
                                                    <Link style={{ textDecoration:'none', color: theme === 'light' ? "#212529" : "#ffffff" }} key={index} to={`/${slugify(item.title, {lower:true})}`}>
                                                        <div data-bs-dismiss="modal">
                                                            <img src={item.images[0]} width={50} alt={item.title} />
                                                            {item.title}
                                                        </div>
                                                    </Link>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomnav">
                    <div className="account">
                        <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill={theme==='light'? "#000000":"#fff"}><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                        <p>Account</p>
                    </div>
                    <div className="wishlist">                   
                        <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill={theme==='light'? "#000000":"#fff"}><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                        <p>Wishlist</p>
                    </div>
                    <Link className="cart position-relative text-decoration-none" to={'/Cart'}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill={theme==='light'? "#000000":"#fff"}><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                        <p style={{ color: theme === 'light' ? "#212529" : "#ffffff" }}>Your Cart</p>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {totalItems}
                            <span class="visually-hidden">unread messages</span>
                        </span>

                    </Link>
                </div>
            </div>
            <div className="bottom">
                <div className="content">
                    <div className="left">
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Fruits & Vegetables</li>
                            <li>Beverages</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="right">
                        <p>Trending Products</p>
                        <p id='sale'>Almost Finished <span>SALE</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
