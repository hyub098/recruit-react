import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../components/Header/Header";

test("renders header and toggel title on click", () => {
  const pageHandler = (value: boolean): void => {};
  render(<Header pageHandler={pageHandler} />);

  const titleEle = screen.getByText("Register card form");
  expect(titleEle).toBeInTheDocument();

  const [menuBtn] = screen.getAllByTestId("menu-button");

  userEvent.click(menuBtn);

  const menuEle = screen.getByText("Menu");
  expect(menuEle).toBeInTheDocument();
});
