import React from 'react';

import { Container, Image, Tabs, Tab, Dropdown, Toggle, Item, } from 'react-bootstrap';

import DownAngel from '../img/DownAngel.svg';
import CustomizeFrame from '../img/CustomizeFrame.png';
import FrameBackground from '../img/custome_background.svg';
import CheckoutLogo from '../img/CheckoutLogo.svg';

import CustomizeShare from './social';
import ColorHarmony from './ColorHarmony';
import SuggestColor from './SuggestColor';
import RandomCOlor from './RandomColor';


function CustomeFrame() {
    return (
        <div className="customeFrame">
            <Tabs defaultActiveKey="ColorHarmony" id="customeFrame_tabs" className="customeFrame_tabs">
                <Tab eventKey="ColorHarmony" title="Color Harmony">
                    <ColorHarmony/>
                </Tab>
                <Tab eventKey="Suggestedcolors" title="Suggested colors ">
                    <SuggestColor/>
                </Tab>
                <Tab eventKey="randomcolors" title="random colors">
                    <RandomCOlor/>
                </Tab>
            </Tabs>
        </div>
    );
}

export default CustomeFrame;