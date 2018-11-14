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
        <Link to="/admin/categories">Go to Categories</Link>
      </div>
    );
  }
}

export default HomeAdmin;
