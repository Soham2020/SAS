import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import './Product.css';

function Product ({ title, price, img, id }) {
    const [ { cart }, dispatch ] = useStateValue();
    console.log("Cart -> ", cart);
    const addToCart = (e) => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                title: title,
                price: price,
                img: img,
                // count:e.target.
                id: id
            },
        });
    }
    return(
        <>
      <div className="col-lg-4 col-md-12 mb-4" >
        <div className="card zoomEffect" style={{ backgroundColor: "#eee",width: "20em",boxShadow:"2px 5px 5px #000"}}>
          <div
            className="img-fluid bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light"
          >
            <img
              src={img}
              className="rounded w-100"
              style={{height:"18em",padding:"1em"}}
            />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span className="badge bg-primary ms-2">New</span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                />
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3"><Link style={{ textDecoration: 'none', color: 'black' }} to={`/user/cart/${id}` } ><p>{title}</p></Link></h5>
            </a>
            <h6 className="mb-3">Rs.{price}</h6>
            <button type="button" class="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>

        </>
        )
    }
    
export default Product;
