import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, description, img, price }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromOrder = () => {
        dispatch({
            type: 'REMOVE_FROM_ORDER',
            id: id
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__img' src={img} alt={title} />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className='checkoutProduct__description'>{description}</p>
                <button className='checkoutProduct__button' onClick={removeFromOrder}>Remove from cart</button>                
            </div>
        </div>
    )
}

export default CheckoutProduct