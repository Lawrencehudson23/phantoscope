import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import "./App.less";
import SignInSignUpPage from "./pages/SignInSignUpPage/SignInSignUpPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

import Header from "./components/Header/Header";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/userSelectors";
import { checkUserSession } from "./redux/user/userAction";
const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <div className="content"></div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          path="/signIn"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
          }
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
