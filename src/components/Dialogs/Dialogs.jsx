import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

function Dialogs(props) {
  const dialogsElements = props.messagesPage.dialogs.map(data => (
    <DialogItem key={data.id} id={data.id} name={data.name} />
  ));

  const messagesElements = props.messagesPage.messages.map(data => (
    <Message key={data.id} message={data.message} />
  ));

  let onSend = () => {
    props.sendMessage();
  };

  let onChange = e => {
    props.changeMessage(e.target.value);
  };

  function onPress(e) {
    if (e.key === "Enter") {
      if (e.shiftKey || e.ctrlKey) {
        if (e.ctrlKey) props.changeMessage(props.newMessageText + "\n");
        return;
      }
      e.preventDefault();
      onSend();
    }
  }

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
              onKeyDown={onPress}
            />
            <button className={classes.send} onClick={onSend}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
