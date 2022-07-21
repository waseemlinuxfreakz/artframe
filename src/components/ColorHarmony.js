import {React,useEffect,useState} from 'react';

import { Container, Image, Tabs, Tab, Dropdown, Toggle, Item, } from 'react-bootstrap';

import DownAngel from '../img/DownAngel.svg';
import CustomizeFrame from '../img/CustomizeFrame.png';
import CustomizeFramelandscape from '../img/CustomizeFramelandscape.png';
import CheckoutLogo from '../img/CheckoutLogo.svg';

import CustomizeShare from './social';


function ColorHarmony() {
    const [isActive, setIsActive] = useState(false);

    const desktopviewClick = event => {
        //setIsActive(current => !current);
        console.log("working alert");
        
        var element = document.getElementById("horizental_sect");
        element.classList.add("activeLandscape");
    };
    const desktopviewremoveClick = event => {
        //setIsActive(current => !current);
        var element = document.getElementById("horizental_sect");
        element.classList.remove("activeLandscape");
    };

    return (
        <div className="customize_frame_box">
            <div className="customeze_row">
                <div className="row">
                    <div className="col-xl-4 col-lg-7 col-md-12 customize_left">
                        <div className="custome_frame_box">
                            <h5 className="custome_frame_title">Your Colors </h5>
                            <p>Click on the dots below to choose your desired colors </p>
                            <div className="color_options">
                                <span className="color_option color_1"></span>
                                <span className="color_option color_2"></span>
                                <span className="color_option color_3"></span>
                            </div>
                        </div>
                        <div className="custome_frame_box">
                            <h5 className="custome_frame_title">Pick a Colors </h5>
                            <div className="color_options">
                                <span className="pick_colr"></span>
                            </div>
                        </div>
                        <div className="custome_frame_box">
                            <h5 className="custome_frame_title">Pick a hormony </h5>
                            <Dropdown className='select_option'>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    harmony <Image src={DownAngel} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">harmony</Dropdown.Item>
                                    <Dropdown.Item href="#">harmony</Dropdown.Item>
                                    <Dropdown.Item href="#">harmony</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="custome_frame_box">
                            <h5 className='custome_frame_title'>Possibilities</h5>
                            <div className="color_options">
                                <span className="color_option color_1"></span>
                                <span className="color_option color_2"></span>
                                <span className="color_option color_3"></span>
                                <span className="color_option color_4"></span>
                                <span className="color_option color_5"></span>
                                <span className="color_option color_6"></span>
                                <span className="color_option color_7"></span>
                                <span className="color_option color_8"></span>
                                <span className="color_option color_9"></span>
                            </div>
                        </div>
                        <div className="custome_frame_box">
                            <h5 className='custome_frame_title'>Size</h5>
                            <Dropdown className='select_option'>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    size <Image src={DownAngel} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">size</Dropdown.Item>
                                    <Dropdown.Item href="#">size</Dropdown.Item>
                                    <Dropdown.Item href="#">size</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="custome_frame_box">
                            <h5 className='custome_frame_title'>layout</h5>
                            <div className="selectLayout">
                                <span className="port_layout" onClick={desktopviewremoveClick}>Portrait</span>
                                <span className="lands_layout" onClick={desktopviewClick}>landscape</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-12 col-md-12 customize_center">
                    {/* toggle classs "activeLandscape" */}
                        <div className="customeframe_box" id="horizental_sect">
                            <Image src={CustomizeFrame} className="Portrait"/ >
                            <Image src={CustomizeFramelandscape} className="landscape"/ >
                        </div>
                        <p className="lina_line">lina</p>
                    </div>
                    <div className="col-xl-3 col-lg-5 col-md-12 customize_right">
                        <div className="custome_frame_box">
                            <h5 className='custome_frame_title'>format</h5>
                            <div className="formate_btn">
                                <a href="#" className="blackBtn">Print</a>
                                <a href="#" className="blackBtn">pdf</a>
                            </div>
                        </div>
                        <div className="custome_frame_checkout">
                            <div className="addtoCart">
                                <h3>Total: $39</h3>
                                <p>
                                    Ships 1-3 Business Days
                                    <br />
                                    Free Shipping Included
                                </p>
                                <a href="#" className="blackBtn addtoCartBtn">Add to cart</a>
                                <a href="#" className="saveform_later">Save for later</a>
                            </div>
                            <div className="checkout_details">
                                <h3>Artusine</h3>
                                <p>
                                    Using our custom-built color editor, <br />
                                    choose from a wide variety of styles, moods, & colors.
                                </p>
                                <p>
                                    Production Process <br />
                                    Advanced Lichee Printing <br /> using HP Indigo 12000 Press
                                </p>
                                <p>
                                    Paper Stock <br />
                                    250 GSM Matte Paper <br /> Acid Free / Archival Quality
                                </p>
                                <p>
                                    Inks <br />
                                    HP Indigo Pigment Inks 30-60 years before colour fading
                                </p>
                                <p>
                                    Parcel Weight <br />
                                    0.95 kg
                                </p>
                                <Image src={CheckoutLogo} className="CheckoutLogo" />
                            </div>
                        </div>
                        <CustomizeShare />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorHarmony;