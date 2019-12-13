import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

function Dialogs(props) {
  const dialogsElements = props.messagesPage.dialogs.map(data => (
    <DialogItem id={data.id} name={data.name} />
  ));
  const messagesElements = props.messagesPage.messages.map(data => (
    <Message message={data.message} />
  ));

  let onSend = () => {
    props.sendMessage();
  };

  let onChange = e => {
    props.changeMessage(e.target.value);
  };

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogItems}>{dialogsElements}</div>
        <div className={classes.messages}>
          {messagesElements}
          <div className={classes.enter}>
            <textarea
              placeholder="Enter your message"
              value={props.messagesPage.newMessageText}
              onChange={onChange}
            />
            <button onClick={onSend}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
