import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import { Tabs } from "antd";
import "./SignInSignUpPage.less";

const { TabPane } = Tabs;

const SignInSignUpPage = () => {
  return (
    <div className="sign-in-sign-up-page">
      <h1 className="heading-1">ACCOUNT</h1>

      <Tabs defaultActiveKey="1" centered className="account">
        <TabPane tab="SIGN IN" key="1" className="signin-group">
          <SignIn />
        </TabPane>
        <TabPane tab="RESISTER" key="2" className="register-group">
          <SignUp />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default SignInSignUpPage;
