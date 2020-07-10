import React from "react";
import { ShoppingOutlined } from "@ant-design/icons";
import "./CartIcon.less";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartAction";
const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingOutlined className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
