import React, { useState } from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

const ProfileSettings = () => {
  const [name, setName] = useState('Pallavi User');
  const [email, setEmail] = useState('pallavi@example.com');
  const [phone, setPhone] = useState('9876543210');
  const [password, setPassword] = useState('');
  const [kyc, setKyc] = useState('');
  const [message, setMessage] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    setMessage('Profile updated successfully (simulation)');
  };

  return (
    <div className="page-container">
      <Card title="Profile Settings">
        {message && <p style={{ color: 'green', fontSize: '0.9rem' }}>{message}</p>}
        <form onSubmit={handleSave}>
          <Input
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <Input
            label="New Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="KYC Details (Aadhaar / PAN)"
            value={kyc}
            onChange={(e) => setKyc(e.target.value)}
          />
          <Button type="submit">Save Changes</Button>
        </form>
      </Card>
    </div>
  );
};

export default ProfileSettings;
