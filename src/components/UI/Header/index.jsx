import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import ErrorIcon from "@material-ui/icons/Error";
import logo from "../../../public/afterfit-logo.png";
import "./styles.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span className="help-text">Meeting Service</span>
      </div>
      <div className="action-btn">
          <SettingsIcon />
          <HelpIcon />
          <ErrorIcon />
        </div>
        
    </div>
  );
}
