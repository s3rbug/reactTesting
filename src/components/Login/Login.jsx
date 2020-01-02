import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "./../../redux/authReducer";
import { Redirect } from "react-router-dom";
//import classes from "./Login.module.css"

const Login = props => {
  const onSubmit = formData => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  return props.isAuth ? (
    <Redirect to="/profile" />
  ) : (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
