import React from 'react';
import {Col,Container,Row,Image} from 'react-bootstrap'
import {GrInstagram} from 'react-icons/gr';
import {AiOutlineInstagram,AiOutlineFacebook,AiOutlineTelegram} from 'react-icons/ai'
import {FaTelegram} from 'react-icons/fa'

const Footer = () => {
    return (
        <div style={{background:"#00439c"}} >
            <Container fluid className="pt-3"> 
                <Row>
                    <Col>
                        <Image src="https://www.playstation.com/etc.clientlibs/global_pdc/clientlibs/clientlib-base/resources/ps-bug.svg"/>
                    </Col>
                    
                    <Col className="ml-auto mr-auto">
                        <h1>
                            <AiOutlineInstagram/>
                            <AiOutlineFacebook/>
                            <FaTelegram/>
                        </h1>
                    </Col>  
                </Row>
                <a href="https://www.playstation.com/ru-ru/" style={{color:"white",display:"flex",justifyContent:"center"}}>© 2021 Sony Interactive Entertainment Europe Ltd. Все права защищены.</a>
            </Container>
        </div>
    );
};

export default Footer;