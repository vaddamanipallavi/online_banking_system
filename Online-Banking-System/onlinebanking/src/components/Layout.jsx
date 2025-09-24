import React from "react";
import NavBar from "./NavBar";
import "../styles/layout.css"; // apply your global design
const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* --- TOP HEADER --- */}
      <header className="header">
        <div className="logo">Online Banking</div>
        <NavBar />   {/* ✅ directly renders nav-links */}
      </header>
      <section className="banner">
        <div className="banner-text">
          <h1>Personal Banking</h1>
          <p>Secure • Convenient • Reliable</p>
        </div>
        {children}
      </section>

      {/* --- FOOTER --- */}
      
      <footer className="security-tips">
        <div className="security-card success">
          <strong>ALWAYS</strong>
          <p>Keep your computer free of malware</p>
        </div>
        <div className="security-card success">
          <strong>ALWAYS</strong>
          <p>Change your passwords periodically</p>
        </div>
        <div className="security-card danger">
          <strong>NEVER</strong>
          <p>Respond to any communication seeking your passwords</p>
        </div>
        <div className="security-card danger">
          <strong>NEVER</strong>
          <p>Reveal your passwords or card details to anyone</p>
        </div>
      </footer>
    </div>
   
  );
};

export default Layout;
