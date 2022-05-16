import React from "react";
import { NavigationBar } from "./components/NavigationBar";
import { TransfersList } from "./components/TransfersList";
import { HomePage } from "./pages/HomePage";
import { CssBaseline, Container, Typography } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="customers" element={<CustomersPage />} /> */}
          {/* <Route path="transfer" element={<TransferPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
