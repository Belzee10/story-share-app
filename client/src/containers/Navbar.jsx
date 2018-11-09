import React, { Component } from "react";

import Logo from "../components/common/Logo";
import Button from "../components/common/Button";
import Links from "../components/Links";

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
                  <a href="#" className="d-inline-block">
                    <Logo height="45px" />
                  </a>
                </div>
                <div className="col-lg-4 col-6">
                  <ul className="user-info">
                    <li>
                      <Button buttonClass="btn-dark btn-sm">Get Started</Button>
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
