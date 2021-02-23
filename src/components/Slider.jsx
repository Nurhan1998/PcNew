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
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/warzone/social/wz-social-share.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;