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
    console.log(stripeToken);
    return(
        <div className='total'>
            <CurrencyFormat 
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
            />
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
                <button className='totalbtn'>Proceed to Checkout</button>
            </StripeCheckout>
        </div>
    )
}

export default Total;