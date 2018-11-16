import React, { Component } from "react";
import { connect } from "react-redux";
import { createCategory } from "../../../actions/categoryActions";
import PropTypes from "prop-types";

import Button from "../../../components/common/Button";
import InvalidFeedback from "../../../components/common/InvalidFeedback";

class CreateCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  validate(element) {
    const { name, value } = element;
    switch (name) {
      case "name":
        return {
          name: value.length === 0 ? `${name} is required` : false
        };
      default:
        return;
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.validate(e.target);
  }

  onSubmit(e) {
    e.preventDefault();
    const category = {
      name: this.state.name
    };
    this.props.createCategory(category);
  }

  render() {
    const { name } = this.state;
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
                      className="form-control is-invalid"
                    />
                    {/* <div className="invalid-feedback">Looks good!</div> */}
                  </div>
                  <div className="form-group">
                    <Button buttonClass="btn-primary" buttonType="submit">
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
