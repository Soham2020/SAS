import React from "react";
import { useStateValue } from "../StateProvider";
import './Product.css';

function Product ({ title, price, img }) {
    const [ { cart }, dispatch ] = useStateValue();
    console.log("Cart -> ", cart);
    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                title: title,
                price: price,
                img: img,
            },
        });
    }
    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
            </div>

            <img 
                src={img}
                alt="p-img"
            />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product;