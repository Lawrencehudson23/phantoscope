import React from "react";
import { Button } from "antd";
import "./CustomButton.less";
const CustomButton = ({ children, isGoogleSignIn, inverted, otherProps }) => {
  return (
    <Button
      className={`
      ${inverted ? "inverted" : ""}
    ${isGoogleSignIn ? "google-sign-in" : ""}
    custom-button
    `}
      {...otherProps}
      htmlType="submit"
    >
      {children}
    </Button>
  );
};

export default CustomButton;
