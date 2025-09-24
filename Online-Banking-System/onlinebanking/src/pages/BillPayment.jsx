// src/pages/BillPayment.jsx
import React, { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import api from "../api"; // 👈 axios instance

const BillPayment = () => {
  const [billType, setBillType] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!billType || !accountNumber || !amount) {
      setError("Please fill all fields");
      return;
    }

    try {
      // 👇 call backend API
      await api.post("/bills/pay", {
        billType,
        accountNumber,
        amount: parseFloat(amount),
      });

      setError("");
      setSuccess(`Paid ₹${amount} for ${billType} successfully`);
      setBillType("");
      setAccountNumber("");
      setAmount("");
    } catch (err) {
      setSuccess("");
      setError("Bill payment failed. Please try again.");
    }
  };

  return (
    <div className="page-container">
      <Card title="Bill Payment">
        {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}
        {success && (
          <p style={{ color: "green", fontSize: "0.9rem" }}>{success}</p>
        )}

        <form onSubmit={handlePayment}>
          <Input
            label="Bill Type (Electricity, Water, Mobile, DTH, etc.)"
            value={billType}
            onChange={(e) => setBillType(e.target.value)}
            required
          />
          <Input
            label="Account / Consumer Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
          <Input
            label="Amount (₹)"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <Button type="submit">Pay Bill</Button>
        </form>
      </Card>
    </div>
  );
};

export default BillPayment;
