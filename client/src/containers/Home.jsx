import React, { Component } from "react";

import Stories from "./Stories";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className="container">
        <Stories />
      </main>
    );
  }
}

export default Home;
