import './Payment.css'
import React, { useState } from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { getBasketTotal } from './reducer';
import { Link } from 'react-router-dom';
import { useElements } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import { useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState("");

    const handleSubmit = async (e) => {

    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.messaage : "");
    }

    return (
        <div className='payment'>
            <div className='payment__Container'>
                <h1>
                    Checkout(<Link to="/checkout">{basket?.length} items</Link>)
                </h1>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Pick-Up Time</h3>
                    </div>
                    <div className='payment__pickUpTime'>
                        <p>{user?.email}</p>
                        <p>Make Your Way to the cafe</p>
                    </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items for Pick-Up</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map((item)=> (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                img={item.img}
                                price={item.price}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                    )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "By Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment