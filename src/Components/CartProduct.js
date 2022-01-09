import React from 'react';
import './CartProduct.css';

function CartProduct () {
    return (
        <div className="cartProduct">
            <img
                className="cartProduct__image"
                src="https://m.media-amazon.com/images/I/61F7Xcyux0L._AC_SY200_.jpg"
            />
            <div className="cartProduct__info">
                <p className="checkProduct__name">LG</p>
                <p className="checkProduct__price"><small>Rs. </small><strong>100</strong></p>
                <button>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CartProduct;