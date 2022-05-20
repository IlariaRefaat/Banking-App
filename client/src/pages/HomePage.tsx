import { TransfersList } from "../components/TransfersList";
import { Container, Typography } from "@mui/material";

export const HomePage = () => {
  return (
    <Container>
      <Typography variant="h3">List of transfers</Typography>
      <TransfersList />
    </Container>
  );
};
