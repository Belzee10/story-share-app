import React from "react";
import { mount, shallow, render } from "enzyme";

import Count from "../common/Count";

describe("Count tests", () => {
  it("Render without crashing", () => {
    const wrapper = shallow(<Count value={26} />);

    expect(wrapper);
  });
});
