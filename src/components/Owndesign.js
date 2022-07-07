import React from 'react';

import { Container, Image, } from 'react-bootstrap';

import Gif_1 from '../img/gif/CustomizedArt(100).gif';

function OwnDesign() {
    return ( 
        <section className="banar_area">
            <Container>
                <div className="banarContainer">
                    <div className="banar_left">
                        <p>Design your own</p>
                        <h1>Customized art</h1>
                        <a href="#" className='banar_btn blacksmall_btn mobile_none'>Discover our collection</a>
                    </div>
                    <div className="banar_right">
                        <Image className='banar_frame' src={Gif_1} />
                    </div>
                    <a href="#" className='banar_btn blacksmall_btn mobile_only'>Discover our collection</a>
                </div>
            </Container>
        </section>
     );
}

export default OwnDesign;