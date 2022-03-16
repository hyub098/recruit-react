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
        <TextField
          className="cardForm-CreditCardContainer"
          id="outlined-basic"
          label="Credit card number"
          variant="outlined"
          type="number"
          error={creditCardErr}
          onChange={(e) => setCreditCard(+e.target.value)}
        />
        <div className="cardForm-CvcDateContainer">
          <TextField
            id="outlined-basic"
            label="CVC"
            variant="outlined"
            type="number"
            error={cvcErr}
            onChange={(e) => setCVC(+e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
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
      </form>

      <Button
        className="cardForm-submitContainer"
        variant="outlined"
        onClick={onSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default CardForm;
