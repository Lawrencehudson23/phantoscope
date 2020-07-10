import React from "react";
import { Button } from "antd";
import "./CartDropdown.less";
const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <Button type="primary">Go to Checkout</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
