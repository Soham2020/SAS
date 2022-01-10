import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import './Cart.css';
import Total from "./Total";
import CartProduct from "./CartProduct";
import { useStateValue } from "../StateProvider";

export default function Cart(){
    const [ { cart }, dispatch ] = useStateValue();
    return(
        <>
            <Navbar />
            
            <div className="checkout">
                <div className="checkout__left">
                    <div>
                        <h2 className="checkout__title">Your Cart</h2>                        
                        {/* Cart products using map */}
                        {
                            cart.map((item) => {
                                return(
                                    <CartProduct 
                                        title= { item.title }
                                        price={ item.price }
                                        image= { item.img }
                                    />
                                )
                            })
                        }
                    </div>
                </div>

            <div className="checkout__right">
                    <Total />
                </div>
            </div>
        </>
    )
}