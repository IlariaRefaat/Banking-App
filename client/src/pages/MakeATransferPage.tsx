import { Paper, Typography } from "@mui/material";
import { TransferForm } from "../components/TransferForm";

export const MakeATransferPage = () => {
  return (
    <>
      <Typography variant="h3" sx={{ marginTop: 4, marginBottom: 4 }}>
        Make a Transfer
      </Typography>
      <Paper sx={{ padding: 4 }}>
        <TransferForm />
      </Paper>
    </>
  );
};
