import React, { useEffect, useState } from "react";
import './Header.css';
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import Product from "./Product";
import axios from "axios";
import Navbar from "./Navbar";

export default function Header () {

    var token = localStorage.getItem('tokenStore');
    var isAuth = false;
    if(token)
        isAuth = true;

    const [ products, setProducts ] = useState([]);
    const getProducts = async() => {
        const res = await axios.get('https://sas-rest-api.herokuapp.com/api/products', { headers: { token: token } })
        setProducts(res.data)
    }
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <>
        {/* Navbar */}
        <Navbar />
        {/* Banner */}
        <div className='home'>
            <div className='home__container'>
                <ImageSlider slides={ SliderData }/>

                <div className='home__row'>
                    {
                        products.map((product) => {
                            return(
                                <Product 
                                    title={product.title}
                                    price={product.price}
                                    img={product.img}
                                    id={product._id}
                                />           
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}
