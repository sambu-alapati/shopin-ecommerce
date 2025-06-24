import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const updateUser = () => {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      setUser(loggedInUser);
    };

    updateUser(); // run initially
    window.addEventListener('loginStatusChanged', updateUser);

    return () => {
      window.removeEventListener('loginStatusChanged', updateUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    window.dispatchEvent(new Event('loginStatusChanged'));
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center w-100">

        <Link className="navbar-brand" to="/">Shopin</Link>

        <div className="d-flex justify-content-center flex-grow-1">
          <ul className="navbar-nav d-flex flex-row gap-3 mb-0">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/store">Store</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="d-flex align-items-center gap-3">
          {user ? (
            <div className="dropdown">
              <button
                className="btn btn-outline-light btn-sm dropdown-toggle"
                type="button"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user.name}
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li><span className="dropdown-item-text">Logged in as {user.name}</span></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item text-danger" onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          ) : (
            <>
              <Link className="nav-link text-white" to="/login">Login</Link>
              <Link className="nav-link text-white" to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
