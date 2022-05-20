import { Container, CssBaseline } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { CustomersPage } from "./pages/CustomersPage";
import { HomePage } from "./pages/HomePage";
import { MakeATransferPage } from "./pages/MakeATransferPage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/config";
import { CustomerProfilePage } from "./pages/CustomerProfilePage";

function App() {
  // Initialize Firebase
  initializeApp(firebaseConfig);
  return (
    <div className="App">
      <CssBaseline />

      <BrowserRouter>
        <NavigationBar />
        <div
          style={{
            display: "flex",
            height: "100vh",
            backgroundColor: "#e0e0e0",
          }}
        >
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/customers" element={<CustomersPage />} />
              <Route path="/customers/:id" element={<CustomerProfilePage />} />
              <Route path="/transfer" element={<MakeATransferPage />} />
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
