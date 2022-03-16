import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders register card form", () => {
  render(<App />);
  const linkElement = screen.getByText("Register card form");
  expect(linkElement).toBeInTheDocument();
});
