import * as React from "react";

import { Customer } from "../models/Customer";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTransfer } from "../firebase/transfers";
import {
  onCustomersUpdate,
  updateCustomerBalance,
} from "../firebase/customers";
import { Grid } from "@mui/material";

export const TransferForm = () => {
  const [sender, setSender] = React.useState<Customer | null>(null);
  const [receiver, setReceiver] = React.useState<Customer | null>(null);
  const [amount, setAmount] = React.useState<number | null>(0);
  const [customers, setCustomers] = React.useState<Customer[]>([]);

  React.useEffect(() => {
    onCustomersUpdate(setCustomers);
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (sender !== null && receiver !== null && amount !== null && amount > 0) {
      createTransfer(sender, receiver, amount);
      updateCustomerBalance(sender, sender.currentBalance - amount);
      updateCustomerBalance(receiver, receiver.currentBalance + amount);
    } else {
      console.log("error, data is not correct");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Autocomplete
            disablePortal
            id="sender-autocomplete"
            options={customers}
            renderInput={(params) => <TextField {...params} label="Sender" />}
            getOptionLabel={(customer) => customer.name}
            onChange={(e, selectedCustomer) => {
              setSender(selectedCustomer);
              if (
                amount !== null &&
                selectedCustomer !== null &&
                selectedCustomer.currentBalance < amount
              ) {
                setAmount(selectedCustomer.currentBalance);
              }
            }}
            value={sender}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            disablePortal
            id="receiver-autocomplete"
            options={customers}
            renderInput={(params) => <TextField {...params} label="Receiver" />}
            getOptionLabel={(customer) => customer.name}
            onChange={(e, selectedCustomer) => {
              setReceiver(selectedCustomer);
            }}
            value={receiver}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="number"
            label="Amount"
            variant="outlined"
            fullWidth
            value={amount === null ? "" : amount}
            onChange={(event) => {
              const amount = parseInt(event.target.value, 10);
              if (isNaN(amount)) {
                setAmount(null);
              } else {
                setAmount(amount);
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="outlined" type="submit" sx={{ minWidth: 120 }}>
              Send
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};
