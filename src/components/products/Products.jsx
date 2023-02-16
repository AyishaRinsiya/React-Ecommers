import React from 'react'
import css from './Products.module.css';
import Plane from '../../assets/plane.png';
import {ProductsData} from '../../data/products';
import { ShopContext } from '../../context/Context';
import { useState,useContext } from 'react';
import {autoAnimate, useAutoAnimate} from '@formkit/auto-animate/react'



const Products = () => {

const {addToCart} = useContext(ShopContext);
    const [parent]= useAutoAnimate()

    const[MenuProducts,SetMenuProducts]=useState(ProductsData);

    const filter =(type) => {
        SetMenuProducts(ProductsData.filter((product)=>product.type ===type))
    }
    return (
        <div className={css.container}>
            <img src={Plane} alt="" />
            <h1>Our Featured Products</h1>
            <div className={css.products}>
                <ul className={css.menu}>
                 <li onClick={()=>SetMenuProducts(ProductsData)}>All</li>
                 <li onClick={()=>filter("skin care")}>Skin Care</li>
                 <li onClick={()=>filter("conditioner")}>Conditioner</li>
                 <li onClick={()=>filter("foundation")}>Foundation</li>
                </ul>
                <div className={css.list} ref={parent}>
                   {
                    MenuProducts.map((product,i)=>(
                    <div className={css.product}>
                        <div className="left-s">
                         <div className="name">
                            <span>{product.name}</span>
                            <span>{product.detail}</span>
                            </div>
                            <span>{product.price}$</span>
                            <button className={css.addToCartBttn} onClick={()=>addToCart(product.id)}>ADD +
                           </button>
                        </div>
                        <img src={product.img} alt="" className="img-p"/>
                    </div>
                    ))
                   } 
                </div>
            </div>
        </div>
    )
}
export default Products