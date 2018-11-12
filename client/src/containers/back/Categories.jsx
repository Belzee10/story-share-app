import React, { Component } from "react";

import List from "../../components/common/List";
import Button from "../../components/common/Button";
import Count from "../../components/common/Count";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="d-flex justify-content-between mb-2">
            <Button buttonClass="btn-dark" buttonType="button">
              New Category
            </Button>
            <div>
              <Count value={22} /> categories founded
            </div>
          </div>
          <List />
        </div>
      </div>
    );
  }
}

export default Categories;
