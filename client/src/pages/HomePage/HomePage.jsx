import React from "react";
import "antd/dist/antd.less";
import { Carousel } from "antd";
import Directory from "../../components/Directory/Directory";

import "./index.less";
const HomePage = () => {
  return (
    <div>
      <Carousel autoplay>
        <div
          style={{
            backgroundImage: `url(https://cdn.shopify.com/s/files/1/2781/9998/files/81D2EuWuSGL._SL1500_3024x.jpg?v=1537914892)`,
          }}
        >
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
      <Directory />
    </div>
  );
};

export default HomePage;
