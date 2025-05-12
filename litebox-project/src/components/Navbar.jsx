import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/litebox-logo.png';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    setIsLoggedIn(!!userToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <img
          src={Logo}
          alt="LiteBox Logo"
          className="h-10 w-auto hover:scale-110 transition-transform duration-300"
        />
      </Link>
      <div className="space-x-4 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/compress" className="hover:text-blue-500">Compress</Link>
        <Link to="/decompress" className="hover:text-blue-500">Decompress</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="hover:text-blue-500">Login</Link>
            <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          </>
        ) : (
          <button 
            onClick={handleLogout} 
            className="hover:text-blue-500"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
