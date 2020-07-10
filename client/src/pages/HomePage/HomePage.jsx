import React from "react";

import Directory from "../../components/Directory/Directory";

import "./index.less";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
const HomePage = () => {
  return (
    <div>
      <CustomCarousel />
      <Directory />
    </div>
  );
};

export default HomePage;
