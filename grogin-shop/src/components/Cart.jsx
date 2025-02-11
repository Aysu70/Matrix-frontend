import { Col } from "react-bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import React from "react";
import { useCart } from "react-use-cart";
import { CurrencyContext } from "../context/CurrencyContext";
import { useContext } from "react";
const Cart=()=>{
    const [currency, setCurrency] = useContext(CurrencyContext);
    const {
        isEmpty,
        totalUniqueItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
      } = useCart();
      if (isEmpty) return <div className="d-flex justify-content-center align-items-center flex-column my-3"><img src="https://cdn.dribbble.com/users/887568/screenshots/3172047/ufo.gif"/></div>;

    return(
        <div className="d-flex justify-content-center align-items-center flex-column" style={{height: '70vh'}}>
            <p className="h1 my-5">Your Basket</p>
            <Col sm={12} md={9}>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item,index)=>(
                        <tr>
                        <th scope="row">{index+1}</th>
                        <td><img src={item.images[0]} alt={item.title} width={50} /></td>
                        <td>{item.title}</td>
                        <td>{currency==='USD'? `$${item.quantity*item.price}`:currency==='AZN'? `₼${Math.round(item.quantity*item.price*1.7)}`: `£${Math.round(item.quantity*item.price*1.22)}`}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}>-</button>
                            <span className="mx-3">{item.quantity}</span>
                            <button className="btn btn-success"onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}>+</button>
                        </td>
                        <td><button className="btn btn-danger" onClick={() => removeItem(item.id)}>X</button></td>
                        </tr>
                    ))}
                </tbody>
                </table>
                <button className="btn btn-danger my-3" onClick={()=>{emptyCart()}}>Empty cart</button>
                <p className="h1">Total Price: {currency==='USD'? `$${cartTotal.toFixed()}`:currency==='AZN'? `₼${Math.round(cartTotal.toFixed()*1.7)}`: `£${Math.round(cartTotal.toFixed()*1.22)}`}</p>
            </Col>
        </div>
    )
}

export default Cart;