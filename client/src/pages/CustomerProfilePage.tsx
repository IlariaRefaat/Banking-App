import { Card, CardContent, Container, Paper, Typography } from "@mui/material";
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
    <div style={{ marginTop: 16 }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Customer
          </Typography>
          <Typography variant="h5" component="div">
            {customer.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {customer.email}
          </Typography>
          <Typography variant="body2">
            Current Balance:
            <br />
            {customer.currentBalance}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
