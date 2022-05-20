import { CustomersList } from "../components/CustomersList";
import { Container, Paper, Typography } from "@mui/material";
export const CustomersPage = () => {
  return (
    <Container>
      <Typography variant="h3" sx={{ marginTop: 4, marginBottom: 4 }}>
        List of Customers
      </Typography>
      <Paper>
        <CustomersList />
      </Paper>
    </Container>
  );
};
