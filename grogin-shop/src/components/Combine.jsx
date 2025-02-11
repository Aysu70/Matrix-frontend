import React, { useEffect, useState } from 'react'
import {loadProducts, Cards} from './Products.jsx'
import Header from './header.jsx'
import Footer from './Footer.jsx'
import ProductDetails from './ProductDetails.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Cart from './Cart.jsx'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

const Combine = ()=>{
    const products = loadProducts();
    return(
        <div>
        {products.length === 0? <p>Loading...</p>:
            // <>
            // <BrowserRouter>
            // <Header/>
            // <Routes>
            //     <Route path='/' element={<Cards/>}></Route>   
            //     <Route path='/:slug' element={<ProductDetails/>}></Route>   
            // </Routes>
            // <Footer/>
            // </BrowserRouter>
            // </>
            <>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={  
                    <>
                    <Header/>
                    <Cards/>
                    <Footer/>
                    </>                 
                    }></Route>   
                <Route path='/:slug' element={<ProductDetails/>}></Route>   
                <Route path='/Cart' element={<Cart/>}></Route>   
            </Routes>
            </BrowserRouter>
            </>
        }
        </div>
    )
}

export default Combine;