import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout_ad' src='https://media.istockphoto.com/id/1389175014/photo/various-types-of-bread-ears-of-wheat-flying-on-gray-background-classic-wheat-round-bread.jpg?b=1&s=170667a&w=0&k=20&c=XmCULiVsIJFQpexx_EnYGz0DIDYEM3g7giB3rZNwbNQ=' alt=''/>
                <div>
                    <h2 className='checkout__title'>Your Order</h2>

                    {/* <CheckoutProduct 
                        id='123456'
                        title ='Cream of Wheat' 
                        img='https://media.istockphoto.com/id/1371790658/photo/bowl-of-oatmeal-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=GvAZdTe4Q0IyPygbungWiEQ63CJxG1a1NJWqBLmay-Y='  
                        price={3.45}
                        description='Cream of Wheat with you choice of fruits, sugar, or cinnamon' 
                    />

                    <CheckoutProduct 
                        id='123456'
                        title ='Cream of Wheat' 
                        img='https://media.istockphoto.com/id/1371790658/photo/bowl-of-oatmeal-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=GvAZdTe4Q0IyPygbungWiEQ63CJxG1a1NJWqBLmay-Y='  
                        price={3.45}
                        description='Cream of Wheat with you choice of fruits, sugar, or cinnamon' 
                    /> */}
                    
                    {basket.map(item => (
                        
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
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout