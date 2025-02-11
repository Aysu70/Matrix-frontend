import React, { useContext, useEffect, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import EachProduct from './EachProduct';
import axios from 'axios';
import '../assets/css/left-right.css';
import Banner from '../assets/photo/banner.webp';
import { ProductContext } from '../context/ProductContext';
import { ThemeContext } from '../context/ThemeContext';


export const loadProducts=()=>{
  // const [products, setProduct] = useState([])
  // useEffect(()=>{
    //   axios
    //   .get("https://dummyjson.com/products")
    //   .then(res=>setProduct(res.data.products))
    //   .catch(err=>console.log(err))
    // },[])
    const [loading, setLoading] = useState(true);
  return useContext(ProductContext);
}


export const Cards=()=>{
  let menu = loadProducts();
  let categories = [];
  let brands = [];
  const [theme, setTheme] = useContext(ThemeContext);
  // let prices = menu.map((item)=>item.price);//1900
  menu.forEach((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category); 
    }
  });  
  menu.forEach((item) =>{
    if (item.brand && !brands.includes(item.brand)){
      brands.push(item.brand); 
    }
  });  
  const [loading, setLoading] = useState(true)
  const [filter_menu, setMenu] = useState(useContext(ProductContext));
  const [property, setProperty] = useState({
    "price": [0, 1900],
    "category": [],
    "rating": [],
    "brand": [],
    "availabilityStatus": []
  });
  useEffect(()=>{
    axios
    .get("https://dummyjson.com/products")
    .then(res=>{setLoading(false)})
    .catch(err=>console.log(err))
  },[])
  // const handleInputs = (item_property, property_name) => {
  //   setProperty((prevProperty) => ({
  //     ...prevProperty,
  //     [item_property]: prevProperty[item_property].includes(property_name)
  //       ? prevProperty[item_property].filter((item) => item !== property_name)
  //       : [...prevProperty[item_property], property_name] 
  //   }));     
  //   filtering(item_property, property_name)   
  // };
  const handleInputs = (item_property, property_name) => {
    setProperty((prevProperty) => {
      const updatedProperty = prevProperty[item_property].includes(property_name)
        ? prevProperty[item_property].filter((item) => item !== property_name)
        : [...prevProperty[item_property], property_name];
  
      filtering({ ...prevProperty, [item_property]: updatedProperty });
  
      return {
        ...prevProperty,
        [item_property]: updatedProperty
      };
    });
  };
  const handlerating = (item_property, property_name) => {
    setProperty((prevProperty) => ({
      ...prevProperty,
      [item_property]: [property_name],
    }));
    filtering({ ...property, [item_property]: [property_name] });
  };
  const filtering = (updatedProperty) => {
    const filteredMenu = menu.filter((item) => {
      const matchesCategory =
        updatedProperty.category.length === 0 || updatedProperty.category.includes(item.category);
      const matchesRating =
        updatedProperty.rating.length === 0 || Math.max(updatedProperty.rating)<=item.rating;
      const matchesBrand =
        updatedProperty.brand.length === 0 || updatedProperty.brand.includes(item.brand);
      const matchesStock =
        updatedProperty.availabilityStatus.length === 0 || updatedProperty.availabilityStatus.includes(item.availabilityStatus);
      const matchesPrice =
        item.price >= updatedProperty.price[0] && item.price <= updatedProperty.price[1];
      return matchesCategory && matchesBrand && matchesStock && matchesPrice && matchesRating ;
    });
    setMenu(filteredMenu);
  };
  return(
    <>
    <div className="middle-wrapper">
      <div className='middle'>
      <div className="left">
        <div className="filter-price">
          <p style={{ color: theme === 'light' ? "#212529" : "#ffffff" }} className='filter-title'>Widget price filter</p>
          <div className="range">
            <div className="inputs">
              <input type="text" name="min-input" id="min-input" placeholder='Min price' onChange={(e) => setProperty((prev) => ({
                    ...prev,
                    price: [Number(e.target.value) || 0, prev.price[1]]
                  }))}/>
              <span>-</span>
              <input type="text" name="max-input" id="max-input" placeholder= 'Max price' onChange={(e) => setProperty((prev) => ({
                    ...prev,
                    price: [prev.price[0], Number(e.target.value) || 1900]
                  }))}/>
            </div>
            {/* <div className="line"></div> */}
            <div className="bottom">
              {/* <p>Price</p> */}
              <button style={{color: '#000'}} type="button" onClick={() => filtering(property)}>Filter</button>
            </div>
          </div>
        </div>
        <div className="filter-category">
          <p style={{ color: theme === 'light' ? "#212529" : "#ffffff" }} className='filter-title'>Product Categories</p>
          <ul>
            {categories.map((item)=>(
              <li className={`label-${item}`} onClick={()=>handleInputs('category', item)}>
                <input type="checkbox" name={item} id={item} />
                <label htmlFor={item}>{item}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className="filter-rating">
          <p className='filter-title' style={{ color: theme === 'light' ? "#212529" : "#ffffff" }}>Filter by Rating</p>
          <div class="star-rating">
            <input type="radio" id="5-stars" name="rating" value="5" onClick={(e) => handlerating("rating", e.target.value)}/>
            <label for="5-stars" class="star">&#9733;</label>
            <input type="radio" id="4-stars" name="rating" value="4" onClick={(e) => handlerating("rating", e.target.value)}/>
            <label for="4-stars" class="star">&#9733;</label>
            <input type="radio" id="3-stars" name="rating" value="3" onClick={(e) => handlerating("rating", e.target.value)}/>
            <label for="3-stars" class="star">&#9733;</label>
            <input type="radio" id="2-stars" name="rating" value="2" onClick={(e) => handlerating("rating", e.target.value)}/>
            <label for="2-stars" class="star">&#9733;</label>
            <input type="radio" id="1-star" name="rating" value="1" onClick={(e) => handlerating("rating", e.target.value)}/>
            <label for="1-star" class="star">&#9733;</label>
          </div>
        </div>
        <div className="filter-brands">
          <p style={{ color: theme === 'light' ? "#212529" : "#ffffff" }} className='filter-title'>Filter by Brands</p>
          <ul>
            {brands.map(item=>(
              <li onClick={()=>handleInputs('brand', item)}>
                <input type="checkbox" name={item} id={item} />
                <label htmlFor={item}>{item}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className="filter-stock">
          <p style={{ color: theme === 'light' ? "#212529" : "#ffffff" }} className='filter-title'>Product Status</p>
          <ul>
            <li onClick={()=>handleInputs('availabilityStatus', 'In Stock')}>
              <input type="checkbox" name="in-stock" id="in-stock"/>
              <label htmlFor="in-stock">In Stock</label>
            </li>
            <li onClick={()=>handleInputs('availabilityStatus', "Low Stock")}>
              <input type="checkbox" name="out-stock" id="out-stock"/>
              <label htmlFor="out-stock">Low Stock</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="banner" style={{backgroundImage: `url(${Banner})`}}>
          <div className="thisweek">Only This Week</div>
          <h1 style={{color: '#000'}}><b>Grocery store with different treasures</b></h1>
          <p>We have prepared special discounts for you on grocery products...</p>
          <button style={{color: '#000'}}>Shop Now →</button>
        </div>
        <div className="search-result">
          <div style={{color: '#000'}} className="start">Showing {filter_menu.length} result</div>
          <div className="end">
            <div className="sorting">
              <p style={{color: '#000'}}>Sort:</p>
              <select style={{color: '#000'}} name="sort" id="sort">
                <option value="bylatest">Sort by ID</option>
                <option value="byrating">Sort by avarage rating</option>
                <option value="byprice">Sort by price: low to high</option>
                <option value="byprice">Sort by price: high to low</option>
              </select>
            </div>
            <div className="showgrid">
              <p style={{color: '#000'}}>Show</p>
              <div className="display">
                <button type="button" className='grid'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"/></svg>
                </button>
                <button type="button" className='list'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-grid">
          {loading? <div>loading...</div> :filter_menu.length>0? filter_menu.map(item=>(
            <div className="card-wrapper">
              <EachProduct className='card' alldata={item} key={item.id} id={item.id} product={item} title={item.title} picture={item.images} rating={item.rating} price={item.price} discount={item.discountPercentage} stock={item.availabilityStatus}/>
            </div>
          )): <div>finding none</div>}
        </div>
      </div>
      </div>
    </div>
  </>
  )
}
