/* eslint-disable react/jsx-pascal-case */
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

            <hr></hr>

            <div>
                <h2>Breakfast</h2>
            </div>

            <div className='Order__row'>
                <div>
                    <h3>French Toast, Pancakes, & Waffle</h3>
                </div>
                <div className='Breakfast_Container'>
                    <div className='Breakfast_Product_Container'>
                        <Breakfast_Product 
                            title ='French Toast Mafia' 
                            description='French Toast with suger powder and butter' 
                            img='https://media.istockphoto.com/id/500146273/photo/french-toast.jpg?b=1&s=170667a&w=0&k=20&c=fyokVk0ETVDpRFUBK165-S9W9SSoTHMtqz9TUOWdBe8='  
                            price={11.65} 
                        />
                        <Breakfast_Product 
                            title ='Bombay French Toast' 
                            description='French Toast with blueberries' 
                            img='https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' 
                            price={13.45} 
                        />
                    </div>

                    <div className='Breakfast_Product_Container'>
                        <Breakfast_Product 
                            title ='Wafflemania' 
                            description='Waffles with strawberries and blueberries' 
                            img='https://media.istockphoto.com/id/185266029/photo/waffles-with-fruit-and-maple-syrup-on-a-marble-counter.jpg?b=1&s=170667a&w=0&k=20&c=hH8dRj_eOW1mLiPuHIcAeHY76Y3LmyXWE9hTzokN5EY=' 
                            price={14.65}
                        />
                        <Breakfast_Product 
                            title ='Waffle Wonderland' 
                            description='Belgin waffles with powder sugar and rasberries' 
                            img='https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FmZmxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'  
                            price={15.65} 
                        />
                    </div>

                    <div className='Breakfast_Product_Container'>
                        <Breakfast_Product 
                            title ='Fluffy Favorites Pancakes' 
                            description='Pancakes with bananas' 
                            img='https://images.unsplash.com/photo-1597249637214-a85d31f434d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhbmNha2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' 
                            price={10.55} 
                        />
                        <Breakfast_Product 
                            title ='Tastiest Pancakes' 
                            description='Pancakes with stawberries and bananas' 
                            img='https://images.unsplash.com/photo-1597699401474-e8714c1b7879?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'  
                            price={11.25} 
                        />
                    </div>
                </div>
            </div>

            <div className='Order__row'>
                <div>
                    <h3>Sides - Breakfast</h3>
                </div>
                <div className='Breakfast_Container'>
                    <div className='Breakfast_Product_Container'>
                        <Breakfast_Product 
                            title ='Bacon' 
                            description='Pork or Turkey Bacon' 
                            img='https://media.istockphoto.com/id/1375869932/photo/strips-of-fragrant-fried-bacon-macro-background.jpg?b=1&s=170667a&w=0&k=20&c=lzOoJ_-gifk63JGil1soj2TUInPKtfInMx4TlUEneSo='  
                            price={3.65}
                        />
                        <Breakfast_Product 
                            title ='Sausage Patty' 
                            description='Pork or Turkey Sausage Patties' 
                            img='https://media.istockphoto.com/id/162424970/photo/cooking-sausage.jpg?b=1&s=170667a&w=0&k=20&c=D04qu4kEgkwXkOHiyvXZBP-itzIzmRxhY-wrgRi-Y_M=' 
                            price={5.35} 
                        />
                    </div>

                    <div className='Breakfast_Product_Container'>
                        <Breakfast_Product 
                            title ='Eggs' 
                            description='Scrambbled, Sunny Side Up, or boiled, with your choice of with cheese or without' 
                            img='https://images.unsplash.com/photo-1668891876129-619ccf5059f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va2VkJTIwZWdnc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' 
                            price={5.65} 
                        />
                        <Breakfast_Product 
                            title ='Homefries' 
                            description='Homefries with peppers and onions' 
                            img='https://media.istockphoto.com/id/1336432276/photo/roasted-potatoes-in-iron-skillet.jpg?b=1&s=170667a&w=0&k=20&c=WNekO0vVqhSn7p2TkfKCqDMe51PI3GRohUgaUVQMYEU='  
                            price={6.15} 
                        />
                    </div>

                    <div className='Breakfast_Product_Container'>
                        <Breakfast_Product 
                            title ='Biscuit with Gravy' 
                            description='Biscuit with Gravy' 
                            img='https://media.istockphoto.com/id/1287213014/photo/biscuits-and-creamy-sausage-gravy.jpg?b=1&s=170667a&w=0&k=20&c=egG6qObLdZy_fQCA4cJKq2To6SL9wtqkoCPNRIEaX4g=' 
                            price={7.55} 
                        />
                        <div></div>
                    </div>
                </div>
            </div>

            <div className='Order__row'>
                <div>
                    <h3>Other</h3>
                </div>
                <div className='Breakfast_Container'>
                    <div className='Breakfast_Product_Container'>
                        <Breakfast_Product 
                            title ='Bagles' 
                            description='Bagels with you choice of cream chesse or butter' 
                            img='https://media.istockphoto.com/id/183026429/photo/pile-of-assorted-bagels-on-reflective-surface.jpg?b=1&s=170667a&w=0&k=20&c=ecrJvtlkx3KHGw7Qurm911Hvyz0n5ippYF3gosS7RKM='  
                            price={3.45} 
                        />
                        <Breakfast_Product 
                            title ='Muffin' 
                            description='Your choice of a blueberry, banana nut muffins' 
                            img='https://media.istockphoto.com/id/516688047/photo/homemade-autumn-pumpkin-muffin.jpg?b=1&s=170667a&w=0&k=20&c=3hFBoiexSR8dacFvV9MfVmM2RTfgSxmlpB9vl8qYIzg=' 
                            price={5.15}
                        />
                    </div>

                    <div className='Breakfast_Product_Container'>
                        <Breakfast_Product 
                            title ='Cinnamon rolls' 
                            description='Baked Cinnamon rolls' 
                            img='https://media.istockphoto.com/id/1405973450/photo/cinnamon-buns.jpg?b=1&s=170667a&w=0&k=20&c=afPQsjZSetAfiql7QXGhHDofKhlunln-42SaTaK1yyY=' 
                            price={5.75}
                        />
                        <Breakfast_Product 
                            title ='Oatmeal' 
                            description='Oatmeal with you choice of fruits, seeds, sugar, milk, cream, or water' 
                            img='https://images.unsplash.com/photo-1584970922591-5b91e5f927a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8T2F0bWVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'  
                            price={3.65} 
                        />
                    </div>

                    <div className='Breakfast_Product_Container'>
                        <Breakfast_Product 
                            title ='Grits' 
                            description='Grits with you choice of salt, pepper, sugar, or butter' 
                            img='https://media.istockphoto.com/id/172690719/photo/grits.jpg?b=1&s=170667a&w=0&k=20&c=Q_6pXkFlSf-quTx3vR8HkePkNh-Lci3M5QbihiPl64Y=' 
                            price={6.35} 
                        />
                        <Breakfast_Product 
                            title ='Cream of Wheat' 
                            description='Cream of Wheat with you choice of fruits, sugar, or cinnamon' 
                            img='https://media.istockphoto.com/id/1371790658/photo/bowl-of-oatmeal-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=GvAZdTe4Q0IyPygbungWiEQ63CJxG1a1NJWqBLmay-Y='  
                            price={3.45} 
                        />
                    </div>
                </div>
            </div>

            <div className='Order__row'>
                <div>
                    <h3>Drinks</h3>
                </div>
                <div className='Breakfast_Container'>
                    <div className='Breakfast_Product_Container'>
                        <Breakfast_Product 
                            title ='Orange Juice' 
                            description='Fresh squeezed orange juice' 
                            img='https://media.istockphoto.com/id/120027056/photo/tumbler-glass-of-orange-juice-resting-on-a-white-surface.jpg?b=1&s=170667a&w=0&k=20&c=PT-9Keh4ljysDZclNDN5pbLStIsdH-x41G6Cvx7zxNE='  
                            price={2.75} 
                        />
                        <Breakfast_Product 
                            title ='Apple Juice' 
                            description='Apple Juice' 
                            img='https://media.istockphoto.com/id/1323857956/photo/drinking-glass-full-of-apple-juice-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=XIWWucyqnFMuxHt_FO9mi8qmHQ9mypBjfZqQl-I38sM=' 
                            price={2.55} 
                        />
                    </div>

                    <div className='Breakfast_Product_Container'>
                        <Breakfast_Product 
                            title ='Coffee' 
                            description='Decafe or regular coffee' 
                            img='https://media.istockphoto.com/id/1358132613/photo/refreshing-hot-cup-of-coffee-at-a-cafe.jpg?b=1&s=170667a&w=0&k=20&c=yWCgrKacdKBjpwTStBv8IBnMjuIECKUTfuCtkAfyMlc=' 
                            price={5.75}
                        />
                        <Breakfast_Product 
                            title ='Tea' 
                            description='Packets of tea' 
                            img='https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'  
                            price={3.65} 
                        />
                    </div>

                    <div className='Breakfast_Product_Container'>
                        <Breakfast_Product 
                            title ='Latte' 
                            description='Hot Latte' 
                            img='https://images.unsplash.com/photo-1632845407875-10b4d85e6bf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vY2hhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' 
                            price={6.35} 
                        />
                        <Breakfast_Product 
                            title ='Cidar' 
                            description='Hot Cider with Cinnamon' 
                            img='https://media.istockphoto.com/id/155429291/photo/hot-mulled-cider.jpg?b=1&s=170667a&w=0&k=20&c=gMNhgMievwc1QTIgCRKXLnoliRw6ZmUTFiIr8oYF_SI='  
                            price={14.65}
                        />
                    </div>
                </div>
            <hr></hr>
            </div>

            <div className='order__healthInfo'>
                <p>
                    Please inform your server of any food allergies or dietary restrictions.
                </p>
                <p>
                    Consuming raw or under cooked food may increase your chances of food borne illness.
                </p>
            </div>

        </div>
    )
}

export default Online_Order