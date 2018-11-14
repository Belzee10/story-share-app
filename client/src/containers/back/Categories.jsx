import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../../actions/categoryActions";

import List from "../../components/common/List";
import Button from "../../components/common/Button";
import Count from "../../components/common/Count";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories, keys } = this.props;
    return (
      <div>
        <div className="container">
          <div className="d-flex justify-content-between mb-2">
            <Button buttonUrl="/" buttonClass="btn-dark" buttonType="link">
              New Category
            </Button>
            <div>
              <Count value={categories.length}>categories founded</Count>
            </div>
          </div>
          <List items={categories} keys={keys} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.items,
  keys: state.categories.keys
});

export default connect(
  mapStateToProps,
  { fetchCategories }
)(Categories);
