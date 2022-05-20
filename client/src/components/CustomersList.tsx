import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { customers } from "../mocks/customers";

export const CustomersList = () => {
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
