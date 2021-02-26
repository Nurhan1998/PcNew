import React from "react";
import {
  Container,
  Image,
  ResponsiveEmbed,
  Card,
  Button,
  Row,
  Col,
} from "react-bootstrap";

const Info = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: "#1f1f1f",
      }}
    >
      <Container
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <h3
          className="text-center pt-4"
          style={{
            color: "white",
          }}
        >
          Great games out now
        </h3>

        <Row className="pt-3">
          <Col>
            <Card style={{ width: "13rem", height: "13rem" }}>
              <Card.Img
                variant="top"
                src="https://gmedia.playstation.com/is/image/SIEPDC/hitman-3-standard-edtion-pack-shot-en-10aug-20?$1600px--t$"
              />
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "13rem", height: "13rem" }}>
              <Card.Img
                variant="top"
                src="https://gmedia.playstation.com/is/image/SIEPDC/immortal-fenyx-rising-thumbnail-01-en-04sept20?$1600px$"
              />
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "13rem", height: "13rem" }}>
              <Card.Img
                variant="top"
                src="https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-black-ops-cold-war-standard-pack-ps4-25aug20$en?$1600px$"
              />
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "13rem", height: "13rem" }}>
              <Card.Img
                variant="top"
                src="https://gmedia.playstation.com/is/image/SIEPDC/fifa-21-standard-edition-pack-01-ps4-ps5-en-20jul20?$1600px$"
              />
            </Card>
          </Col>
        </Row>

        <Row className="pt-4 pb-5">
          <Col>
            <Card style={{ width: "13rem", height: "13rem" }}>
              <Card.Img
                variant="top"
                src="https://gmedia.playstation.com/is/image/SIEPDC/nba-2k21-standard-edition-store-art-01-ps5-en-21aug20?$1600px--t$"
              />
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "13rem", height: "13rem" }}>
              <Card.Img
                variant="top"
                src="https://gmedia.playstation.com/is/image/SIEPDC/Miles-Morales-thumbnail-01-ps4-en-12nov20?$1600px$"
              />
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "13rem", height: "13rem" }}>
              <Card.Img
                variant="top"
                src="https://gmedia.playstation.com/is/image/SIEPDC/destiny-2-beyond-light-store-art-01-ps4-04nov20-en-us?$1600px$"
              />
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "13rem", height: "13rem" }}>
              <Card.Img
                variant="top"
                src="https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-standard-edition-pack-01-ps4-en-22apr20?$1600px$"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Info;
