import React from 'react'
import './Online_Order.css'
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import Breakfast_Product from './Breakfast_Product';

function Online_Order() {
    return (
        <div className='Online'>
            <div className='order__imageContainer'>
                <div className='order__utinsils'>
                    <RestaurantOutlinedIcon />
                </div>

                <img className='order__image' src="https://media.istockphoto.com/id/1335061999/photo/traditional-scrambled-egg-breakfast-with-bacon-and-toast.jpg?b=1&s=170667a&w=0&k=20&c=rDH_c2DvL-MWFJyogYJuZdQR1NqPmSHyOwYEte6O0S0=" alt='' />

                <div className='order__utinsils'>
                    <RestaurantOutlinedIcon />
                </div>
            </div>
            <div>
                <h2>Breakfast</h2>
            </div>

            <div className='Order__row'>
                <div>
                    <h3>French Toast, Pancakes, & Waffle</h3>
                </div>
                <div className='Breakfast_Container'>
                    <Breakfast_Product/>
                    <Breakfast_Product/>
                </div>
            </div>


            <div className='Order__row'>
                <div>
                    <h3>Sides - Breakfast</h3>
                </div>
                {/* <Breakfast_Product/> */}
            </div>

            <div className='Order__row'>
                <div>
                    <h3>Drinks</h3>
                </div>
                {/* <Breakfast_Product/> */}
            </div>

        </div>
    )
}

export default Online_Order