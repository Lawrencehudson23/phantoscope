import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import "./App.less";
import Header from "./components/Header/Header";
import SignInSignUpPage from "./pages/SignInSignUpPage/SignInSignUpPage";
import { auth } from "./firebase/firebase.utils";
function App() {
  const [state, setState] = useState({
    currentUser: null,
  });
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setState({
        currentUser: user,
      });
      console.log(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signIn" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
