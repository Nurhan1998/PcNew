import React from 'react';
import {Col,Container,Row} from 'react-bootstrap'
import {GrInstagram} from 'react-icons/gr'

const Footer = () => {
    return (
        <div style={{background:"#00439c",height:"100px"}} >
            <Container> 
                <Row>
                    <Col>
                    
                    <h1 style={{color:"white"}}>Hello</h1>
                  
                    

                    </Col>
                </Row>
                <a href="google.com" style={{color:"white",display:"flex",justifyContent:"center"}}>© 2021 Sony Interactive Entertainment Europe Ltd. Все права защищены.</a>
            </Container>
        </div>
    );
};

export default Footer;