import React from "react";
import "./CartDropdown.less";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { Button } from "antd";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cartAction";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button
        type="primary"
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go to Checkout
      </Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
