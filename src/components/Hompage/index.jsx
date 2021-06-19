import React from "react";
import Header from "../UI/Header";
import "./styles.scss";
import doraemon from "../../public/doraemon.gif";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import VideocamIcon from "@material-ui/icons/Videocam";
import { Button, TextField, InputAdornment } from "@material-ui/core";

export default function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <div className="left-side">
          <div className="content">
            <h2>Video meeting, Sharing screen, Emotion dectect,...</h2>
            <p>
              We rebuilt Google meet and add some plugins.
              <br />
              I hope you have a best experiences with it.
              <br />
              Thank you.
              <br />
              <br />
              <br />
              Google Meet でビデオ会議を作り直して、プラグインも追加します.
              <br />
              みなさんは楽しい会議を行してください。　
              <br />
              使用してくれてありがとうございます。
              <br />
            </p>
          </div>

          <div className="action-box">
            <Button variant="contained" color="primary" >
              <VideocamIcon></VideocamIcon>
              New Meeting
            </Button>
            <div className="action-input">
              <TextField
                id="input-with-icon-textfield"
                label="Enter a code or link"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyboardIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <Button color="primary">
              join
            </Button>
          </div>
        </div>

        <div className="right-side">
          <img alt="Doraemon-greeting" src={doraemon} />
        </div>
      </div>
    </div>
  );
}
