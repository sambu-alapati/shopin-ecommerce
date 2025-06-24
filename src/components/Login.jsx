import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
      window.dispatchEvent(new Event('loginStatusChanged'));
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <form className="border p-4 rounded shadow" style={{ width: '300px' }} onSubmit={handleLogin}>
        <h4 className="mb-4 text-center">Login</h4>

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

        <button type="submit" className="btn btn-dark w-100">Login</button>
      </form>
    </div>
  );
}
