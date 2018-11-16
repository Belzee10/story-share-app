import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchCategories,
  deleteCategory
} from "../../../actions/categoryActions";

import List from "../../../components/common/List";
import Button from "../../../components/common/Button";
import Count from "../../../components/common/Count";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.countMessage = this.countMessage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  countMessage() {
    return this.props.categories.length === 1
      ? "Category founded"
      : "Categories founded";
  }

  handleDelete(item) {
    this.props.deleteCategory(item._id);
  }

  render() {
    const { categories, keys } = this.props;
    return (
      <div className="container">
        <div className="d-flex justify-content-between mb-2">
          <Button buttonUrl="/" buttonClass="btn-dark" buttonType="link">
            New Category
          </Button>
          <div>
            <Count value={categories.length}>{this.countMessage()}</Count>
          </div>
        </div>
        <List handleDelete={this.handleDelete} items={categories} keys={keys} />
      </div>
    );
  }
}

Categories.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  categories: state.categories.items,
  keys: state.categories.keys
});

export default connect(
  mapStateToProps,
  { fetchCategories, deleteCategory }
)(Categories);
