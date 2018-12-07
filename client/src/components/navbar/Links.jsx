import React, { Component } from "react";
import { Link as Enlace } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCategories } from "../../actions/categoryActions";

import Logo from "../common/Logo";
import Link from "./Link";

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onCollapse = this.onCollapse.bind(this);
    this.navbarClass = this.navbarClass.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  onCollapse() {
    const { collapse } = this.state;
    this.setState({
      collapse: !collapse
    });
  }

  navbarClass() {
    const { collapse } = this.state;
    let show = "";
    if (collapse) {
      show = "show";
    }
    return `collapse navbar-collapse ${show}`;
  }

  render() {
    const { categories } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-top border-bottom p-0">
        <Enlace to="/" className="navbar-brand d-lg-none">
          <Logo height="25px" />
        </Enlace>
        <button
          onClick={this.onCollapse}
          className="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.navbarClass()} id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item text-uppercase mr-3">
              <Enlace to="/" className="nav-link">
                All
              </Enlace>
            </li>
            {categories.map(item => (
              <Link item={item} key={item._id} />
            ))}
            <li className="nav-item d-lg-none">
              <Enlace to="/" className="btn btn-dark btn-sm">
                Sign Up
              </Enlace>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.items
});

export default connect(
  mapStateToProps,
  { fetchCategories }
)(Links);
