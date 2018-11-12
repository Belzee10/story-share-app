import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import HomeAdmin from "./HomeAdmin";
import Categories from "./back/Categories";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* admin routes */}
          <Route exact path="/admin" component={HomeAdmin} />
          <Route path="/admin/categories" component={Categories} />
          <Redirect from="*" to="/" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;
