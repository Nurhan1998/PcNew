import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiTwitch,
} from "react-icons/fi";

const Footer = () => {
  return (
    <div style={{ background: "#00439c" }}>
      <Container fluid className="pt-3">
        <Row>
          <Col lg={4} className="text-center">
            <Image src="https://www.playstation.com/etc.clientlibs/global_pdc/clientlibs/clientlib-base/resources/ps-bug.svg" />
          </Col>

          <Col lg={4} className="ml-auto mr-auto text-center">
            <h5 style={{ color: "white" }}>GET THE APP </h5>
            <a href="https://www.apple.com/ru/app-store/">
              <Image src="https://media.boohoo.com/i/boohooamplience/applestore_footer_en" />
            </a>
            <a href="https://play.google.com/store/apps?hl=ru&gl=US">
              <Image src="https://media.boohoo.com/i/boohooamplience/googlestore_footer_en" />
            </a>
          </Col>
          <Col lg={4} className="text-center">
            <h5 style={{ color: "white" }}>Follow Us On</h5>
            <h3 style={{ display: "flex", justifyContent: "center" }}>
              <a href="https://www.instagram.com/" style={{ color: "yellow" }}>
                <FiInstagram className="mr-3" />
              </a>
              <a href="https://www.facebook.com/">
                <FiFacebook className="mr-3" />
              </a>
              <a href="https://www.twitch.tv/" style={{ color: "purple" }}>
                <FiTwitch className="mr-3" />
              </a>
              <a href="https://www.youtube.com/" style={{ color: "red" }}>
                <FiYoutube className="mr-3" />
              </a>
              <a href="https://www.twitter.com/" style={{ color: "blue" }}>
                <FiTwitter />
              </a>
            </h3>
          </Col>
        </Row>
        <a
          href="https://www.playstation.com/ru-ru/"
          style={{ color: "white", display: "flex", justifyContent: "center" }}
        >
          © 2021 Sony Interactive Entertainment Europe Ltd. Все права защищены.
        </a>
      </Container>
    </div>
  );
};

export default Footer;
