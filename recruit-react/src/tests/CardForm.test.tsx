import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CardForm from "../components/CardForm/CardForm";

test("renders all elements", () => {
  render(<CardForm />);

  const [creditCardField] = screen.getAllByLabelText("Credit card number");
  expect(creditCardField).toBeInTheDocument();

  const [cvcField] = screen.getAllByLabelText("CVC");
  expect(cvcField).toBeInTheDocument();

  const [dateField] = screen.getAllByLabelText("expiry");
  expect(dateField).toBeInTheDocument();

  const submitBtn = screen.getByText("Submit");
  expect(submitBtn).toBeInTheDocument();
});

test("calls onSubmit when submit button clicks", () => {
  render(<CardForm />);

  const enterDetailsText = screen.getByText("Please enter the details.");
  expect(enterDetailsText).toBeInTheDocument();

  const creditCardField = screen.getByRole("spinbutton", {
    name: "Credit card number",
  });

  const cvcField = screen.getByRole("spinbutton", {
    name: "CVC",
  });

  const dateField = screen.getByRole("textbox", {
    name: "Choose date",
  });

  fireEvent.change(creditCardField, { target: { value: "4111111111111111" } });
  fireEvent.change(cvcField, { target: { value: "230" } });
  fireEvent.change(dateField, { target: { value: new Date() } });

  const submitBtn = screen.getByText("Submit");
  userEvent.click(submitBtn);

  const submittedText = screen.getByText("Submitted successfully.");
  expect(submittedText).toBeInTheDocument();
});
