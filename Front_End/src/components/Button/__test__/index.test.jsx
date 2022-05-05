import React from "react";
import Button from "../index";
import renderer from "react-test-renderer";
import "jest-styled-components";

describe("Button tests", () => {
  it("button works", () => {
    const button = renderer.create(<Button />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it("testing with color", () => {
    const redButton = renderer.create(<Button buttonColor={"red"} />).toJSON();
    expect(redButton).toMatchSnapshot();
    const blueButton = renderer.create(<Button buttonColor={"red"} />).toJSON();
    expect(blueButton).toMatchSnapshot();
    const noColorButton = renderer.create(<Button />).toJSON();
    expect(noColorButton).toMatchSnapshot();
  });
});
