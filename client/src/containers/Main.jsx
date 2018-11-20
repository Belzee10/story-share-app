import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import HomeAdmin from "./HomeAdmin";
import Categories from "./back/categories/Categories";
import Users from "./back/users/Users";
import Stories from "./back/stories/Stories";
import CreateCategory from "./back/categories/CreateCategory";
import CreateUser from "./back/users/CreateUser";

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
          {/* admin routes */}
          <Route path="/admin/categories/new" component={CreateCategory} />
          <Route path="/admin/categories" component={Categories} />

          <Route path="/admin/users/new" component={CreateUser} />
          <Route path="/admin/users" component={Users} />

          <Route path="/admin/stories" component={Stories} />

          <Route exact path="/admin" component={HomeAdmin} />
          {/* front routes */}
          <Route exact path="/" component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;
