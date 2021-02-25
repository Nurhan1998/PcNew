import React from 'react';
import {Col,Container,Row,Image} from 'react-bootstrap'
import { FiInstagram,FiFacebook,FiTwitter,FiYoutube,FiTwitch } from 'react-icons/fi';


const Footer = () => {
    return (
        <div style={{background:"#00439c"}} >
            <Container fluid className="pt-3"> 
                <Row>
                    <Col lg={4} className="text-center">
                        <Image src="https://www.playstation.com/etc.clientlibs/global_pdc/clientlibs/clientlib-base/resources/ps-bug.svg"/>
                    </Col>
                    
                    <Col lg={4} className="ml-auto mr-auto text-center">
                        <h5 style={{color:"white"}}>GET THE APP </h5>
                        <Image src="https://media.boohoo.com/i/boohooamplience/applestore_footer_en"/>
                        <Image src="https://media.boohoo.com/i/boohooamplience/googlestore_footer_en"/>

                    </Col>  
                    <Col lg={4} className="text-center">
                    <h5 style={{color:"white"}}>Follow Us On</h5>
                    <h3 style={{display:"flex",justifyContent:"center"}}> 
                    
                            <FiInstagram className="mr-3"/>
                            <FiFacebook className="mr-3"/>
                            <FiTwitch className="mr-3"/>
                            <FiYoutube className="mr-3"/>
                            <FiTwitter />
                        </h3>
                            {/* <AiOutlineInstagram/>
                            <AiOutlineFacebook/>
                            <FaTelegram/> */}
                        
                    </Col>
                </Row>
                <a href="https://www.playstation.com/ru-ru/" style={{color:"white",display:"flex",justifyContent:"center"}}>© 2021 Sony Interactive Entertainment Europe Ltd. Все права защищены.</a>
            </Container>
        </div>
    );
};

export default Footer;
