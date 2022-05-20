import { Typography } from "@mui/material";
import { TransfersList } from "../components/TransfersList";

export const HomePage = () => {
  return (
    <>
      <Typography variant="h3" sx={{ marginTop: 4, marginBottom: 4 }}>
        List of transfers
      </Typography>
      <TransfersList />
    </>
  );
};
