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
  const sendElement = React.createRef();
  function onSend(event) {
    console.log(sendElement.current.value);
  }

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogItems}>{dialogsElements}</div>
        <div className={classes.messages}>
          {messagesElements}
          <div className={classes.enter}>
            <textarea ref={sendElement} />
            <button onClick={onSend}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
