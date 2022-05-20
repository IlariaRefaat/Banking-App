import * as React from "react";

import { Customer } from "../models/Customer";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTransfer } from "../firebase/transfers";
import { onCustomersUpdate } from "../firebase/customers";

export const TransferForm = () => {
  const [sender, setSender] = React.useState<Customer | null>(null);
  const [receiver, setReceiver] = React.useState<Customer | null>(null);
  const [amount, setAmount] = React.useState(0);
  const [customers, setCustomers] = React.useState<Customer[]>([]);

  React.useEffect(() => {
    onCustomersUpdate(setCustomers);
  }, []);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({
            sender,
            receiver,
            amount,
          });
          if (sender !== null && receiver !== null && amount > 0) {
            createTransfer(sender, receiver, amount);
          } else {
            console.log("error, data is not correct");
          }
        }}
      >
        <Autocomplete
          disablePortal
          id="sender-autocomplete"
          options={customers}
          sx={{ width: 300, marginTop: 2 }}
          renderInput={(params) => <TextField {...params} label="Sender" />}
          getOptionLabel={(customer) => customer.name}
          onChange={(e, selectedCustomer) => {
            setSender(selectedCustomer);
            if (
              selectedCustomer !== null &&
              selectedCustomer.currentBalance < amount
            ) {
              setAmount(selectedCustomer.currentBalance);
            }
          }}
          value={sender}
        />
        <Autocomplete
          disablePortal
          id="receiver-autocomplete"
          options={customers}
          sx={{ width: 300, marginTop: 2 }}
          renderInput={(params) => <TextField {...params} label="Receiver" />}
          getOptionLabel={(customer) => customer.name}
          onChange={(e, selectedCustomer) => {
            setReceiver(selectedCustomer);
          }}
          value={receiver}
        />
        <TextField
          type="number"
          label="Amount"
          variant="outlined"
          sx={{ width: 300, marginTop: 2 }}
          value={amount}
          onChange={(event) => {
            setAmount(parseInt(event.target.value, 10));
          }}
        />
        <Button variant="outlined" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};
