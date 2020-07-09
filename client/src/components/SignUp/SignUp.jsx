import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "./SignUp.less";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

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
      console.error(error);
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
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>

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
          <Input />
        </Form.Item>
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

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[{ required: true }]}
          value={confirmPassword}
          onChange={handleChange}
        >
          <Input.Password />
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
