import React from "react";
import SingleMessage from "./SingleMessage";

export default function MessageBox({ messages, currentSender }) {
  return (
    <ul className="list">
      {messages.map((m, index) => (
        <SingleMessage key={index} message={m} currentSender={currentSender} />
      ))}
    </ul>
  );
}
