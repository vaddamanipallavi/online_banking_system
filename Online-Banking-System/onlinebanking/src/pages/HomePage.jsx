import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/2/26/SBI-logo.svg" alt="SBI Logo" />
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">Products &amp; Services</a>
          <a href="#">How Do I (Help)</a>
          <a href="#">Manage Debit Card E-Mandate</a>
          <a href="#">Contact Us</a>
        </nav>
        <div className="lang-selector">
          <select>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
      </header>

      {/* Banner */}
      <section className="banner">
        <div className="banner-content">
          <img className="banner-img" src="https://cdn-icons-png.flaticon.com/512/4254/4254196.png" alt="Online Banking" />
          <div>
            <h1>Personal Banking</h1>
            <p className="banner-links">
              <a href="#">RBI Limited Liability Policy</a> | 
              <a href="#">Privacy Statement</a> | 
              <a href="#">Disclosure</a> | 
              <a href="#">Terms of Service</a>
            </p>
            <button className="login-btn">CONTINUE TO LOGIN</button>
            <p className="otp-text">Dear Customer, OTP based login is introduced for added security</p>
          </div>
        </div>
      </section>

      {/* Security Tips */}
      <section className="tips-section">
        <div className="tip always">
          <span role="img" aria-label="green smile">😊</span>
          <strong>ALWAYS</strong>
          <p>keep your computer free of malware</p>
        </div>
        <div className="tip always">
          <span role="img" aria-label="green smile">😊</span>
          <strong>ALWAYS</strong>
          <p>change your passwords periodically</p>
        </div>
        <div className="tip never">
          <span role="img" aria-label="red sad">😡</span>
          <strong>NEVER</strong>
          <p>respond to any communication seeking your passwords</p>
        </div>
        <div className="tip never">
          <span role="img" aria-label="red sad">😡</span>
          <strong>NEVER</strong>
          <p>reveal your passwords or card details to anyone</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>FOR YOUR OWN SECURITY</p>
      </footer>
    </div>
  );
}

export default HomePage;
