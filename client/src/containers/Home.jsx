import React, { Component } from "react";

import Stories from "./Stories";
import PopularStories from "./PopularStories";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className="container">
        <section id="stories">
          <div className="row">
            <Stories />
            <PopularStories />
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
