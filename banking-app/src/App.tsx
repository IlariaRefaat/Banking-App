import React from "react";
import { NavigationBar } from "./components/NavigationBar";
import { TransfersList } from "./components/TransfersList";
import { CssBaseline, Container, Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavigationBar />
      <Container>
        <Typography variant="h3">List of transactions</Typography>
        <TransfersList />
      </Container>
    </div>
  );
}

export default App;
