import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../../actions/userActions";
import PropTypes from "prop-types";
import FormValidator from "../../../utiles/FormValidator";

import Button from "../../../components/common/Button";
import InvalidFeedback from "../../../components/common/InvalidFeedback";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.validator = new FormValidator([
      {
        field: "fullName",
        method: "isEmpty",
        validWhen: false,
        message: "Full Name is required."
      },
      {
        field: "email",
        method: "isEmpty",
        validWhen: false,
        message: "Email is required."
      },
      {
        field: "email",
        method: "isEmail",
        validWhen: true,
        message: "This is not a valid email."
      },
      {
        field: "password",
        method: "isEmpty",
        validWhen: false,
        message: "Password is required."
      },
      {
        field: "password",
        method: "isLength",
        args: [{ min: 3 }],
        validWhen: true,
        message: "Password should have more than 3 characters."
      },
      {
        field: "role",
        method: "isEmpty",
        validWhen: false,
        message: "Role is required."
      }
    ]);
    this.state = {
      fullName: "",
      avatar: "avatar.png",
      email: "",
      password: "",
      role: "",
      validation: this.validator.valid()
    };
    this.submitted = false;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.afterSubmit = this.afterSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  afterSubmit() {
    this.setState(prevState => {
      return {
        fullName: "",
        email: "",
        password: "",
        role: ""
      };
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;
    if (validation.isValid) {
      const user = {
        fullName: this.state.fullName,
        avatar: this.state.avatar,
        email: this.state.email,
        password: this.state.password,
        role: this.state.role
      };
      this.props.createUser(user);
      this.afterSubmit();
      this.submitted = false;
    }
  }

  render() {
    const { fullName, email, password, role } = this.state;
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <h2 className="mb-3">Create User</h2>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                      value={fullName}
                      onChange={this.onChange}
                      type="text"
                      id="fullName"
                      name="fullName"
                      className={`form-control ${validation.fullName
                        .isInvalid && "is-invalid"}`}
                    />
                    <InvalidFeedback>
                      {validation.fullName.message}
                    </InvalidFeedback>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      value={email}
                      onChange={this.onChange}
                      type="email"
                      id="email"
                      name="email"
                      className={`form-control ${validation.email.isInvalid &&
                        "is-invalid"}`}
                    />
                    <InvalidFeedback>
                      {validation.email.message}
                    </InvalidFeedback>
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      value={password}
                      onChange={this.onChange}
                      type="password"
                      id="password"
                      name="password"
                      className={`form-control ${validation.password
                        .isInvalid && "is-invalid"}`}
                    />
                    <InvalidFeedback>
                      {validation.password.message}
                    </InvalidFeedback>
                  </div>

                  <div className="form-group">
                    <label htmlFor="role">Role:</label>
                    <select
                      value={role}
                      onChange={this.onChange}
                      name="role"
                      id="role"
                      className={`form-control ${validation.role.isInvalid &&
                        "is-invalid"}`}
                    >
                      <option value="">--User role--</option>
                      <option value="member">Member</option>
                      <option value="admin">Admin</option>
                    </select>
                    <InvalidFeedback>{validation.role.message}</InvalidFeedback>
                  </div>

                  <div className="form-group">
                    <Button
                      disabled={!validation.isValid && true}
                      buttonClass="btn-primary"
                      buttonType="submit"
                    >
                      Create
                    </Button>{" "}
                    <Button
                      buttonUrl="/admin/users"
                      buttonClass="btn-secondary"
                      buttonType="link"
                    >
                      Go back
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateUser.propTypes = {
  createUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  message: state.users.message
});

export default connect(
  mapStateToProps,
  { createUser }
)(CreateUser);
