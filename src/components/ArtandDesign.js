import React, { Component } from "react";
import { Container, Image, Tabs, Tab, Dropdown, Toggle, Item, } from 'react-bootstrap';
import Slider from "react-slick";

import Unique_frame from '../img/Unique_frame.png';

export default class ArtDesign extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div className='uniqueart_design'>
              <div className="container">
                  <div className="qunique_container">
                      <div className="unique_left">
                          <div className="unique_leftaImg">
                            <Image className='unique_art_img' src={Unique_frame} />
                          </div>
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
          </div>
          <div className='uniqueart_design'>
              <div className="container">
                  <div className="qunique_container">
                      <div className="unique_left">
                           <div className="unique_leftaImg">
                            <Image className='unique_art_img' src={Unique_frame} />
                          </div>
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
          </div>
          <div className='uniqueart_design'>
              <div className="container">
                  <div className="qunique_container">
                      <div className="unique_left">
                          <div className="unique_leftaImg">
                            <Image className='unique_art_img' src={Unique_frame} />
                          </div>
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
          </div>
        </Slider>
      </div>
    );
  }
}
