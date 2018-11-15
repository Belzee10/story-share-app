import React, { Component } from "react";
import { Link as Enlace } from "react-router-dom";

import Logo from "../common/Logo";
import Link from "./Link";

const links = [
  {
    id: 1,
    name: "All"
  },
  {
    id: 2,
    name: "Photography"
  },
  {
    id: 3,
    name: "Web development"
  },
  {
    id: 4,
    name: "Web design"
  },
  {
    id: 5,
    name: "Nature"
  },
  {
    id: 6,
    name: "More"
  }
];
class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onCollapse = this.onCollapse.bind(this);
    this.navbarClass = this.navbarClass.bind(this);
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
            {links.map(link => (
              <Link link={link} key={link.id} />
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

export default Links;
