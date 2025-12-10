import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 via-yellow-400 to-red-700 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)'}}></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-6xl font-black mb-6">Race in the Blood</h1>
          <p className="text-2xl mb-8 font-bold text-black">
            Your trusted marketplace for top-quality merchandise
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/products"
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition text-lg"
            >
              View Merchandise
            </Link>
            {!user && (
              <Link
                to="/login"
                className="bg-transparent border-3 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-700 transition text-lg"
              >
                Sign In
              </Link>
            )}
          </div>
          {/* Desktop banner image */}
          <img src="/assets/banner-hero.svg" alt="FORMULA 1 banner" className="hidden md:block absolute right-6 top-6 h-64 w-auto rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">Why Choose FORMULA 1</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-800 p-6 rounded-lg border-2 border-red-700">
              <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">World Champions</h3>
              <p className="text-gray-300">
                Official merchandise from the greatest motorsport series in the world.
              </p>
            </div>
            <div className="text-center bg-gray-800 p-6 rounded-lg border-2 border-yellow-400">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Premium Quality</h3>
              <p className="text-gray-300">
                High-performance gear and authentic F1 merchandise for true fans.
              </p>
            </div>
            <div className="text-center bg-gray-800 p-6 rounded-lg border-2 border-red-700">
              <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Fast & Secure</h3>
              <p className="text-gray-300">
                Lightning-fast delivery and secure checkout with multiple payment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20 px-4 border-t-4 border-yellow-400">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">Latest Merchandise</h2>
          <div className="text-center">
            <p className="text-gray-300 mb-8 text-lg">
              Exclusive F1 gear, apparel, and collectibles from your favorite teams and drivers
            </p>
            <Link
              to="/products"
              className="inline-block bg-red-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-800 transition text-lg"
            >
              Shop All Merchandise
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-700 via-yellow-400 to-red-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-6">Join the F1 Community</h2>
          <p className="text-xl mb-8 font-semibold text-black">
            {user
              ? `Welcome back, ${user.displayName}! Explore premium F1 merchandise.`
              : 'Join millions of F1 fans and get exclusive access to limited editions!'}
          </p>
          <Link
            to={user ? '/products' : '/register'}
            className="inline-block bg-black text-yellow-400 px-8 py-3 rounded-lg font-black hover:bg-gray-800 transition text-lg"
          >
            {user ? 'Shop Merchandise' : 'Create Account'}
          </Link>
        </div>
      </section>

      {/* Footer moved to shared Footer component */}
    </div>
  );
};

export default Home;