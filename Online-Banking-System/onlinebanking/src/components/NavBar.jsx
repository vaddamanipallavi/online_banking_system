import React from "react";
import "../styles/Navbar.css"; 
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-links">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/transfer">Transfer</Link>
      <Link to="/transactions">Transactions</Link>
      <Link to="/bills">Bills</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login" style={{ color: "red" }}>Logout</Link>
    </div>
  );
};

export default NavBar;
