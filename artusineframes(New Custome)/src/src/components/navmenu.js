import React from 'react';
import { Image } from 'react-bootstrap';

import Cart from '../img/cart.svg';
import Heart from '../img/heart.svg';
import Search from '../img/search.svg';
import User from '../img/user.svg';
import Logo from '../img/logo.svg';
import RightArrow from '../img/rightarrow.svg';
import Hambar from '../img/hambar.svg';
import Close from '../img/close.svg';

import Facebook from '../img/social/fb.svg';
import Twitter from '../img/social/twiter.svg';
import Instagram from '../img/social/inst.svg';
import Youtube from '../img/social/youtube.svg';

function Navmenu() {
    return (
        <div className="navmenucontainer">
            <div className="container">
                {/* <div className="nav_triger mobile_none">
                <Image className='menu_open' src={Hambar} />
                <Image className='close_menu' src={Close} />
            </div> */}
                <a href='#' className="mobile_navBrand ">
                    <Image className='' src={Logo} />
                </a>
                <ul className="menulist">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Customize</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="menuSubscrib subscribeCol ">
                    <h3>Subscribe.</h3>
                    <p>Subscribe to our newsletter to receive news on update.</p>
                    <div className="subscribeForm">
                        <form action="#">
                            <input type="email" placeholder='' name='subscribeEmail' id='subscribeEmail' />
                            <button><Image src={RightArrow} /></button>
                        </form>
                    </div>
                </div>
                <div className="menuSocial ">
                    <ul>
                        <li><a href="#"><Image src={Twitter} /> </a></li>
                        <li><a href="#"><Image src={Facebook} /> </a></li>
                        <li><a href="#"><Image src={Instagram} /> </a></li>
                        <li><a href="#"><Image src={Youtube} /> </a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navmenu;