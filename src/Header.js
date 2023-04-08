import React from 'react'
import './Header.css'
import LocalCafeIcon from '@mui/icons-material/LocalCafe'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import CreateIcon from '@mui/icons-material/Create'
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider'

function Header() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <img className='header__logo' src="/images/Soulful_Scrambles_Cafe.png"/>
            <div className='header__container'>
                <Link className='header__Link' to="/">
                    <div className='header__container_nav'>
                        Home
                        <LocalCafeIcon className='header__homeIcon'/>
                    </div>
                </Link>

                <Link className='header__Link' to="/menu">
                    <div className='header__container_nav'>
                        Menu
                        <RestaurantMenuIcon className='header__homeIcon'/>
                    </div>
                </Link>

                <Link className='header__Link' to="/order">
                    <div className='header__container_nav'>
                        Order Online
                        <CreateIcon className='header__homeIcon'/>
                    </div>
                </Link>

                <Link className='header__Link' to="/info">
                    <div className='header__container_nav'>
                        Info
                        <BubbleChartOutlinedIcon className='header__homeIcon'/>
                    </div>
                </Link>

            </div>
            <div className='header__order'>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>

                <Link className='header__Link' to="/checkout">
                    <div className='header__optionBasket'>
                        <ShoppingCartOutlinedIcon />
                        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header