import React from "react";
import { shallow } from "enzyme";

import Home from "../Home";

describe("Home Test", () => {
  it("It should render <p> tag with class introText", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(".introText")).toHaveLength(1);
  });
});
