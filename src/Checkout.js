import React from 'react'
import './Checkout.css'

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout_ad' src='https://media.istockphoto.com/id/1389175014/photo/various-types-of-bread-ears-of-wheat-flying-on-gray-background-classic-wheat-round-bread.jpg?b=1&s=170667a&w=0&k=20&c=XmCULiVsIJFQpexx_EnYGz0DIDYEM3g7giB3rZNwbNQ=' />
                <div>
                    <h2 className='checkout__title'>Your Order</h2>
                </div>
            </div>
            <div className='checkout__right'>
                <h2 className=''>Sub Total</h2>
            </div>
        </div>
    )
}

export default Checkout