import React from 'react'
import { ProductsData } from '../../data/products'
import { ShopContext } from '../../context/Context';
import {useContext } from 'react';
import CartItem from './cart-item';
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const {cartItems, getTotalCartAmount, checkout} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate()

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
       {ProductsData.map((product) => {
            if (cartItems[product.id] !==0) {
              return <CartItem data={product} />
            }
            
       }
       )}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <div className="toshop">
        <center><h1> Your Shopping Cart is Empty</h1></center>
        <button onClick={() => navigate("/")}> Continue Shopping </button>
                </div>
      )}
    </div>
  )
}

export default Cart