import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';

const Navigation = () => {
  const { user, signOut, loading } = useContext(AuthContext);

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/f1-logo.svg" alt="FORMULA 1" className="h-12 w-auto hidden" />
            <span className="self-center text-3xl font-black whitespace-nowrap dark:text-white text-red-700">FORMULA 1</span>
          </Link>
          
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{user.displayName || 'User'}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                </div>
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-red-700"
                  />
                )}
                <button
                  onClick={handleLogout}
                  disabled={loading}
                  className="text-sm text-red-700 dark:text-red-400 hover:underline font-semibold disabled:opacity-50"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-sm text-red-600 dark:text-red-500 hover:underline font-semibold">
                  Login
                </Link>
                <Link to="/register" className="text-sm bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition font-semibold">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm flex-wrap">
              <li>
                <Link to="/" className="text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition">
                  Contact
                </Link>
              </li>
              {user && (
                <li>
                  <Link to="/dashboard" className="text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition font-semibold">
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;