import React from 'react';

import { Container, Image, Tabs, Tab, Dropdown, Toggle, Item, } from 'react-bootstrap';

import DownAngel from '../img/DownAngel.svg';
import CustomizeFrame from '../img/CustomizeFrame.png';
import FrameBackground from '../img/custome_background.svg';
import CheckoutLogo from '../img/CheckoutLogo.svg';

import CustomizeShare from './social';
import Customize from './customize';


function CustomeFrame() {
    return (
        <div className="customeFrame">
            <Tabs defaultActiveKey="ColorHarmony" id="customeFrame_tabs" className="customeFrame_tabs">
                <Tab eventKey="ColorHarmony" title="Color Harmony">
                    <Customize/>
                </Tab>
                <Tab eventKey="Suggestedcolors" title="Suggested colors ">
                    <Customize/>
                </Tab>
                <Tab eventKey="randomcolors" title="random colors">
                    <Customize/>
                </Tab>
            </Tabs>
        </div>
    );
}

export default CustomeFrame;