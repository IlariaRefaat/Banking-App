import { TransferForm } from "../components/TransferForm";
import { Container, Typography } from "@mui/material";

export const MakeATransferPage = () => {
  return (
    <Container>
      <Typography variant="h3">Make a Transfer</Typography>
      <TransferForm />
    </Container>
  );
};
