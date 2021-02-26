import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";

const Mario = () => {
  return (
    <>
      <Container>
        <Container>
          <Row>
            <Card
              style={{ width: "20rem" }}
              className="ml-auto mt-5 mb-5 mr-4 text-center"
            >
              <Card.Img
                variant="top"
                src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-spiderman-video-thumb-block-8-en-110620?$1600px$"
              />
              <Card.Body className="text-center">
                <h3>
                  <strong>Play Together</strong>
                </h3>
                <Card.Text>
                  Work with (or against) your friends and family*.
                </Card.Text>
                <Button variant="outline-primary" size="lg">
                  Let's-a go
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "20rem" }} className="mt-5 mb-5 mr-4">
              <Card.Img
                variant="top"
                src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-hzd-video-thumb-block-05-en-110620?$1600px$"
              />
              <Card.Body className="text-center">
                <h3>
                  <strong>Explore</strong>
                </h3>
                <Card.Text>Prowl through some popular places.</Card.Text>
                <Button variant="outline-primary" size="lg">
                  Take a look
                </Button>
              </Card.Body>
            </Card>

            <Card
              style={{ width: "20rem" }}
              className="mt-5 mb-5 mr-4 text-center"
            >
              <Card.Img
                variant="top"
                src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-spiderman-video-thumb-block-8-en-110620?$1600px$"
              />
              <Card.Body className="text-center">
                <h3>
                  <strong>Play Together</strong>
                </h3>
                <Card.Text>
                  Work with (or against) your friends and family*.
                </Card.Text>
                <Button variant="outline-primary" size="lg">
                  Let's-a go
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Mario;
