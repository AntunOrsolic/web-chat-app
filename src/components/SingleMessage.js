import React from "react";
import "../styles/Messages.css";

function SingleMessage({ message, currentSender }) {
  const { sender, messageText } = message;
  const myMessage = sender.id === currentSender.id;
  const user = myMessage ? "messages host-user" : "messages";

  return (
    <li className={user}>
      <div className="msg-content">
        <div className="username">{sender.clientData.username}</div>
        <div
          className="text"
          style={{ backgroundColor: sender.clientData.color }}
        >
          {messageText}
        </div>
      </div>
    </li>
  );
}

export default SingleMessage;
