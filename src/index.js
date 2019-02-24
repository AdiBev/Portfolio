import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";

//styles import here
import Styles from "./styles/main.scss";
import "aos/dist/aos.css";

import { App } from "./app";

AOS.init();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
