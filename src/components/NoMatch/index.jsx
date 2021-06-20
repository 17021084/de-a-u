import React from "react";
import "./styles.scss";
import Header from "../UI/Header";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div className="no-match">
      <Header />
      <div className="no-match__content">
        <h2>Invalid video call name </h2>
        <div className="action-btn">
          <Link className="btn green" to="/">
            Return to Home page
          </Link>
        </div>
      </div>
    </div>
  );
}
