import React from "react";
import { mount, shallow, render } from "enzyme";

import Button from "../common/Button";

describe("Button tests", () => {
  const wrapper = shallow(
    <Button buttonClass="btn-secondary" buttonType="link" buttonUrl="/">
      Button text
    </Button>
  );
  it("Render without crashing", () => {
    expect(wrapper);
  });
  it("Should render a Link", () => {
    expect(wrapper.find("Link").length).toBe(1);
  });
  it("Should have a class: btn btn-secondary btn-sm", () => {
    const wrapper = shallow(
      <Button buttonClass="btn-secondary" buttonType="button">
        Button text
      </Button>
    );
    expect(wrapper.hasClass("btn btn-secondary btn-sm")).toEqual(true);
  });
  it("Should be disabled", () => {
    const wrapper = shallow(
      <Button buttonClass="btn-secondary" buttonType="submit" disabled={true}>
        Button text
      </Button>
    );
    expect(wrapper.find("button").props()["disabled"]).toBe(true);
  });
});
