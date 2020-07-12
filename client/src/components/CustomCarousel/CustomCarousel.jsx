import React from "react";
import { Carousel } from "antd";
import "./CustomCarousel.less";
const CustomCarousel = () => {
  return (
    <div>
      <Carousel autoplay className="carousel">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/2781/9998/files/81D2EuWuSGL._SL1500_3024x.jpg?v=1537914892"
            alt=""
          />
          <h3>1</h3>
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/2781/9998/files/81D2EuWuSGL._SL1500_3024x.jpg?v=1537914892"
            alt=""
          />
          <h3>2</h3>
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/2781/9998/files/81D2EuWuSGL._SL1500_3024x.jpg?v=1537914892"
            alt=""
          />
          <h3>3</h3>
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/2781/9998/files/81D2EuWuSGL._SL1500_3024x.jpg?v=1537914892"
            alt=""
          />
          <h3>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
