import React from "react";
import { useState } from "react";
import "./styles/App.css";
import MessageBox from "./components/MessageBox";
import MessageInput from "./components/Input";
import randomName from "./helpers/RandomName";
import randomColor from "./helpers/RandomColor";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [sender, setSender] = useState({
    username: randomName(),
    color: randomColor(),
  });
  const [connection, setConnection] = useState(null);

  const initializeConnection = () => {
    const newConnection = new window.Scaledrone("0nWaGcFx0oc62JFe", {
      data: sender,
    });
    newConnection.on("open", (error) => {
      if (error) {
        console.error(error);
      } else {
        const updatedSender = { ...sender };
        updatedSender.id = newConnection.clientId;
        setSender(updatedSender);
      }
    });
    const room = newConnection.subscribe("observable-antunorsolic");
    room.on("data", (data, sender) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender, messageText: data },
      ]);
    });
    setConnection(newConnection);
  };

  useState(() => {
    initializeConnection();
  }, []);

  const onSendMessage = (message) => {
    connection.publish({
      room: "observable-antunorsolic",
      message,
    });
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>Dobrodošli u Chat zonu!</h1>
      </div>
      <MessageBox messages={messages} currentSender={sender} />
      <MessageInput onSendMessage={onSendMessage} />
    </div>
  );
};

export default Chat;
