import React from "react";
import { reduxForm, Field } from "redux-form";

const LoginForm = props => {
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field name="login" component="input" placeholder="Login" />
        </div>
        <div>
          <Field component="input" placeholder="Password" name="password" />
        </div>
        <div>
          <Field name="rememberMe" component="input" type="checkbox" /> Remember
          me
        </div>
        <div>
          <button>Sign up</button>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: "login" // a unique name for the form
})(LoginForm);

export default LoginReduxForm;
