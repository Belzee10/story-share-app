import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { fetchCategories } from "../../../actions/categoryActions";

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" }
// ];

class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      coverImage: "cover-image.png",
      content: "",
      categories: null,
      author: "5bf43ba3eeed9f2644c99832"
    };
    this.onChange = this.onChange.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
    // this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onChangeSelect = categories => {
    this.setState({ categories });
    console.log(`Option selected:`, categories);
  };

  getCategories() {
    const options = [];
    this.props.categories.forEach(elem => {
      const category = {
        value: elem._id,
        label: elem.name
      };
      options.push(category);
    });
    return options;
  }

  render() {
    const { title, content, categories } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <form>
                  <h2 className="mb-3">Create Story</h2>
                  <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                      value={title}
                      onChange={this.onChange}
                      type="text"
                      id="title"
                      name="title"
                      className={`form-control`}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="content">Content:</label>
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
                    <label htmlFor="categories">Categories:</label>
                    <Select
                      isMulti={true}
                      value={categories}
                      onChange={this.onChangeSelect}
                      options={this.getCategories()}
                    />
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

const mapStateToProps = state => ({
  categories: state.categories.items
});

export default connect(
  mapStateToProps,
  { fetchCategories }
)(CreateStory);
