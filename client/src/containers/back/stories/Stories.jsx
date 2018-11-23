import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchStories, deleteStory } from "../../../actions/storyActions";

import List from "../../../components/common/List";
import Button from "../../../components/common/Button";
import Count from "../../../components/common/Count";

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.countMessage = this.countMessage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchStories();
    console.log(this.props.stories);
  }

  countMessage() {
    return this.props.stories.length === 1
      ? "Story founded"
      : "Stories founded";
  }

  handleDelete(item) {
    this.props.deleteStory(item._id);
  }

  render() {
    const { stories, keys } = this.props;
    return (
      <div className="container">
        <div className="d-flex justify-content-between mb-2">
          <Button
            buttonUrl="/admin/stories/new"
            buttonClass="btn-dark"
            buttonType="link"
          >
            New Story
          </Button>
          <div>
            <Count value={stories.length}>{this.countMessage()}</Count>
          </div>
        </div>
        <List handleDelete={this.handleDelete} items={stories} keys={keys} />
      </div>
    );
  }
}

Stories.propTypes = {
  fetchStories: PropTypes.func.isRequired,
  deleteStory: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  stories: state.stories.items,
  keys: state.stories.keys
});

export default connect(
  mapStateToProps,
  { fetchStories, deleteStory }
)(Stories);
