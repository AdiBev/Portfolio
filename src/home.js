import React, { Component } from "react";

import { Navbar } from "./nav_bar";

export default class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <header>
          <h1>Hi, I'm Aditya!</h1>
          <p>Front end devolper who likes building apps in React!</p>
        </header>
      </div>
    );
  }
}
