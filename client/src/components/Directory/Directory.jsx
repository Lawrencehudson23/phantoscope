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
    },
    {
      title: "Placemat",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2781/9998/files/71rOSp3m7OL._SL1500_800x.jpg?v=1523390954",
      id: 2,
    },
    {
      title: "Table Runner",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2781/9998/files/wix_800x.jpg?v=1530142512",
      id: 3,
    },
    {
      title: "Apron",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2781/9998/files/91wawBxAVHL._SL1500_800x.jpg?v=1523391085",
      id: 4,
    },
    {
      title: "New In Collections",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2781/9998/files/91nhndT_sTL._SL1500_800x.jpg?v=1530142556",
      size: "large",
      id: 5,
    },
  ]);
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
