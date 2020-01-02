import React from "react";
import { compose } from "redux";
import withAuthRedirect from "../../common/hoc/withAuthRedirect";
// import classes from './Music.module.css'

const Music = props => {
  return <div>Music</div>;
};

export default compose(withAuthRedirect)(Music);
