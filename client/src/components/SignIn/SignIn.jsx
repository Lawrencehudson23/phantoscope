import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
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

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserCredentials({
      email: "",
      password: "",
    });
  };
  return (
    <Form
      onSubmit={handleSubmit}
      className="sign-in"
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignIn;
