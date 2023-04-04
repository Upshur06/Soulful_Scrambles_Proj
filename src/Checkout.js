import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout_ad' src='https://media.istockphoto.com/id/1389175014/photo/various-types-of-bread-ears-of-wheat-flying-on-gray-background-classic-wheat-round-bread.jpg?b=1&s=170667a&w=0&k=20&c=XmCULiVsIJFQpexx_EnYGz0DIDYEM3g7giB3rZNwbNQ=' />
                <div>
                    <h2 className='checkout__title'>Your Order</h2>

                    {/* <OrderItem /> */}
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout