import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";

import "./index.less";
const Directory = () => {
  const [sections, setSections] = useState([
    {
      title: "Pillow Cover",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2781/9998/files/81nT29XauhL._SL1500_800x.jpg?v=1523574250",
      id: 1,
      linkUrl: "pillow",
    },
    {
      title: "Placemat",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2781/9998/files/71rOSp3m7OL._SL1500_800x.jpg?v=1523390954",
      id: 2,
      linkUrl: "",
    },
    {
      title: "Table Runner",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2781/9998/files/wix_800x.jpg?v=1530142512",
      id: 3,
      linkUrl: "",
    },
    {
      title: "Apron",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2781/9998/files/91wawBxAVHL._SL1500_800x.jpg?v=1523391085",
      id: 4,
      linkUrl: "",
    },
  ]);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
