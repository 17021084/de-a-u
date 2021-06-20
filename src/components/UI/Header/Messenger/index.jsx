import React from "react";
import "./styles.scss";
import SendIcon from "@material-ui/icons/Send";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import PeopleIcon from "@material-ui/icons/People";
import CloseIcon from "@material-ui/icons/Close";

export default function Messenger() {
  return (
    <div className="messenger-container">
      <div className="messenger-header">
        <h3>Meeting Details</h3>
        <CloseIcon />
      </div>
      <div className="messenger-header-tabs">
        <div className="tab">
          <PeopleIcon />
          <p>People (1) </p>
        </div>
        <div className="tab active">
          <ChatBubbleIcon />
          <p>Chat</p>
        </div>
      </div>
      <div className="chat-section">
        <div className="chat-block">
          <div className="sender">
            you
            <small> 10:00 PM </small>
          </div>
          <p className="msg"> Here come actual msg </p>
        </div>
      </div>
      <div className="send-msg-section" >
        <input placeholder="Send a message to Mina san " />
       <div className="icon">
        <SendIcon />
       </div>
      </div>
    </div>
  );
}
