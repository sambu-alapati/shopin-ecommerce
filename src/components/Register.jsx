import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(u => u.email === email)) {
      alert('Email already registered');
      return;
    }

    const newUser = { name, email, password };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    localStorage.setItem('loggedInUser', JSON.stringify(newUser));
    window.dispatchEvent(new Event('loginStatusChanged'));
    navigate('/');
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <form className="border p-4 rounded shadow" style={{ width: '300px' }} onSubmit={handleRegister}>
        <h4 className="mb-4 text-center">Register</h4>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text" className="form-control"
            value={name} onChange={(e) => setName(e.target.value)} required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email" className="form-control"
            value={email} onChange={(e) => setEmail(e.target.value)} required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password" className="form-control"
            value={password} onChange={(e) => setPassword(e.target.value)} required
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">Register</button>
      </form>
    </div>
  );
}
