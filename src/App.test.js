import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCameWithSpaces } from "./App";

test("button has correct initial color, and updates when clicked", () => {
  render(<App />);

  //find an element with a role of button and text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  //expect the backgroud color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  //click button
  fireEvent.click(colorButton);

  //expect the background color to be MidnightBlue
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  //expect the button text to be 'Change to Medium Violet Red'
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("checkbox has correct initial unchecked, and updates color button to disabled when true", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox", { checked: false });
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();
});

test("checkbox is checked button, button should be disabled", () => {
  render(<App />);

  const button = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disabled button" });

  expect(button).toBeEnabled();

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("disabled button and expect to have a gray color", () => {
  render(<App />);

  const button = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disabled button" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(button);

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCameWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCameWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCameWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
