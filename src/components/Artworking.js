import React from 'react';
import { Container, Image, } from 'react-bootstrap';

import Artwork_1 from '../img/artwork_1.svg';
import Artwork_2 from '../img/artwork_2.svg';
import Artwork_3 from '../img/artwork_3.svg';
import Gif_5 from '../img/gif/Personal(100).gif';

function ArtWorking() {
    return ( 
        <section className='artwrokSetting'>
            <div className="container">
                <div className="section_title artwrokSetting_title">
                    <h2>Enjoy one-of-a-kind artwork in a setting that's uniquely yours.</h2>
                </div>
                <div className="row artwrokSetting_row">
                    <div className="col-lg-4 col-md-4 col-4">
                        <div className="artwork_cont">
                            <div className="artwork_cont_img">
                                <Image src={Artwork_1} />
                            </div>
                            <h5>Fun Process</h5>
                            <p>Designing a custom print is easy and fun with our editors - choose from hundreds of art peices and thousands of colors to make your unique art peice.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                        <div className="artwork_cont">
                            <div className="artwork_cont_img">
                                <Image src={Artwork_2} />
                            </div>
                            <h5>Beautiful & Unique</h5>
                            <p>Since you are 100% in controll of the coloring process. Your masterpeice always ends up perfect and unique to you.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                        <div className="artwork_cont">
                            <div className="artwork_cont_img">
                                <Image src={Gif_5} />
                            </div>
                            <h5>Personal</h5>
                            <p>You are in complete control of the creative process. Your space now can connect to you . </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default ArtWorking;