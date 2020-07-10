import React from "react";
import "./CartDropdown.less";
import { connect } from "react-redux";

import CustomButton from "../CustomButton/CustomButton";
import { selectCartItems } from "../../redux/cart/cartSelectors";
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

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
