import React from "react";
import { Route, Switch } from "react-router-dom";

import { Navbar } from "./nav_bar";
import { AboutPage } from "./about_page";
import Portfolio from "./portfolio";
import Home from "./home";

export const App = () => {
  return (
    <div className="wrapper">
      <main>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={AboutPage} />
          <Route path="/Portfolio" component={Portfolio} />
        </Switch>
      </main>
    </div>
  );
};
