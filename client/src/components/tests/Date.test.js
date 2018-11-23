import React from "react";
import { mount, shallow, render } from "enzyme";

import Date from "../common/Date";

describe("Date tests", () => {
  const date = "11-23-18";
  const wrapper = shallow(<Date date={date} />);
  it("Render without crashing", () => {
    expect(wrapper);
  });
});
