import React from 'react';

import { Image } from 'react-bootstrap';

import CustomeFrame from './customeframe';
import ArtDesign from './ArtandDesign';
import OwnDesign from './Owndesign';
import CustomizeArtSec from './CustomizeArt';
import DesignCollection from './DesignCollection';
import DiscoverArea from './DiscoverArea';
import ProducedLocally from './ProducedLocally';
import ArtWorking from './Artworking';

import Customizeart from '../img/customizeart.svg';
import CustomizeYourArt from './CustomizeYourArt';

function HomeContent() {
    return (
        <div className="home_contaner">

            <OwnDesign/>

            <section className="artdesignSlide">
                <ArtDesign/>
            </section>  

            <CustomizeArtSec/>

            {/* <CustomizeYourArt/> */}

            <section className="customize_frame_area">
                <Image src={Customizeart} className="customize_Customizeart" />
                <div className="container">
                    <h2 className="custome_title">customize here</h2>
                    <CustomeFrame />
                </div>
            </section>

            <DesignCollection/>

            <DiscoverArea/>

            <ProducedLocally/>

            <ArtWorking/>


        </div>
    );
}

export default HomeContent;