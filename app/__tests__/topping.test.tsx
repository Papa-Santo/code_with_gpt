import { render, fireEvent } from "@testing-library/react";
import Topping from "../components/Topping";
import "@testing-library/jest-dom";

test("renders the Topping component", () => {
  const { getByText } = render(<Topping />);
  const pepperoniButton = getByText("pepperoni");
  const greenPepperButton = getByText("green pepper");
  const sausageButton = getByText("sausage");

  expect(pepperoniButton).toBeInTheDocument();
  expect(greenPepperButton).toBeInTheDocument();
  expect(sausageButton).toBeInTheDocument();
});

test("selects and deselects topping correctly", () => {
  const { getByText, getByTestId, queryByTestId } = render(<Topping />);
  const pepperoniButton = getByText("pepperoni");
  const greenPepperButton = getByText("green pepper");

  fireEvent.click(pepperoniButton);
  expect(getByTestId("pepperoni")).toBeInTheDocument();

  fireEvent.click(greenPepperButton);
  expect(getByTestId("pepperoni")).toBeInTheDocument();
  expect(getByTestId("green pepper")).toBeInTheDocument();

  fireEvent.click(pepperoniButton);
  expect(queryByTestId("pepperoni")).toBeNull();
});
