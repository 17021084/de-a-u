import React from "react";
import CallPageFooter from "../UI/Header/CallPageFooter";
import CallPageHeader from "../UI/Header/CallPageHeader";
import MeetingInfo from "../UI/Header/MeetingInfo";
import Messenger from "../UI/Header/Messenger";
import "./styles.scss";

export default function CallPage() {
  return (
    <div className="callpage-container">
      <video className="video-container" src="" controls></video>
      <CallPageHeader />
      <MeetingInfo />
      <Messenger />
      <CallPageFooter />
    </div>
  );
}
