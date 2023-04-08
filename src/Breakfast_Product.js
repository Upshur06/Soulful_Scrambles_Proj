import React from 'react'
import './Breakfast_Product.css'
import { useStateValue } from './StateProvider'

function Breakfast_Product({ id, title, description, img, price }) {
    const [{ basket }, dispatch] = useStateValue();

    // console.log('This is the basket', basket);
    // console.log('cost:', {price});

    const addToOrder = () =>{
        dispatch({
            type: "ADD_TO_ORDER",
            item: {
                id: id,
                title: title,
                img: img,
                price: price,
                description: description
            },
        });
    };

    return (
        <div className='breakfast_productContainer'>
            <div className='breakfast_info'>
                <div className='breafast_title'>
                    <h4>{title}</h4>
                </div>
                <div className='breafast_description'>
                    <p>{description}</p>
                </div>
                <div className='breafast_price'>
                    <p>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                </div>
            </div>
            <div className='breafast_imgContainer'>
                <img className='breakfast_img' src={img} />
                <button onClick={addToOrder}>Add to cart</button>
            </div>
        </div>
    )
}

export default Breakfast_Product