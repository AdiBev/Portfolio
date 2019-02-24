import React, { Component, Fragment } from "react";

import { Contact } from "./contact";
import { AboutPage } from "./about_page";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <div id="intro">
            <h1>
              <span className="tracking-in-expand">Hi,</span>{" "}
              <span className="text-focus-in">I'm Aditya!</span>
            </h1>
            <p>Front End Developer | React Developer</p>
            <Contact />
          </div>
        </header>
      </Fragment>
    );
  }
}
