import React from "react";
import "./CartDropdown.less";
import { connect } from "react-redux";

import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";
const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton type="primary">Go to Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
