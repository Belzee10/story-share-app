import React from "react";
import { mount, shallow, render } from "enzyme";

import Thead from "../common/Thead";

const array = ["name", "last name"];

function excludeKeys(arr) {
  return arr;
}

describe("Thead tests", () => {
  const wrapper = shallow(<Thead excludeKeys={excludeKeys(array)} />);
  it("Render without crashing", () => {
    expect(wrapper);
  });
  it("Should render 4 ths", () => {
    expect(wrapper.find("th").length).toBe(4);
  });
  it("The ths should by strings", () => {
    const strs = wrapper
      .find("th")
      .filterWhere(n => typeof n.type() === "string");
    expect(strs.length).toBe(4);
  });
  it("Should be 4 ths in Uppercase", () => {
    const ths = wrapper.find("th").filterWhere(
      n =>
        n.text().charAt(0) ===
        n
          .text()
          .charAt(0)
          .toUpperCase()
    );
    expect(ths.length).toBe(4);
  });
});
