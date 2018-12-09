import React, { Component } from "react";

import image from "../assets/images/two.jpg";
import image3 from "../assets/images/three.jpg";

class PopularStories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-lg-4 col-md-6">
        <div className="side">
          <h4 className="text-uppercase text-center mb-4">Popular Stories</h4>
          <div className="top-stories">
            <div className="row">
              <div className="col-5">
                <div className="story-img">
                  <img src={image} alt="" className="img-thumbnail" />
                </div>
              </div>
              <div className="col-7">
                <p>The key to have a successful technical interview</p>
                <span className="d-block text-body">Johnny Vigo</span>
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <div className="story-img">
                  <img src={image} alt="" className="img-thumbnail" />
                </div>
              </div>
              <div className="col-7">
                <p>The key to have a successful technical interview</p>
                <span className="d-block text-body">Johnny Vigo</span>
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <div className="story-img">
                  <img src={image3} alt="" className="img-thumbnail" />
                </div>
              </div>
              <div className="col-7">
                <p>The key to have a successful technical interview</p>
                <span className="d-block text-body">Johnny Vigo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularStories;
