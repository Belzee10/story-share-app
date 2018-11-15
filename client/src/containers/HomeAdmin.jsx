import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="text-center">
        <h1>Admin Page</h1>
        <Link to="/admin/categories">Go to Categories</Link> |{" "}
        <Link to="/admin/users">Go to Users</Link> |{" "}
        <Link to="/admin/stories">Go to Stories</Link>
      </div>
    );
  }
}

export default HomeAdmin;
