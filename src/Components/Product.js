import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import './Product.css';

function Product ({ title, price, img, id }) {
    const [ { cart }, dispatch ] = useStateValue();
    console.log("Cart -> ", cart);
    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                title: title,
                price: price,
                img: img,
                id: id
            },
        });
    }
    return(
        <div className="product">
            <div className="product__info">
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/user/cart/${id}` } ><p>{title}</p></Link>
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