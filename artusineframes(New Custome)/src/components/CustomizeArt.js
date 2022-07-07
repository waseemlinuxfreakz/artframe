import React from 'react';
import { Container, Image, } from 'react-bootstrap';

import Customizeart from '../img/customizeart.svg';
import Art_design from '../img/Art_design.png';

function CustomizeArtSec() {
    return ( 
        <section className="art_design_area">
            <div className="container">
                <div className="artdesign_container">
                    <div className="art_title">
                        <h2>Customize Art that best fits  <br />your surroundings.</h2>
                        <p>Surround yourself with art that best fits your mood,style and environment. Now with Artusine you can  always place art that truly matches every setting you place it in.Whether you want to decorate your home, just moved into your student dorm, or your home office we want to be a part of creating a wonderful environment</p>
                    </div>
                    <Image src={Art_design} />
                </div>
            </div>
            <Image src={Customizeart} className='Customizeart' />
        </section>
     );
}

export default CustomizeArtSec;