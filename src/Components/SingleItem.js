import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import './SingleItem.css';

export default function SingleItem () {
    const location = useLocation();
    const id = location.pathname.split("/")[3];
    console.log(id);
    const [ item, setItem ] = useState({});
    const getItem = async() => {
        try{
            const res = await axios.get('https://sas-rest-api.herokuapp.com/api/products/find/' + id);
            setItem(res.data);
            console.log(res);
        }catch(err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getItem();
    }, [id])
    return(
        <>
        <Navbar />
        <div className="item">
            <h2 className="item__title">
                {item.title}
            </h2>            
        </div>
        <div className="item">
            <img 
                className="item__img"
                src={item.img}
                alt="item_img"
            />
            <div className="item__price">
                <h3>Description:</h3>
                <p>
                    {item.details}
                </p>
                <h3>Price: Rs. {item.price}</h3>
            </div>
        </div>
        </>
    )
}