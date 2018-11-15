import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUsers, deleteUser } from "../../actions/userActions";

import List from "../../components/common/List";
import Button from "../../components/common/Button";
import Count from "../../components/common/Count";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.countMessage = this.countMessage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  countMessage() {
    return this.props.users.length === 1 ? "User founded" : "Users founded";
  }

  handleDelete(item) {
    this.props.deleteUser(item._id);
  }

  render() {
    const { users, keys } = this.props;
    return (
      <div className="container">
        <div className="d-flex justify-content-between mb-2">
          <Button buttonUrl="/" buttonClass="btn-dark" buttonType="link">
            New User
          </Button>
          <div>
            <Count value={users.length}>{this.countMessage()}</Count>
          </div>
        </div>
        <List handleDelete={this.handleDelete} items={users} keys={keys} />
      </div>
    );
  }
}

Users.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.users.items,
  keys: state.users.keys
});

export default connect(
  mapStateToProps,
  { fetchUsers, deleteUser }
)(Users);
