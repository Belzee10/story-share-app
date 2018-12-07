import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../components/common/Logo";
import Button from "../components/common/Button";
import Links from "../components/common/Links";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="container-fluid pl-0 pr-0">
        <div className="top-header d-none d-lg-block">
          <div
            className="container-fluid pl-0 pr-0"
            style={{ padding: "30px 0" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-4 offset-4 text-center">
                  <Link to="/" className="d-inline-block">
                    <Logo height="45px" />
                  </Link>
                </div>
                <div className="col-lg-4 col-6">
                  <ul className="user-info">
                    <li>
                      <Link to="/admin" className="btn btn-link">
                        Go to Admin
                      </Link>
                    </li>
                    <li>
                      <Button
                        buttonUrl="/"
                        buttonType="link"
                        buttonClass="btn-dark"
                      >
                        Get Started
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Links />
        </div>
      </header>
    );
  }
}

export default Navbar;
