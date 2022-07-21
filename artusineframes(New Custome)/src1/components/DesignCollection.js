import React from 'react';
import { Container, Image, } from 'react-bootstrap';

import Gif_2 from '../img/gif/OurDesigns1(100).gif';
import Gif_3 from '../img/gif/OurDesigns2(100).gif';
import Gif_4 from '../img/gif/OurDesigns3(100).gif';

function DesignCollection() {
    return ( 
        
        <section className="ourdesigns_area">
            <div className="container">
                <div className="section_title">
                    <h2>Our Designs <span>&</span> Collections</h2>
                    <p>Customize any of the <br /> following and many more.</p>
                </div>
                <div className="customerow row">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="design_col">
                            <Image src={Gif_2} />
                            <div className="design_content">
                                <h3>Line Art</h3>
                                <p>Custom prints from $39</p>
                                <a href="#" className="blackBtn">Customize now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="design_col">
                            <Image src={Gif_3} />
                            <div className="design_content">
                                <h3>Modern Art</h3>
                                <p>Custom prints from $39</p>
                                <a href="#" className="blackBtn">Customize now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="design_col">
                            <Image src={Gif_4} />
                            <div className="design_content">
                                <h3>Classic Art</h3>
                                <p>Custom prints from $39</p>
                                <a href="#" className="blackBtn">Customize now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

     );
}

export default DesignCollection;