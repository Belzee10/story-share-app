import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStories } from "../actions/storyActions";

import Story from "../components/story/Story";

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    const { stories } = this.props;
    return (
      <section id="stories">
        <div className="row">
          <div className="col-lg-8 col-md-6">
            {stories.map(story => (
              <Story story={story} key={story._id} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  stories: state.stories.items
});

export default connect(
  mapStateToProps,
  { fetchStories }
)(Stories);
