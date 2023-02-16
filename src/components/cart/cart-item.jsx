import React from 'react'
import { ShopContext } from "../../context/Context";
import { useContext } from 'react';

const CartItem = (props) => {
    const{id,name,price,img} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

return <div className="cartItem">
    <img src={img} />
    <div classname="description">
        <p>
            <b>{name}</b>
        </p>
        <p>
            ${price}
        </p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
    </div>
</div>
}
export default CartItem