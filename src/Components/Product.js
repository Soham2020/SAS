import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        toast("Added")
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default Product;