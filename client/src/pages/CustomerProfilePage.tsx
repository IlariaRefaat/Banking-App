import { Container, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router";
import { getCustomer } from "../firebase/customers";
import { Customer } from "../models/Customer";
export const CustomerProfilePage = () => {
  const [customer, setCustomer] = React.useState<Customer | null>(null);
  const { id } = useParams();

  React.useEffect(() => {
    const init = async () => {
      if (id) {
        const _customer = await getCustomer(id);
        setCustomer(_customer);
      }
    };
    init();
  }, [id]);
  if (!customer) {
    return null;
  }

  return (
    <Container>
      <Typography variant="h4">{customer.name}</Typography>
      <Typography variant="subtitle1">Email: {customer.email}</Typography>
      <Typography variant="body1">
        Current Balance: {customer.currentBalance}
      </Typography>
    </Container>
  );
};
