import React from "react";
import "./styles.scss";
import { Button } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from '@material-ui/icons/MicOff';
import VideocamIcon from "@material-ui/icons/Videocam";
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import CallEndIcon from "@material-ui/icons/CallEnd";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";

export default function CallPageFooter() {
  return (
    <div className="footer-item">
      <div className="left-item">
        <div className="icon-block">MEETING DETAILS ^</div>
      </div>

      <div className="center-item">
        <div className="icon-block">
          <MicIcon className="icon" fontSize="large" />
        </div>
        <div className="icon-block">
          <VideocamIcon className="icon" fontSize="large" />
        </div>
        <div className="icon-block">
          <CallEndIcon className="icon" color="error" fontSize="large" />
        </div>
      </div>

      <div className="right-item">
        <ScreenShareIcon />
       <div> SHARE SCREEN</div>
      </div>
    </div>
  );
}
