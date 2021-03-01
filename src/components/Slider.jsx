import React from "react";
import { Container, Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://gmedia.playstation.com/is/image/SIEPDC/hogwarts-legacy-key-art-01-ps5-en-02oct20?$4000px--t$"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-black-ops-cold-war-screen-08-en-26aug20?$4000px--t$https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-black-ops-cold-war-screen-08-en-26aug20?$4000px--t$ "
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://gmedia.playstation.com/is/image/SIEPDC/fifa-21-ps4-screen-03-en-23jul20?$native$"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
