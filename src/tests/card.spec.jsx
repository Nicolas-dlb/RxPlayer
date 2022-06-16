import React from "react";
import { render } from "@testing-library/react";
import Card from "../components/card/Card";

describe("Card", () => {
  let member;
  beforeEach(() => {
    member = {
      id: 0,
      name: "Jean",
      role: "Developer",
      image: "http://www.google.fr",
      timestamp: 38,
    };
  });
  it("Should render card", () => {
    const { getByTestId } = render(<Card type="member" content={member} />);
    const card = getByTestId("card");
    expect(card).toBeInTheDocument();
  });

  it("Should render content as member if the type is member", () => {
    const { getByTestId } = render(<Card type="member" content={member} />);
    const card = getByTestId("card");
    console.log(card);
    expect(card).toHaveClass("member-size");
  });
});
