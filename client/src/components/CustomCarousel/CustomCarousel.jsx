import React from "react";
import "antd/dist/antd.less";
import { Carousel } from "antd";
const CustomCarousel = () => {
  return (
    <div className="custom-carousel">
      <Carousel autoplay>
        <div className="carousel-item">
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
