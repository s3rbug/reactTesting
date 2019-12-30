import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Field, reduxForm } from "redux-form";

function Dialogs(props) {
  const dialogsElements = props.messagesPage.dialogs.map(data => (
    <DialogItem key={data.id} id={data.id} name={data.name} />
  ));

  const messagesElements = props.messagesPage.messages.map(data => (
    <Message key={data.id} message={data.message} />
  ));

  const addNewMessage = value => {
    props.sendMessage(value.newMessageBody);
    value.newMessageBody = "";
  };

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogItems}>{dialogsElements}</div>
        <div className={classes.messages}>
          {messagesElements}
          <AddMessageFormRedux {...props} onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
}

const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.enter}>
        <Field
          component="textarea"
          name="newMessageBody"
          placeholder="Enter your message"
        />
        <button className={classes.send}>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: "addMessageForm"
})(AddMessageForm);

export default Dialogs;
