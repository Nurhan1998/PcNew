import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const Slider = () => {
    return (
        <div>
<Carousel>
  <Carousel.Item interval={40}>
    <img
      className="d-block w-100"
      src="https://wowcasual.info/wp-content/uploads/2020/07/All_Heroes_3.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.contentapi.ea.com/content/dam/eacom/SIMS/brand-refresh-assets/images/2019/07/ts4-featured-image-base-refresh.png.adapt.crop191x100.1200w.png"
      alt="Second slide"
    />

    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/warzone/social/wz-social-share.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;