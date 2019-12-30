import React from "react";
import LoginForm from "./LoginForm";

const Login = props => {
  const onSubmit = formData => {
    console.log(formData);
  };
  return <LoginForm onSubmit={onSubmit} />;
};

export default Login;
