import React, { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import Navbar from "./Navbar";
import './Cart.css';
import Total from "./Total";
import axios from "axios";
import CartProduct from "./CartProduct";

export default function Cart(){
    return(
        <>
            <Navbar />
            
            <div className="checkout">
                <div className="checkout__left">
                    <div>
                        <h2 className="checkout__title">Your Cart</h2>                        
                        {/* Cart products using map */}
                        <CartProduct />
                    </div>
                </div>

            <div className="checkout__right">
                    <Total />
                </div>
            </div>
        </>
    )
}