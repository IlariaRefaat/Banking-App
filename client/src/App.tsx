import { CssBaseline } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { CustomersPage } from "./pages/CustomersPage";
import { HomePage } from "./pages/HomePage";
import { MakeATransferPage } from "./pages/MakeATransferPage";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/transfer" element={<MakeATransferPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
