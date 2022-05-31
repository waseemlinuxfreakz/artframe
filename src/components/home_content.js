import React from 'react';

import { Container, Image, } from 'react-bootstrap';

import CustomeFrame from './customeframe';

import Banar_frame from '../img/Banar_frame.png';
import Unique_frame from '../img/Unique_frame.png';
import Art_design from '../img/Art_design.png';
import Ourdesing_1 from '../img/ourdesing1.png';
import Ourdesing_2 from '../img/ourdesing2.png';
import Ourdesing_3 from '../img/ourdesing3.png';
import LocalMove from '../img/LocalMove.png';

import Artwork_1 from '../img/artwork_1.svg';
import Artwork_2 from '../img/artwork_2.svg';
import Artwork_3 from '../img/artwork_3.svg';

import Customizeart from '../img/customizeart.svg';

function HomeContent() {
    return (
        <div className="home_contaner">
            <section className="banar_area">
                <Container>
                    <div className="banarContainer">
                        <div className="banar_left">
                            <p>Design your own</p>
                            <h1>Customized art</h1>
                            <a href="#" className='banar_btn blacksmall_btn mobile_none'>Discover our collection</a>
                        </div>
                        <div className="banar_right">
                            <Image className='banar_frame' src={Banar_frame} />
                        </div>
                        <a href="#" className='banar_btn blacksmall_btn mobile_only'>Discover our collection</a>
                    </div>
                </Container>
            </section>

            <section className='uniqueart_design'>
                <div className="container">
                    <div className="qunique_container">
                        <div className="unique_left">
                            <Image className='unique_art_img' src={Unique_frame} />
                            <span className='line_title'>LINA</span>
                        </div>
                        <a href="#" className='blackBtn mobile_only'>Customize now</a>
                        <div className="unique_right">
                            <div className="unique_right_content">
                                <h2 className='unique_line_title'>
                                    Elevate your world <br /> with unique Art & Design
                                </h2>
                                <div className="color_box">
                                    <h3 className="border_title"> MAKE IT PERSONAL </h3>
                                    <p>Customized art printed on premium <br /> archival paper in multiple colors shandes and sizes.</p>
                                </div>
                                <a href="#" className='blackBtn mobile_none'>Customize now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

            <section className="customize_frame_area">
                <Image src={Customizeart} className="customize_Customizeart" />
                <div className="container">
                    <h2 className="custome_title">customize here</h2>
                    <CustomeFrame />
                </div>
            </section>

            <section className="ourdesigns_area">
                <div className="container">
                    <div className="section_title">
                        <h2>Our Designs</h2>
                        <p>Customize any of the <br /> following and many more.</p>
                    </div>
                    <div className="customerow row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="design_col">
                                <Image src={Ourdesing_1} />
                                <div className="design_content">
                                    <h3>Line Art</h3>
                                    <p>Custom prints from $39</p>
                                    <a href="#" className="blackBtn">Customize now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="design_col">
                                <Image src={Ourdesing_2} />
                                <div className="design_content">
                                    <h3>Modern Art</h3>
                                    <p>Custom prints from $39</p>
                                    <a href="#" className="blackBtn">Customize now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="design_col">
                                <Image src={Ourdesing_3} />
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

            <section className="discover_area">
                <div className="container">
                    <div className="discover_title">
                        <h2>Finding the right colors can be difficult. So we got your back. Our dedicated team has worked hard to engineer a few methods to assist you with always selecting the right colors for your art .</h2>
                    </div>
                    <div className="discover_row row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="discover_col">
                                <p>Random Colors : </p>
                                <p>Our Random Colors feild was create for those who want to start with inspiration and build off of that . Once random colors are generated by our system, one may make changes by changing one, two or all colors Artusine has selected.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="discover_col">
                                <p>Suggested Colors:</p>
                                <p>The design team at Artusine has currated a colloection of color schemes they belive would look great with specific pieces. Feel free to give them a try. We are confidant you will every single color scheme. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="discover_col">
                                <p>Color Harmony:</p>
                                <p>In color theory, color harmony refers to the property that certain aesthetically pleasing color combinations have. These combinations create pleasing contrasts and consonances that are said to be harmonious.</p>
                            </div>
                        </div>
                    </div>
                    <div className="discover_btn">
                        <a href="#" className="blackBtn">discover now</a>
                    </div>
                </div>
            </section>

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

            <section className='artwrokSetting'>
                <div className="container">
                    <div className="section_title artwrokSetting_title">
                        <h2>Enjoy one-of-a-kind artwork in a setting that's uniquely yours.</h2>
                    </div>
                    <div className="row artwrokSetting_row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="artwork_cont">
                                <div className="artwork_cont_img">
                                    <Image src={Artwork_1} />
                                </div>
                                <h5>Fun Process</h5>
                                <p>Designing a custom print is easy and fun with our editors - choose from hundreds of art peices and thousands of colors to make your unique art peice.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="artwork_cont">
                                <div className="artwork_cont_img">
                                    <Image src={Artwork_2} />
                                </div>
                                <h5>Beautiful & Unique</h5>
                                <p>Since you are 100% in controll of the coloring process. Your masterpeice always ends up perfect and unique to you.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="artwork_cont">
                                <div className="artwork_cont_img">
                                    <Image src={Artwork_3} />
                                </div>
                                <h5>Personal</h5>
                                <p>You are in complete control of the creative process. Your space now can connect to you . </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default HomeContent;