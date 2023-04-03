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
                        <strong>14.65</strong>
                    </p>
                </div>
            </div>
            <div className='breafast_imgContainer'>
                <img className='breakfast_img' src='https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' />
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Breakfast_Product