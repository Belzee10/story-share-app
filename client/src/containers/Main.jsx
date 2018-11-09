import React, { Component } from "react";
// import { Route, Redirect, Switch } from "react-router-dom";

import Navbar from "./Navbar";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar />
      // <Switch>
      //   <Route path="/todos/new" component={TodosNew} />
      //   <Route path="/todos/:id" component={TodoShow} />
      //   <Route exact path="/" component={Todos} />
      //   <Redirect from="*" to="/" />
      // </Switch>
    );
  }
}

export default Main;
