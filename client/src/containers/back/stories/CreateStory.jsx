import React, { Component } from "react";

class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      coverImage: "cover-image.png",
      content: "",
      categories: [],
      author: "5bf43ba3eeed9f2644c99832"
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
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
                    <select
                      multiple={true}
                      value={["B", "C"]}
                      onChange={this.onChange}
                      name="categories"
                      id="categories"
                      className={`form-control`}
                    >
                      <option value="">--Categories--</option>
                      <option value="">Category 1</option>
                      <option value="">Category 2</option>
                    </select>
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

export default CreateStory;
