// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TransferFunds from "./pages/TransferFunds";
import BillPayment from "./pages/BillPayment";
import TransactionHistory from "./pages/TransactionHistory";
import ProfileSettings from "./pages/ProfileSettings";
import "./styles/global.css"; // apply your global design

function App() {
  const isLoggedIn = localStorage.getItem("user");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/transfer" element={isLoggedIn ? <TransferFunds /> : <Navigate to="/login" />} />
        <Route path="/bills" element={isLoggedIn ? <BillPayment /> : <Navigate to="/login" />} />
        <Route path="/transactions" element={isLoggedIn ? <TransactionHistory /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isLoggedIn ? <ProfileSettings /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
