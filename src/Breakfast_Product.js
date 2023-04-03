import React from 'react'
import './Breakfast_Product.css'

function Breakfast_Product({ title, description, img, price }) {
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
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Breakfast_Product