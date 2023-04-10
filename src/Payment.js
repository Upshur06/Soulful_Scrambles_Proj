import './Payment.css'
import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

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
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment