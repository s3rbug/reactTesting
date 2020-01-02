import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "./../../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="email"
          component={Input}
          placeholder="Email"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          component={Input}
          placeholder="Password"
          name="password"
          type="password"
          validate={[required]}
        />
      </div>
      <div>
        <Field name="rememberMe" component="input" type="checkbox" />
        Remember me
      </div>
      <div>
        <button>Sign up</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login" // a unique name for the form
})(LoginForm);

export default LoginReduxForm;
