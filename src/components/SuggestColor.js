import {React,useEffect,useState} from 'react';

import { Container, Image, Tabs, Tab, Dropdown, Toggle, Item, } from 'react-bootstrap';

import DownAngel from '../img/DownAngel.svg';
import CustomizeFrame from '../img/CustomizeFrame.png';
import CustomizeFramelandscape from '../img/CustomizeFramelandscape.png';
import CheckoutLogo from '../img/CheckoutLogo.svg';
import RightBtn from '../img/right-btn.svg';
import LeftBtn from '../img/left-btn.svg';



import CustomizeShare from './social';


function SuggestColor() {

    const [isActive, setIsActive] = useState(false);

    const desktopviewClick = event => {
        //setIsActive(current => !current);
        console.log("working alert");
        
        var element = document.getElementById("horizental_sect_2");
        element.classList.add("activeLandscape");
    };
    const desktopviewremoveClick = event => {
        //setIsActive(current => !current);
        var element = document.getElementById("horizental_sect_2");
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
                            <h5 className="custome_frame_title">Suggested colors </h5>
                            <div className="suggestColorOpt">
                                <div className="SuggestColorBox" id="suggestColor1">
                                    <span className="suggest_color suggestColor1"></span>
                                    <span className="suggest_color suggestColor2"></span>
                                    <span className="suggest_color suggestColor3"></span>
                                    <span className="suggest_color suggestColor4"></span>
                                    <span className="suggest_color suggestColor5"></span>
                                    <span className="suggest_color suggestColor6"></span>
                                    <span className="suggest_color suggestColor7"></span>
                                    <span className="suggest_color suggestColor8"></span>
                                </div>
                                <div className="color_slide_opion">
                                    <a href="#" className="colorRight"><img src={LeftBtn} /></a>
                                    <a href="#"  className="colorLeft"><img src={RightBtn} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="custome_frame_box">
                            <h5 className='custome_frame_title'>Possibilities</h5>
                            <p>Drag and drop the circles to rearrange the colors displayed in your art </p>
                            <div className="color_options">
                                <span className="color_option color_1"></span>
                                <span className="color_option color_2"></span>
                                <span className="color_option color_3"></span>
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
                        <div className="customeframe_box" id="horizental_sect_2">
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

export default SuggestColor;