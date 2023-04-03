import React from 'react'
import './Breakfast_Product.css'

function Breakfast_Product() {
    return (
        <div className='breakfast_productContainer'>
            <div className='breakfast_info'>
                <div className='breafast_title'>
                    <h4>Eggs Your Way</h4>
                </div>
                <div className='breafast_description'>
                    <p>Three farm fresh eggs served with toasted bread and your choice of breakfast meat.</p>
                </div>
                <div className='breafast_price'>
                    <p>
                        <small>$</small>
                        <strong>$14.65</strong>
                    </p>
                </div>
            </div>
            <div className='breafast_img'>

            </div>
        
        </div>
    )
}

export default Breakfast_Product