import React, { useState } from "react";

const ShopPage = () => {
  const [collections, setCollections] = useState([
    {
      id: 1,
      title: "Throw Pillow Cover",
      routeName: "throwpillowcover",
      items: [],
    },
  ]);

  return <div>shoppage</div>;
};

export default ShopPage;
