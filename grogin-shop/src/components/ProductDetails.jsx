import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import slugify from "slugify";
import Preloader from "./Preloader";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import React from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import { ThemeContext } from "../context/ThemeContext";
import { useCart } from "react-use-cart";
import Swal from "sweetalert2";

const ProductDetails=()=>{
    const {slug} = useParams();
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     axios.get("https://dummyjson.com/products")
    //     .then(res=>setData(res.data.products))
    // },[])
    const data = useContext(ProductContext)
    const findDataByTitle = data.find(p=> slugify(p.title, {lower:true})===slug)
    const [currency, setCurrency] = useContext(CurrencyContext);
    const [theme, setTheme] = useContext(ThemeContext)
    const { addItem } = useCart();

    const addTocart=(data)=>{
        Swal.fire({
            title: "Product added!",
            icon: "success",
            confirm:addItem(data)
          });
    }    
    return(
        <>
        {!findDataByTitle?<Preloader/>:
                        <div className="container col-xxl-8 px-4 py-2 my-5" style={{border: '2px solid black', borderRadius: '7px'}}>
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                          <div className="col-10 col-sm-8 col-lg-6">
                            <img src={findDataByTitle.images[0]} className="d-block mx-lg-auto img-fluid" alt={findDataByTitle.title} width={700} height={500} loading="lazy" />
                          </div>
                          <div className="col-lg-6">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{findDataByTitle.title}</h1>
                            <p className='h4 text-dark'>{currency==='USD'? `$${findDataByTitle.price}`:currency==='AZN'? `₼${Math.round(findDataByTitle.price*1.7)}`: `£${Math.round(findDataByTitle.price*1.22)}`}</p>
                            <p className="lead">{findDataByTitle.description}</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start align-items-center">
                              <Link className="btn btn-dark h-100" style={{color: theme === 'light' ? "#212529" : "#ffffff" , textDecoration:'none', backgroundColor: theme==='light'? '#fff': '#000'}} to={`/`}>Back</Link>
                              <button className="btn btn-warning my-2" type="button" onClick={()=>{addTocart(findDataByTitle)}}>Add to Cart</button>                            
                            </div>
                          </div>
                        </div>
                      </div>
        }
        </>
    )
}

export default ProductDetails;