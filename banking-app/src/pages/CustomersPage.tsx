import { CustomersList } from "../components/CustomersList";
import { Container, Typography } from "@mui/material";
export const CustomersPage = () => {
  return (
    <Container>
      <Typography variant="h3">List of Customers</Typography>
      <CustomersList />
    </Container>
  );
};
