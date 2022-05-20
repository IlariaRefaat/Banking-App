import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { onCustomersUpdate } from "../firebase/customers";
import { Customer } from "../models/Customer";

export const CustomersList = () => {
  const [customers, setCustomers] = React.useState<Customer[]>([]);

  React.useEffect(() => {
    onCustomersUpdate(setCustomers);
  }, []);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {customers.map((customer) => {
        return (
          <ListItem key={customer.id}>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText primary={customer.name} secondary={customer.email} />
          </ListItem>
        );
      })}
    </List>
  );
};
