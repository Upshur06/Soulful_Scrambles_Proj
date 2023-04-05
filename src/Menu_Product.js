import React from 'react'
import './Menu_Product.css'

function Menu_Product({ id, title, description, img, price }) {
    return (
        <div className='Menu_Product'>
            <div className='breakfastMenu_imgContainer'>
                <img className='breakfastMenu_img' src={img} />
            </div>
            <div className='menu_info'>
                <div className='breakfastMenu_info'>    
                    <div className='breakfastMenu_title'>
                        <h2>{title}</h2>
                    </div>
                    <p>  .....................................  </p>
                    <div className='breakfastMenu_price'>
                        <h3>
                            <small>$</small>
                            <strong>{price}</strong>
                        </h3>
                    </div>
                </div>
                <div className='breakfastMenu_description'>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    )
}

export default Menu_Product