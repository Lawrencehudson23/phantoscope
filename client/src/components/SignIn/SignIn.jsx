import React, { useState } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils.js";
import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userAction";
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./SignIn.styles.jsx";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

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
    <SignInContainer>
      <SignInTitle>Welcome back.</SignInTitle>
      <p>Sign in with your email and password.</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          validateMessages={validateMessages}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          validateMessages={validateMessages}
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
