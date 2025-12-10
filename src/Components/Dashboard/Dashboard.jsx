import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Link } from 'react-router';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome, {user?.displayName}!</h1>

        {/* User Profile Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">User Profile</h2>
            <div className="flex gap-6 items-center mb-8">
              {user?.photoURL && (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-blue-600"
                />
              )}
              <div>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Name:</span> {user?.displayName || 'Not set'}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Email:</span> {user?.email}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">UID:</span> {user?.uid.substring(0, 10)}...
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Member Since</p>
                <p className="text-2xl font-bold text-blue-600">
                  {new Date(user?.metadata?.creationTime).toLocaleDateString()}
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Last Sign In</p>
                <p className="text-2xl font-bold text-green-600">
                  {new Date(user?.metadata?.lastSignInTime).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/products" className="block text-blue-600 hover:underline">
                  → Browse Products
                </Link>
                <Link to="/about" className="block text-blue-600 hover:underline">
                  → About Us
                </Link>
                <Link to="/contact" className="block text-blue-600 hover:underline">
                  → Contact Support
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg shadow-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Account Status</h3>
              <p className="text-sm opacity-90">Active</p>
              <div className="mt-4">
                <div className="w-full bg-blue-300 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
            <p className="text-gray-600">Orders Placed</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">$450</div>
            <p className="text-gray-600">Total Spent</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">8</div>
            <p className="text-gray-600">Saved Items</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">5</div>
            <p className="text-gray-600">Reviews Given</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <p className="text-gray-800 font-medium">Placed an order</p>
              <p className="text-gray-600 text-sm">Today at 2:30 PM</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4 py-2">
              <p className="text-gray-800 font-medium">Updated profile</p>
              <p className="text-gray-600 text-sm">Yesterday at 10:15 AM</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4 py-2">
              <p className="text-gray-800 font-medium">Reviewed a product</p>
              <p className="text-gray-600 text-sm">2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
