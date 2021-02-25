import React from 'react';

import {Button,Container,Row,Col,Card,Image,Caption} from 'react-bootstrap';


const InfoSpider = () => {
    return (
        <div style={{
            position:"relative" 
            }} className="spider">
            <h1 style={{
                    position:"absolute",
                    zIndex:"999999",
                    color:"white",
                    marginTop:"150px"}}>Spider Man</h1>
            <Image className="d-block w-100" id="24.02" src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-background-block-desktop-01-en-11jun20?$native$" 
            />
               
        </div>
    );
};

export default InfoSpider;