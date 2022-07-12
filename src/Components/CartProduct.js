import React from 'react';
import { useStateValue } from '../StateProvider'
import DeleteIcon from '@material-ui/icons/Delete';
import './CartProduct.css';

function CartProduct ({ title, price, image }) {
    const [ { cart }, dispatch ] = useStateValue();
    const removeItem = () => {
        // reomve from the cart
        dispatch({
            type: "REMOVE_FROM_CART",
            title: title,
        })
    }
    return (
        <>
            <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src={image}
                          className="w-100"
                          alt="Item"
                        />
                        <a href="#">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p>
                        <strong>{ title }</strong>
                      </p>
                      <p className="text-start ">
                        <strong>Rs.{ price }</strong>
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm me-1 mb-2"
                        data-mdb-toggle="tooltip"
                        title="Remove item"
                        onClick={removeItem}
                      >
                      <DeleteIcon />
                      </button>
                    </div>
                  </div>
                  <hr className="my-4" />
        </>
    )
}

export default CartProduct;
