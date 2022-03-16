import React from "react";
import { FormControl, TextField } from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Button from "@mui/material/Button";
import "./CardForm.css";

const CardForm: React.FC = () => {
  const [date, setDate] = React.useState(null);
  const [creditCard, setCreditCard] = React.useState<null | number>(null);
  const [cvc, setCVC] = React.useState<null | number>(null);

  const onSubmit = () => {
    console.log(creditCard);
    console.log(cvc);
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
          onChange={(e) => setCreditCard(+e.target.value)}
        />
        <div className="cardForm-CvcDateContainer">
          <TextField
            id="outlined-basic"
            label="CVC"
            variant="outlined"
            type="number"
            onChange={(e) => setCVC(+e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="expiry"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
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
