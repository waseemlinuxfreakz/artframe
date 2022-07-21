import React from 'react';

import { Image, } from 'react-bootstrap';

import Banar_frame from '../img/Banar_frame.png';
import FootArt from '../img/footerart.svg';
import logo_2 from '../img/logo_2.svg';

import Facebook from '../img/social/fb.svg';
import Twitter from '../img/social/twiter.svg';
import Instagram from '../img/social/inst.svg';
import Youtube from '../img/social/youtube.svg';

import RightArrow from '../img/rightarrow.svg';
import footLogo from '../img/footLogo_2.svg';

function Footer() {
    return (
        <footer className="footer_area">
            <Image src={FootArt} className='FootArt' />
            <div className="container">
                <div className="footer_row row">
                    <div className="col footWidget_col foot_logo">
                        <div className="footwidget ">
                            <Image src={footLogo} />
                            <div className="tabletFootLogo">
                                <Image className='banar_frame' src={Banar_frame} />
                            </div>
                        </div>
                    </div>
                    <div className="col footWidget_col quickLinks">
                        <div className="footwidget ">
                            <h3>Navigation</h3>
                            <ul>
                                <li><a href="#">Customize</a></li>
                                <li><a href="#">Cart</a></li>
                                <li><a href="#">Collection</a></li>
                                <li><a href="#">Orders tracking</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col footWidget_col quickLinks">
                        <div className="footwidget ">
                            <h3>Useful Links</h3>
                            <ul>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Wishlist</a></li>
                                <li><a href="#">Compare</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col footWidget_col social_share">
                        <div className="footwidget ">
                            <h3>Follow Us</h3>
                            <ul>
                                <li><a href="#"><Image src={Twitter} /> Twitter</a></li>
                                <li><a href="#"><Image src={Facebook} /> Facebook</a></li>
                                <li><a href="#"><Image src={Instagram} /> Instagram</a></li>
                                <li><a href="#"><Image src={Youtube} /> Youtube</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col footWidget_col subscribeCol">
                        <div className="footwidget">
                            <h3>Subscribe.</h3>
                            <p>Subscribe to our newsletter to receive news on update.</p>
                            <div className="subscribeForm">
                                <form action="#">
                                    <input type="email" placeholder='' name='subscribeEmail' id='subscribeEmail' />
                                    <button><Image src={RightArrow} /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright text-center">Copyright © 2022 Artusine. All Rights Reserved</div>
            </div>
        </footer>
    );
}

export default Footer;