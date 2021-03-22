import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddMemeForm from "./AddMemeForm";

let memeForm;

describe("<AddMemeForm /> basics", () => {
  beforeEach(() => {
    memeForm = render(<AddMemeForm />);
  });

  it("renders", () => {
    expect(memeForm).toBeTruthy();
  });
  it("matches snapshot", () => {
    expect(memeForm.asFragment()).toMatchSnapshot();
  });
});

it("updates state with topText input", () => {
  // mount form and mock addMeme
  const mockFn = jest.fn();
  const { getByText } = render(<AddMemeForm add={mockFn} />);

  fireEvent.click(getByText("Generate Meme!"));

  expect(mockFn).toHaveBeenCalled();
});
