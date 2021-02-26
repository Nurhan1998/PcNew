import React from "react";
import {
  Container,
  Col,
  Row,
  Image,
  ResponsiveEmbed,
  Button,
  Carousel,
} from "react-bootstrap";
import Slider from "../components/Slider";
import Typical from "react-typical";
import { Link } from "react-router-dom";

const Info2 = () => {
  return (
    <Container>
      <h6 className="mt-5 text-center" style={{ color: "blue" }}>
        PLAY HAS NO LIMITS
      </h6>
      <h1 className="text-center">Introducing PlayStation 5</h1>
      <h5 className="text-center" style={{ color: "gray" }}>
        Unleash new gaming possibilities that you never anticipated
      </h5>
      <Row>
        <Col lg={6}>
          <Container style={{ width: "400px" }}>
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "PlayStation 5 - Console Experience an all-new generation of incredible PlayStation games.",
                3000,
                "DualSense™ Wireless Controller Immerse yourself with a controller offering haptic feedback, adaptive triggers and a built-in mic.",
                2000,
                "english",
                1000,
                "welsh",
                1000,
              ]}
            />
            {/* Сделать адаптивным */}
            <Container>
              <a href="https://store.playstation.com/ru-ru/subscriptions">
                <Button size="sm">Наш Главные партнеры</Button>
              </a>
            </Container>
            <h1 style={{ marginTop: "170px" }}>PlayStation 5 Console</h1>
            <p>
              Experience an all-new generation of incredible PlayStation games.
            </p>
          </Container>
        </Col>
        <Col lg={6}>
          <Carousel
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src="https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-horizontal-product-shot-01-ps5-en-23nov20?$1600px--t$"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="https://gmedia.playstation.com/is/image/SIEPDC/Dualsense-square-image-block-ps5-01-en-09oct20?$1600px--t$"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="https://gmedia.playstation.com/is/image/SIEPDC/3D-Pulse-Wireless-Headset-square-image-block-ps5-01-en-09oct20?$1600px--t$"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://gmedia.playstation.com/is/image/SIEPDC/hd-camera-square-image-block-ps5-01-en-07dec20?$1600px$"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Info2;
