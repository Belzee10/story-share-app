import React, { Component } from "react";
import { connect } from "react-redux";
import { createCategory } from "../../../actions/categoryActions";
import PropTypes from "prop-types";
import FormValidator from "../../../utiles/FormValidator";

import Button from "../../../components/common/Button";
import InvalidFeedback from "../../../components/common/InvalidFeedback";
import Alert from "../../../components/common//Alert";

class CreateCategory extends Component {
  constructor(props) {
    super(props);
    this.validator = new FormValidator([
      {
        field: "name",
        method: "isEmpty",
        validWhen: false,
        message: "Name is required."
      }
    ]);
    this.state = {
      name: "",
      validation: this.validator.valid(),
      showAlert: false
    };
    this.submitted = false;
    this.timer = null;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.afterSubmit = this.afterSubmit.bind(this);
    this.handleTimeOut = this.handleTimeOut.bind(this);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;
    if (validation.isValid) {
      const category = {
        name: this.state.name
      };
      this.props.createCategory(category);
      this.afterSubmit();
      this.submitted = false;
    }
  }

  handleTimeOut() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.timer = setTimeout(() => {
      this.setState({
        showAlert: false
      });
    }, 3000);
  }

  afterSubmit() {
    this.setState(
      prevState => {
        return { showAlert: (prevState.showAlert = true), name: "" };
      },
      () => {
        this.handleTimeOut();
      }
    );
  }

  render() {
    const { name, showAlert } = this.state;
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
                  <h2 className="mb-3">Create Category</h2>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      value={name}
                      onChange={this.onChange}
                      type="text"
                      id="name"
                      name="name"
                      className={`form-control ${validation.name.isInvalid &&
                        "is-invalid"}`}
                    />
                    <InvalidFeedback>{validation.name.message}</InvalidFeedback>
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
                      buttonUrl="/admin/categories"
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
          <div className="col-lg-6">
            {showAlert && (
              <Alert alertType="success">Category created successfuly!</Alert>
            )}
          </div>
        </div>
      </div>
    );
  }
}

CreateCategory.propTypes = {
  createCategory: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  message: state.categories.message
});

export default connect(
  mapStateToProps,
  { createCategory }
)(CreateCategory);
