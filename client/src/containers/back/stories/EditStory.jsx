import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { connect } from "react-redux";
import { fetchStory, updateStory } from "../../../actions/storyActions";
import { fetchCategories } from "../../../actions/categoryActions";
import FormValidator from "../../../utiles/FormValidator";

import Button from "../../../components/common/Button";
import InvalidFeedback from "../../../components/common/InvalidFeedback";

class EditStory extends Component {
  constructor(props) {
    super(props);
    this.validator = new FormValidator([
      {
        field: "title",
        method: "isEmpty",
        validWhen: false,
        message: "Title is required."
      }
    ]);
    this.state = {
      title: "",
      content: "",
      categories: null,
      author: "5bfc16f382428732d6c2f3a2",
      validation: this.validator.valid()
    };
    this.submitted = false;
    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setDefaultState = this.setDefaultState.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchStory(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.story !== nextProps.story) {
      this.setDefaultState(nextProps.story);
    }
  }

  getCategories(categories) {
    const options = [];
    categories.forEach(elem => {
      const category = {
        value: elem._id,
        label: elem.name
      };
      options.push(category);
    });
    return options;
  }

  setDefaultState(story) {
    this.setState({
      title: story.title,
      content: story.content,
      categories: this.getCategories(story.categories)
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onChangeSelect = categories => {
    this.setState({ categories });
  };

  onSubmit(e) {
    e.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;
    if (validation.isValid) {
      const categories = [];
      if (this.state.categories) {
        this.state.categories.forEach(elem => {
          categories.push(elem.value);
        });
      }
      const story = {
        title: this.state.title,
        content: this.state.content,
        categories: categories,
        author: this.state.author
      };
      this.props.updateStory(this.props.match.params.id, story);
      this.submitted = false;
    }
  }

  render() {
    const { title, content, categories } = this.state;
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <h2 className="mb-3">Edit Story</h2>
                  <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                      value={title}
                      onChange={this.onChange}
                      type="text"
                      id="title"
                      name="title"
                      className={`form-control ${validation.title.isInvalid &&
                        "is-invalid"}`}
                    />
                    <InvalidFeedback>
                      {validation.title.message}
                    </InvalidFeedback>
                  </div>
                  <div className="form-group">
                    <label htmlFor="content">
                      Content:{" "}
                      <small className="text-secondary">(optional)</small>
                    </label>
                    <textarea
                      value={content}
                      onChange={this.onChange}
                      id="content"
                      name="content"
                      className={`form-control`}
                      rows="4"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="categories">
                      Categories:{" "}
                      <small className="text-secondary">(optional)</small>
                    </label>
                    <Select
                      isMulti={true}
                      value={categories}
                      onChange={this.onChangeSelect}
                      options={this.getCategories(this.props.categories)}
                    />
                  </div>
                  <div className="form-group">
                    <Button
                      disabled={!validation.isValid && true}
                      buttonClass="btn-primary"
                      buttonType="submit"
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      buttonUrl="/admin/stories"
                      buttonClass="btn-secondary"
                      buttonType="link"
                    >
                      Go back
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditStory.propTypes = {
  updateStory: PropTypes.func.isRequired,
  fetchStory: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  story: state.stories.story,
  categories: state.categories.items,
  message: state.stories.message
});

export default connect(
  mapStateToProps,
  { fetchStory, updateStory, fetchCategories }
)(EditStory);
