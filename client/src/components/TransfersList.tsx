import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { onTransferUpdate } from "../firebase/transfers";
import { Transfer } from "../models/Transfer";

export const TransfersList = () => {
  const [transfers, setTransfer] = React.useState<Transfer[]>([]);

  React.useEffect(() => {
    onTransferUpdate(setTransfer);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sender</TableCell>
            <TableCell align="right">Reciever</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transfers.map((transfer) => (
            <TableRow key={transfer.id}>
              <TableCell component="th" scope="row">
                {transfer.sender.name}
              </TableCell>
              <TableCell align="right">{transfer.receiver.name}</TableCell>
              <TableCell align="right">{transfer.amount}</TableCell>
              <TableCell align="right">{transfer.initiatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
