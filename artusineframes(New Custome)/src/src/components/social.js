import React from 'react';

import { Image, } from 'react-bootstrap';

import FB from '../img/social/fb.svg';
import EmailLink from '../img/social/Em.svg';
import linkedin from '../img/social/Link.svg';

function CustomizeShare() {
    return (
        <div className="customeProductShare">
            <h4>Share</h4>
            <ul className="product_share">
                <li><a href="#"><Image src={FB} /></a></li>
                <li><a href="#"><Image src={EmailLink} /></a></li>
                <li><a href="#"><Image src={linkedin} /></a></li>
            </ul>
        </div>
    );
}

export default CustomizeShare;