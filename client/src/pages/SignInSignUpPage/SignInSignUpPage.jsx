import React from "react";
import "./SignInSignUpPage.less";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
const SignInSignUpPage = () => {
  return (
    <div className="sign-in-sign-up-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
