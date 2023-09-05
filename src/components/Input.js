import React from "react";
import { useState } from "react";
import "../styles/Input.css";
import "../styles/Button.css";

export default function MessageInput({ onSendMessage }) {
  const [messageText, setMessageText] = useState("");

  const onChange = (e) => {
    setMessageText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (messageText.trim() === "") {
      return; // Ne šalji praznu poruku
    }

    // Ako unos nije prazan, šalji poruku i resetiraj unos
    onSendMessage(messageText);
    setMessageText("");
  };

  return (
    <div className="input">
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={messageText}
          type="text"
          placeholder="Upišite vašu poruku..."
          autoFocus={true}
        />
        <button>Pošalji</button>
      </form>
    </div>
  );
}
