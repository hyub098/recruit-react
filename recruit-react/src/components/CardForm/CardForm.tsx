import React from "react";
import { TextField } from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Button from "@mui/material/Button";
import "./CardForm.css";

const CardForm: React.FC = () => {
  const [date, setDate] = React.useState(null);
  const [creditCard, setCreditCard] = React.useState<null | number>(null);
  const [cvc, setCVC] = React.useState<null | number>(null);

  const [creditCardErr, setCreditCardErr] = React.useState(false);
  const [cvcErr, setCvcErr] = React.useState(false);
  const [dateErr, setDateErr] = React.useState(false);

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
      return;
    }

    console.log(creditCard);
    console.log(cvc);

    setCreditCardErr(false);
    setCvcErr(false);
    setDateErr(false);
  };

  return (
    <div className="cardForm-container">
      <h2 className="cardForm-welcome">Welcome Peter</h2>

      <form noValidate autoComplete="off">
        <div className="cardForm-CreditCardContainer">
          <TextField
            className="fullWidth"
            aria-label="Credit card number"
            id="outlined-basic"
            label="Credit card number"
            variant="outlined"
            type="number"
            fullWidth
            error={creditCardErr}
            onChange={(e) => setCreditCard(+e.target.value)}
          />
        </div>
        <div className="cardForm-CvcDateContainer">
          <div></div>
          <div className="cardForm-Cvc">
            <TextField
              aria-label="CVC"
              id="outlined-basic"
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
                  <TextField {...params} error={dateErr} />
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
