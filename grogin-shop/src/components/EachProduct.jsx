import React, { Children, useContext } from "react";
import '../assets/css/eachproduct.css';
import { useState } from "react";
import slugify from "slugify";
import { Link } from "react-router-dom";
import { CurrencyContext } from "../context/CurrencyContext";
import { useCart } from "react-use-cart";
import Swal from "sweetalert2";
import { ThemeContext } from "../context/ThemeContext";

const EachProduct = ({id, product ,title, picture, rating, price, discount, stock, alldata})=>{
    const { addItem } = useCart();
    const [activeImage, setActiveimage] = useState(0);
    let handlechange=(index)=>{
        setActiveimage(index);
    }
    const [currency, setCurrency] = useContext(CurrencyContext);
    const addTocart=(data)=>{
        Swal.fire({
            title: "Product added!",
            icon: "success",
            confirm:addItem(data)
          });
    }
    const [theme, setTheme] = useContext(ThemeContext)
    return(
        <div className="onecard">
        <div className="image-wrapper">
            {product.images.length===1? <img src={picture} alt={title} width='120px' height='auto' className="image"/>
            :product.images.map((img, count)=>(
                <>
                <img src={img} alt={title} width='120px' height='auto' className="images" style={{display: count===activeImage?"block": "none"}}/>
                </>
            ))}
            {/* <img src={picture[0]} alt={title} width='120px' height='auto' className="image"/> */}
            <div className="div-slider-wrapper" onMouseLeave={()=>handlechange(0)}>
                {product.images.length===1? <span></span>
                :product.images.map((_,c)=>(
                    <>
                    <div onMouseOver={() => handlechange(c)} className={`wrapper-child ${c}`} style={{width: "100%", height: '100%'}}></div>
                    </>
                ))}
            </div>
            <div className="btn-grp">
                <button type="button" className="heart">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                </button>
                <button type="button" className="eye">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
                </button>
                <button type="button" className="compare">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m320-160-56-57 103-103H80v-80h287L264-503l56-57 200 200-200 200Zm320-240L440-600l200-200 56 57-103 103h287v80H593l103 103-56 57Z"/></svg>
                </button>
            </div>
        </div>
        <div className="word-wrapper">
            <div className="title">
                {title.length>20?<p><b>{title.substring(0,46)}<span>...</span></b></p>:
                <p><b>{title}</b></p>}
            </div>
            <div className="rating">
                <div className="rate-star">
                    {[...Array(5)].map((_,count)=>(
                        <span key={count} className={Math.round(rating)>count? 'filled-star':'empty-star'}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffd83c"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>
                        </span>                    
                    ))}
                </div>
                <span>({rating})</span>
            </div>
            <div className="price">
                <span className="cost">{currency==='USD'? `$${price}`:currency==='AZN'? `₼${Math.round(price*1.7)}`: `£${Math.round(price*1.22)}`}</span>
                {discount>7?
                <>
                <span className="line">
                    <span style={{ color: theme === 'light' ? "#212529" : "#ffffff" }} className="disc">{currency==='USD'? `$${Math.round((100*price)/(100-discount))}`:currency==='AZN'? `₼${Math.round(Math.round((100*price)/(100-discount)*1.7))}`: `£${Math.round(Math.round((100*price)/(100-discount)*1.22))}` }</span>
                </span>
                <div className="discount-lent">
                    {discount}%
                </div>
                </>
                : <span></span>}
            </div>
            <div className={stock==='Low Stock'? 'low-stock': 'in-stock'}>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                </button>
                <span className="word-stock">
                    {stock}
                </span>
            </div>
            <div className="detailed">
                <Link className="btn btn-dark" style={{color: theme === 'light' ? "#212529" : "#ffffff" , textDecoration:'none', backgroundColor: theme==='light'? '#fff': '#000'}} to={`/${slugify(title,{lower:true})}`}>More details</Link>
                <button className="btn btn-warning my-2" type="button"  onClick={()=>{addTocart(alldata)}}>Add to Cart</button>
            </div>
        </div>
        </div>
    )
}

export default EachProduct;