import React from 'react';
import {Image} from 'react-bootstrap';

import Cart from '../img/cart.svg';
import Heart from '../img/heart.svg';
import Search from '../img/search.svg';
import User from '../img/user.svg';

function Navmenu() {
    return (
        <div className="navmenucontainer">
            <ul className="menulist">
                <li><a href="#">Home</a></li>
                <li><a href="#">Customize</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            
            <div className="nav_right mobile_only">
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
        </div>
    );
}

export default Navmenu;