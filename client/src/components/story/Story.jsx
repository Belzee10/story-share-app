import React from "react";

import Title from "./Title";
import Image from "./Image";
import Content from "./Content";
import Author from "./Author";
import Date from "../common/Date";

const Story = props => {
  const { publishDate, title, content, author } = props.story;
  return (
    <div className="row story">
      <div className="col-md-5">
        <div className="story-img">
          <Image />
        </div>
      </div>
      <div className="col-md-7">
        <h5>
          <Date date={publishDate} />
        </h5>
        <h3>
          <Title>{title}</Title>
        </h3>
        <Content>{content}</Content>
        <span className="d-block text-body">
          <Author>{author.fullName}</Author>
        </span>
        <div className="likes d-block mt-2">
          <i className="jam jam-heart" />
          <span>34 Likes</span>
        </div>
      </div>
    </div>
  );
};

export default Story;
