import {React,useEffect,useState} from 'react';

import CustomizeImage from '../img/car.png';
import CustomizeShare from './social';
import CheckoutLogo from '../img/CheckoutLogo.svg';
import Color1 from '../img/color/color-1.svg';
import Color2 from '../img/color/color-2.svg';
import Color3 from '../img/color/color-3.svg';
import Color4 from '../img/color/color-4.svg';
import colorpicker from '../img/color/color-picker.svg';
import RelatedPost from './RelatedPost';


function CustomizeYourArt() {
    
    const [isActive, setIsActive] = useState(false);

    const desktopviewClick = event => {
    
    };

    return (
        <section className="CustomizeYourArt">
            <div className="container">
                <div className="cutstomi_cont_area">
                    <div className="cutomize_title">
                        Customise your Art
                    </div>
                    <div className="row customizeRow">
                        <div className="customize_left_col">
                            <div className="customize_image">
                                <img src={CustomizeImage} alt="Customize Image" />
                            </div>
                            <h3 className="artNumber">Custome Art <span>3</span> <CustomizeShare /></h3>
                            <div className="artPrize">$59</div>
                            <div className="addtoCartRow row">
                                <div className="col-6 addCart">
                                    <a href="#" className='addCartBtn'>Add To Cart</a>
                                    <a href="#" className='saveLater'>Save for later</a>
                                </div>
                                <div className="col-6 shiping">
                                    Ships 1-3 Business Days <br />
                                    Free Shipping Included
                                </div>
                            </div>
                            <div className="feature_row row">
                                <div className="col-6 feature_col">
                                    <h3>Features</h3>
                                    <p>Using our custom-built color editor, <br />
                                        choose from a wide variety of <br />
                                        styles, moods, & colors.</p>
                                </div>
                                <div className="col-6 feature_col">
                                    <h3>Production Process</h3>
                                    <p>Advanced Lichee Printing <br />
                                        using HP Indigo 12000 Press</p>
                                </div>
                                <div className="col-6 feature_col">
                                    <h3>Paper Stock</h3>
                                    <p>250 GSM Matte Paper <br />
                                        Acid Free / Archival Quality</p>
                                </div>
                                <div className="col-6 feature_col">
                                    <h3>Inks</h3>
                                    <p>HP Indigo Pigment Inks <br />
                                        30-60 years before colour fading</p>
                                </div>
                                <div className="col-6 feature_col">
                                    <h3>Parcel Weight</h3>
                                    <p>0.95 kg</p>
                                </div>
                                <div className="col-6 feature_col">
                                    <img src={CheckoutLogo} alt="FSC" />
                                </div>
                            </div>
                        </div>{/* customize_left_col */}
                        <div className="customize_right_col">
                            <div className="color_group">
                                <h5>Our Recomendations</h5>
                                <ul className="recomanded_color">
                                    <li><a href="#"><img src={Color1} alt="color-1" /></a></li>
                                    <li><a href="#"><img src={Color2} alt="color-1" /></a></li>
                                    <li><a href="#"><img src={Color3} alt="color-1" /></a></li>
                                    <li><a href="#"><img src={Color4} alt="color-1" /></a></li>
                                </ul>
                            </div>
                            <div className="color_group">
                                <h5>Styles</h5>
                                <div className="style_color">
                                    <div className="color_item">
                                        <input type="radio" name='colorSty' id='colorSty_1'  />
                                        <label htmlFor="colorSty_1"><span className='styleColor_1'> </span></label>
                                    </div>
                                    <div className="color_item">
                                        <input type="radio" name='colorSty' id='colorSty_2'  />
                                        <label htmlFor="colorSty_2"><span className='styleColor_2'> </span></label>
                                    </div>
                                    <div className="color_item">
                                        <input type="radio" name='colorSty' id='colorSty_3'  />
                                        <label htmlFor="colorSty_3"><span className='styleColor_3'> </span></label>
                                    </div>
                                    <div className="color_item">
                                        <input type="color" name='colorpicker' id='colorpicker'  />
                                        <label htmlFor="colorpicker"><span className="colorPicker"><img src={colorpicker} alt="Color Picker" /></span></label>
                                    </div>
                                </div>
                            </div>
                            <div className="choseColorHarm">
                                <h5>Choose color harmony style: Analogous</h5>
                                <div className="selectOpt">
                                    <select name="ColorHarm" id="ColorHarm">
                                        <option value="Analogous">Analogous</option>
                                        <option value="Analogous">Analogous</option>
                                        <option value="Analogous">Analogous</option>
                                        <option value="Analogous">Analogous</option>
                                    </select>
                                    <div className="colorHormonyLabel"></div>
                                </div>
                            </div>
                            <div className="select_Color">
                                <h5>Choose color</h5>
                                <div className="selectColorDes"><input type="color" className="choseColor" name='selectColor' id='selectColor' /></div>
                            </div>
                            <div className="layOut">
                                <h5>Layout</h5>
                                <div className="select_Layout">
                                    <div className="layOp">
                                        <input type="radio" name='layOut' id='layout_hori' onClick={desktopviewClick} />
                                        <label htmlFor="layout_hori" className='layout_hori'>A</label>
                                    </div>
                                    <div className="layOp">
                                        <input type="radio" name='layOut' id='layout_verti' onClick={desktopviewClick} />
                                        <label htmlFor="layout_verti" className='layout_verti'>A</label>
                                    </div>
                                </div>
                            </div>
                            <div className="select_Size">
                                <h5>Size</h5>
                                <div className="select_size">
                                    <div className="size_col">
                                        <input type="radio" name='ratSize' id='selectSize_1' />
                                        <label htmlFor="selectSize_1">12 x 18 inches</label>
                                    </div>
                                    <div className="size_col">
                                        <input type="radio" name='ratSize' id='selectSize_2' />
                                        <label htmlFor="selectSize_2">18 x 24 inches</label>
                                    </div>
                                    <div className="size_col">
                                        <input type="radio" name='ratSize' id='selectSize_3' />
                                        <label htmlFor="selectSize_3">30 x 40 inches</label>
                                    </div>
                                    <div className="size_col">
                                        <input type="radio" name='ratSize' id='selectSize_4' />
                                        <label htmlFor="selectSize_4">50 x 70 inches</label>
                                    </div>
                                </div>
                            </div>
                            <div className="exportAs">
                                <h5>Export As</h5>
                                <div className="exportBtns">
                                    <a href="#" className='PringBtn Export_btn'>Print</a>
                                    <a href="#" className='pdfBtn Export_btn'>PDF only</a>
                                </div>
                            </div>
                            <RelatedPost/>
                        </div>{/* customize_right_col */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CustomizeYourArt;