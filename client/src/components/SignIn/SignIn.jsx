import React, { useState } from "react";
import { Form, Input, Checkbox } from "antd";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils.js";

import "./SignIn.less";
import CustomButton from "../CustomButton/CustomButton.jsx";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  // eslint-disable-next-line
  required: "${label} is required!",
  types: {
    // eslint-disable-next-line
    email: "${label} is not validate email!",
  },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  //   const onFinishFailed = (errorInfo) => {
  //     console.log("Failed:", errorInfo);
  //   };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      auth.signInWithEmailAndPassword(email, password);

      setUserCredentials({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <Form
        onSubmit={handleSubmit}
        {...layout}
        name="nest-messages"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ type: "email", required: true }]}
          value={email}
          onChange={handleChange}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true }]}
          value={password}
          onChange={handleChange}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <CustomButton type="submit">Sign In</CustomButton>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn type="button">
            Sign in With Google
          </CustomButton>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
