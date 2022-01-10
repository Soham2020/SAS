import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import './Cart.css';
import Total from "./Total";
import CartProduct from "./CartProduct";
import { useStateValue } from "../StateProvider";
import jwt_decode from 'jwt-decode';

export default function Cart(){
    var isAuth = false;
    var token = localStorage.getItem('tokenStore');
    if(token) {
        isAuth = true;
        var decoded = jwt_decode(token);
        var username = decoded.name;
        console.log(username)
    }
    const [ { cart }, dispatch ] = useStateValue();
    return(
        <>
            <Navbar />
            
            <div className="checkout">
                <div className="checkout__left">
                    {
                        cart.length !== 0 ?
                        <div>
                            <h2 className="checkout__title">Your Cart: {cart.length} </h2>    
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
                        </div> : <div>
                        <h2 className="checkout__title">Your Cart: 0</h2> 
                        <h3>Order will be placed soon!</h3>
                        </div>
                    }
                </div>
                {
                    cart.length !== 0 ? 
                    <div className="checkout__right">
                        <Total />
                    </div> : <div></div>
                }
            </div>
        </>
    )
}