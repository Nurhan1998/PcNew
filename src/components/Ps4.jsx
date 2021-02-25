import React from 'react';
import {Container,Row,Col,Button,Card} from 'react-bootstrap'
const Ps4 = () => {
    return (
        <div>
            <Container >                
                <h1 className="mt-5 text-center">Explore PlayStation®4</h1>
                <h5 className="text-center" style={{color:"gray"}}>Incredible games, non-stop entertainment. There's never been</h5>
                <h5 className="text-center" style={{color:"gray"}}>a better time to enjoy PS4.</h5>
            <Row>
                <Col> 
                    <Card className="mb-5 mt-5" style={{ width: '18rem',height:'23rem' }}>
                    <Card.Img variant="top" src="https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-homepage-image-block-04-en-09oct20?$1600px--t$" />
                    <Card.Body>
                    <Card.Title className="text-center">PlayStation 4</Card.Title>
                    <Card.Text>
                    Incredible games live on PS4, with 1TB storage.
                    </Card.Text>
                    <Button  variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col> 
                <Card className="mb-5 mt-5" style={{ width: '18rem',height:'23rem' }}>
                    <Card.Img variant="top" src="https://gmedia.playstation.com/is/image/SIEPDC/double11-202010-tw-psvr?$1600px--t$" />
                    <Card.Body>
                    <Card.Title className="text-center">PlayStation 4</Card.Title>
                    <Card.Text>
                    Incredible games live on PS4, with 1TB storage.
                    </Card.Text>
                    <Button  variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col> 
                <Card className="mb-5 mt-5" style={{ width: '18rem',height:'23rem' }}>
                    <Card.Img variant="top" src="https://gmedia.playstation.com/is/image/SIEPDC/dualshock-4-listing-thumb-01-ps4-en-12oct20?$1600px$$" />
                    <Card.Body>
                    <Card.Title className="text-center">PlayStation 4</Card.Title>
                    <Card.Text>
                    Incredible games live on PS4, with 1TB storage.
                    </Card.Text>
                    <Button  variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
                </Col>
                
            </Row>
            </Container>
        </div>
    );
};

export default Ps4;