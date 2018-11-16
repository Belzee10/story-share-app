import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HomeAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container home-admin text-center">
        <h1>Welcome Admin</h1>
        <div className="manage-links">
          <Link className="btn btn-light" to="/admin/categories">
            <FontAwesomeIcon icon="check" />
            Manage Categories
          </Link>
          <Link className="btn btn-light" to="/admin/stories">
            <FontAwesomeIcon icon="list" />
            Manage Stories
          </Link>
          <Link className="btn btn-light" to="/admin/users">
            <FontAwesomeIcon icon="user" />
            Manage Users
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeAdmin;
