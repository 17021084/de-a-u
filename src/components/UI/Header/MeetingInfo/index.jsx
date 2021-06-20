import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./styles.scss";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Button } from "@material-ui/core";
import FileCopyIcon from '@material-ui/icons/FileCopy';


export default function MeetingInfo() {
  return (
    <div className="meeting-info-block">
      <div className="meeting-header">
        <h3> Your meeting's ready</h3>
        <CloseIcon></CloseIcon>
      </div>
      <Button variant="contained" color="primary">
        <PersonAddIcon/>  Add other
      </Button>

      <p className="info-text"> Or share this meeting url with others you want in the meeting </p>
      {/* <p> 以下のURLをコピーして、参加者に送ってください。 </p> */}
      <div className="meet-link">
          <span>Random URL  </span>
          <FileCopyIcon></FileCopyIcon>
      </div>

    </div>
  );
}
