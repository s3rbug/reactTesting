import React from "react";
import { compose } from "redux";
import withAuthRedirect from "../../common/hoc/withAuthRedirect";
// import classes from './Settings.module.css'

const Settings = props => {
  return <div>Settings</div>;
};

export default compose(withAuthRedirect)(Settings);
