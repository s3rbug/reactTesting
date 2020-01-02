import React from "react";
import { compose } from "redux";
import withAuthRedirect from "../../common/hoc/withAuthRedirect";
// import classes from './News.module.css'

const News = props => {
  return <div>News</div>;
};

export default compose(withAuthRedirect)(News);
