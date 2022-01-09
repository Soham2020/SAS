import React from "react";
import './Product.css';

function Product ({ title, price, img }) {
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
            <button>Add to Cart</button>
        </div>
    )
}

export default Product;