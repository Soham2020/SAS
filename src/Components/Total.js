import React, { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import StripeCheckout from 'react-stripe-checkout';
import { getTotal } from '../reducer';
import { useStateValue } from '../StateProvider';
import './Total.css';


function Total () {
    const [ { cart }, dispatch ] = useStateValue();
    const [ stripeToken, setstripeToken ] = useState(null);

    const onToken = (token) => {
        setstripeToken(token);
    };
    const handleClick = () => {
        dispatch({
            type: "EMPTY_CART"
        })
    }
    return(
    <>
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Check Out</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      No of Products
                      <span>{cart.length}</span>
                    </li>
                    <hr className="my-4" />
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>Rs. {getTotal(cart)}</strong>
                      </span>
                    </li>
                  </ul>
                  <StripeCheckout
                name="Supermarket"
                image="https://avatars.githubusercontent.com/u/66131928?v=4"
                billingAddress
                shippingAddress
                description={`Your amount is Rs. ${getTotal(cart)}`}
                amount={getTotal(cart)*100}
                token={onToken}
                stripeKey={process.env.REACT_APP_STRIPE}
            >
                <button className='totalbtn' onClick={handleClick}>Proceed to Checkout</button>
            </StripeCheckout>
                </div>
              </div>
    </>
        )
    }
    // <div className='total'>
    // </div>
{/* <CurrencyFormat 
    renderText={(value) => (
    <>
        <p>
        Subtotal ({cart.length} items): <strong>{value}</strong>
        </p>
    </>
    )}
    decimalScale = {2}
    value={getTotal(cart)}
    displayType={"text"}
    thousandSeparator={true}
    prefix={'Rs '}
/> */}

export default Total;
            
