import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import api from "../api"; // 👈 axios instance

const TransactionHistory = () => {
  const [search, setSearch] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");

  // Fetch transactions from backend on mount
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await api.get("/transactions");
        setTransactions(res.data);
      } catch (err) {
        setError("Failed to load transactions.");
      }
    };
    fetchTransactions();
  }, []);

  // Filter based on search
  const filtered = transactions.filter(
    (tx) =>
      tx.description.toLowerCase().includes(search.toLowerCase()) ||
      tx.date.includes(search)
  );

  return (
    <div className="page-container">
      <Card title="Transaction History">
        {error && <p style={{ color: "red" }}>{error}</p>}

        <Input
          label="Search by date or description"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <table className="transaction-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((tx) => (
                <tr key={tx.id}>
                  <td>{tx.date}</td>
                  <td>{tx.description}</td>
                  <td>{tx.amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: "center" }}>
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default TransactionHistory;
