import React, { useState } from "react";
import { Form, Input, Checkbox } from "antd";
import "./SignUp.less";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { Button } from "antd";

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

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

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

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = auth.createUserWithEmailAndPassword(email, password);

      createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.log(error);
    }
    setUserCredentials({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="sign-up">
      <p>
        Create an account and benefit from a more personal shopping experience,
        and quicker online checkout.
      </p>
      <p>All fields are mandatory.</p>

      <Form
        onSubmit={handleSubmit}
        {...layout}
        name="nest-messages"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          label="Display Name"
          name="displayName"
          rules={[{ required: true }]}
          value={displayName}
          onChange={handleChange}
        >
          <Input
            label="Display Name"
            name="displayName"
            rules={[{ required: true }]}
            value={displayName}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ type: "email", required: true }]}
          value={email}
          onChange={handleChange}
        >
          <Input
            label="Email"
            name="email"
            rules={[{ type: "email", required: true }]}
            value={email}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true }]}
          value={password}
          onChange={handleChange}
        >
          <Input.Password
            label="Password"
            name="password"
            rules={[{ required: true }]}
            value={password}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[{ required: true }]}
          value={confirmPassword}
          onChange={handleChange}
        >
          <Input.Password
            label="Confirm Password"
            name="confirmPassword"
            rules={[{ required: true }]}
            value={confirmPassword}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>agree</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
