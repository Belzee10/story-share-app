import React from "react";
import { mount, shallow, render } from "enzyme";

import Count from "../common/Count";

describe("Count tests", () => {
  const wrapper = shallow(<Count value={26} />);
  it("Render without crashing", () => {
    expect(wrapper);
  });
});
