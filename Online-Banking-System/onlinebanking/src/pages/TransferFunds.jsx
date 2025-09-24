// src/pages/TransferFunds.jsx
import React, { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import api from "../api"; // 👈 axios instance

const TransferFunds = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleTransfer = async (e) => {
    e.preventDefault();

    if (!accountNumber || !ifsc || !amount) {
      setError("Please fill all fields");
      return;
    }

    try {
      // 👇 call backend API
      await api.post("/transactions/transfer", {
        recipientAccount: accountNumber,
        ifsc,
        amount: parseFloat(amount),
      });

      setError("");
      setSuccess(`Successfully transferred ₹${amount} to ${accountNumber}`);
      setAccountNumber("");
      setIfsc("");
      setAmount("");
    } catch (err) {
      setSuccess("");
      setError("Transfer failed. Please try again.");
    }
  };

  return (
    <div className="page-container">
      <Card title="Transfer Funds">
        {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}
        {success && (
          <p style={{ color: "green", fontSize: "0.9rem" }}>{success}</p>
        )}

        <form onSubmit={handleTransfer}>
          <Input
            label="Recipient Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
          <Input
            label="IFSC Code"
            value={ifsc}
            onChange={(e) => setIfsc(e.target.value)}
            required
          />
          <Input
            label="Amount (₹)"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <Button type="submit">Transfer</Button>
        </form>
      </Card>
    </div>
  );
};

export default TransferFunds;
