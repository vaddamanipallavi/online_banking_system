import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import api from "../api"; // 👈 axios instance

const Dashboard = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userName = storedUser?.name || "User";

  const [balance, setBalance] = useState("Loading...");
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch account balance
    const fetchBalance = async () => {
      try {
        const res = await api.get(`/accounts/${storedUser?.id}/balance`);
        setBalance(`₹ ${res.data.balance.toLocaleString()}`);
      } catch (err) {
        setBalance("Unable to fetch balance");
      }
    };

    // Fetch recent transactions
    const fetchTransactions = async () => {
      try {
        const res = await api.get(`/transactions/recent/${storedUser?.id}`);
        setRecentTransactions(res.data);
      } catch (err) {
        setError("Failed to load transactions.");
      }
    };

    if (storedUser?.id) {
      fetchBalance();
      fetchTransactions();
    }
  }, [storedUser?.id]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      <NavBar />
      <div className="page-container">
        <Card title={`Welcome, ${userName}!`}>
          <p>You are logged in to your online banking dashboard.</p>
          <Button onClick={handleLogout}>Logout</Button>
        </Card>

        <Card title="Account Balance">
          <h2>{balance}</h2>
        </Card>

        <Card title="Quick Actions">
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button onClick={() => navigate("/transfer")}>Transfer Funds</Button>
            <Button onClick={() => navigate("/bills")}>Pay Bills</Button>
            <Button onClick={() => navigate("/transactions")}>
              View Transactions
            </Button>
            <Button onClick={() => navigate("/profile")}>
              Profile Settings
            </Button>
          </div>
        </Card>

        <Card title="Recent Transactions">
          {error && <p style={{ color: "red" }}>{error}</p>}
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left" }}>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.length > 0 ? (
                recentTransactions.map((tx) => (
                  <tr key={tx.id} style={{ borderTop: "1px solid #ddd" }}>
                    <td>{tx.date}</td>
                    <td>{tx.description}</td>
                    <td>{tx.amount}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center" }}>
                    No recent transactions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
