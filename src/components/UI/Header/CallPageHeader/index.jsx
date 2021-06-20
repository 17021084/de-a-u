import React from "react";
import "./styles.scss";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function CallPageHeader() {
  return (
    <div className="frame-header">
      <div className="header-items icon-block">
        <SupervisorAccountIcon />
      </div>
      <div className="header-items icon-block">
        <ChatBubbleIcon />
        <span className="alert-circle-icon"></span>
      </div>
      <div className="header-items date-block">1:00 PM</div>
      <div className="header-items icon-block">
        <AccountCircleIcon />
      </div>
    </div>
  );
}
