import React from 'react';
import { Container, Image, } from 'react-bootstrap';
import Navmenu from './navmenu';

import Cart from '../img/cart.svg';
import Close from '../img/close.svg';
import Hambar from '../img/hambar.svg';
import Heart from '../img/heart.svg';
import Logo from '../img/logo.svg';
import Nav_close from '../img/nav_close.svg';
import Search from '../img/search.svg';
import User from '../img/user.svg';

function Nav_Bar() {
    return (
        <header className='header_area'>
            <Container>
                <div className="nav_container">
                    <div className="nav_left">
                        <div className="nav_triger mobile_none" id='navTriger1'>
                            <Image className='menu_open' src={Hambar} />
                            <Image className='close_menu' src={Close} />
                        </div>
                        <Navmenu />
                        <div className="navBrand">
                            <a href="#"><Image className='' src={Logo} /></a>
                        </div>
                    </div>
                    <div className="nav_right ">
                        <div className="nav_search">
                            < Image className='searchIcon' src={Search} />
                        </div>
                        <div className="nav_user">
                            < Image className='userIcon' src={User} />
                        </div>
                        <div className="nav_Heart">
                            < Image className='HeartIcon' src={Heart} />
                        </div>
                        <div className="nav_Cart">
                            < Image className='CartIcon' src={Cart} />
                        </div>
                    </div>
                    
                    <div className="nav_triger mobile_only" id='navTriger1'>
                        <Image className='menu_open' src={Hambar} />
                        <Image className='close_menu' src={Close} />
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Nav_Bar;