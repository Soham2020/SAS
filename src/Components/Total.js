import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getTotal } from '../reducer';
import { useStateValue } from '../StateProvider';
import './Total.css';

function Total () {
    const [ { cart }, dispatch ] = useStateValue();
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
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Total;