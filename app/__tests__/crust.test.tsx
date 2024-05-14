import { render, fireEvent } from "@testing-library/react";
import Crust from "../components/Crust";
import "@testing-library/jest-dom";

test("renders the Crust component", () => {
  const { getByText } = render(<Crust />);
  const smallButton = getByText("Small");
  const mediumButton = getByText("Medium");
  const largeButton = getByText("Large");

  expect(smallButton).toBeInTheDocument();
  expect(mediumButton).toBeInTheDocument();
  expect(largeButton).toBeInTheDocument();
});

test("selects crust size correctly", () => {
  const { getByText } = render(<Crust />);
  const smallButton = getByText("Small");
  const mediumButton = getByText("Medium");
  const largeButton = getByText("Large");

  fireEvent.click(smallButton);
  expect(getByText("Selected Crust: small")).toBeInTheDocument();

  fireEvent.click(mediumButton);
  expect(getByText("Selected Crust: medium")).toBeInTheDocument();

  fireEvent.click(largeButton);
  expect(getByText("Selected Crust: large")).toBeInTheDocument();
});
