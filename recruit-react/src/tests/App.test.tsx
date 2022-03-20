import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("renders register card form", () => {
  render(<App />);
  const welcomeText = screen.getByText("Welcome Peter");
  expect(welcomeText).toBeInTheDocument();
});

test("toggle page content on menu button click", () => {
  render(<App />);
  const welcomeText = screen.getByText("Welcome Peter");
  expect(welcomeText).toBeInTheDocument();

  const [menuBtn] = screen.getAllByTestId("menu-button");
  userEvent.click(menuBtn);

  const menuPageText = screen.getByText("This is menu content");
  expect(menuPageText).toBeInTheDocument();
});
