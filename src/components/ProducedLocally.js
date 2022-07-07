import React from 'react';
import { Container, Image, } from 'react-bootstrap';

import LocalMove from '../img/LocalMove.png';

function ProducedLocally() {
    return ( 
        <section className="local_product_area">
            <div className="container">
                <div className="local_row row">
                    <div className="local_img">
                        <Image src={LocalMove} />
                    </div>
                    <div className="local_content">
                        <h2>Produced <br /> Locally</h2>
                        <p>Artusine was established in Southern California. We manage the company on a local level and collaborate with printing partners across the United States and Europe. Every item shipped is custom-made in the United States or Europe and double-checked for quality assurance.</p>
                        <a href="#" className='learnmore'>Learn More</a>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default ProducedLocally;