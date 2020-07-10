import React from "react";
import "./CartDropdown.less";
import CustomButton from "../CustomButton/CustomButton";
const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton type="primary">Go to Checkout</CustomButton>
      </div>
    </div>
  );
};

export default CartDropdown;
