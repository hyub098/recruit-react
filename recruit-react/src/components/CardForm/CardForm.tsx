import { FC, useState } from "react";
import { TextField } from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Button from "@mui/material/Button";
import "./CardForm.css";

const CardForm: FC = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [creditCard, setCreditCard] = useState<null | number>(null);
  const [cvc, setCVC] = useState<null | number>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [creditCardErr, setCreditCardErr] = useState(false);
  const [cvcErr, setCvcErr] = useState(false);
  const [dateErr, setDateErr] = useState(false);

  const onSubmit = () => {
    let hasErr = false;
    if (creditCard == null) {
      setCreditCardErr(true);
      hasErr = true;
    }
    if (cvc == null) {
      setCvcErr(true);
      hasErr = true;
    }
    if (date == null) {
      setDateErr(true);
      hasErr = true;
    }

    if (hasErr) {
      setHasSubmitted(false);
      return;
    }

    console.log(creditCard);
    console.log(cvc);
    console.log(date);

    setCreditCardErr(false);
    setCvcErr(false);
    setDateErr(false);
    setHasSubmitted(true);
  };

  return (
    <div className="cardForm-container">
      <h2 className="cardForm-welcome">Welcome Peter</h2>
      {hasSubmitted ? (
        <h3>Submitted successfully.</h3>
      ) : (
        <h3>Please enter the details.</h3>
      )}

      <form noValidate autoComplete="off">
        <div className="cardForm-CreditCardContainer">
          <TextField
            className="fullWidth"
            aria-label="Credit card number"
            id="creditCardNumber"
            label="Credit card number"
            variant="outlined"
            type="number"
            name="creditCardNumber"
            fullWidth
            error={creditCardErr}
            onChange={(e) => setCreditCard(+e.target.value)}
          />
        </div>
        <div className="cardForm-CvcDateContainer">
          <div className="cardForm-Cvc">
            <TextField
              aria-label="CVC"
              id="cvcNumber"
              label="CVC"
              variant="outlined"
              type="number"
              error={cvcErr}
              onChange={(e) => setCVC(+e.target.value)}
            />
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                aria-label="expiry date"
                label="expiry"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={dateErr}
                    onChange={(e) => setDate(new Date(e.target.value))}
                  />
                )}
              />
            </LocalizationProvider>
          </div>
        </div>
        <Button
          aria-label="Submit button"
          className="cardForm-submitContainer"
          variant="outlined"
          onClick={onSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CardForm;
