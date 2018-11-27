import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchCategory,
  updateCategory
} from "../../../actions/categoryActions";
import FormValidator from "../../../utiles/FormValidator";

import Button from "../../../components/common/Button";
import InvalidFeedback from "../../../components/common/InvalidFeedback";

class EditCategory extends Component {
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
      validation: this.validator.valid()
    };
    this.submitted = false;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setDefaultState = this.setDefaultState.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategory(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.category !== nextProps.category) {
      this.setDefaultState(nextProps.category);
    }
  }

  setDefaultState(category) {
    this.setState({
      name: category.name
    });
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
      this.props.updateCategory(this.props.match.params.id, category);
      this.submitted = false;
    }
  }

  render() {
    const { name } = this.state;
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
                  <h2 className="mb-3">Edit Category</h2>
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
                      Edit
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

EditCategory.propTypes = {
  updateCategory: PropTypes.func.isRequired,
  fetchCategory: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  category: state.categories.category,
  message: state.categories.message
});

export default connect(
  mapStateToProps,
  { fetchCategory, updateCategory }
)(EditCategory);
