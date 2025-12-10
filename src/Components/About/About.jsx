import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black text-white mb-4">🏁 About FORMULA 1 🏁</h1>
        <p className="text-yellow-400 text-xl font-semibold mb-8">The Ultimate Destination for Official Merchandise</p>

        <div className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 border-2 border-red-700">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            FORMULA 1 is dedicated to providing authentic, premium merchandise from the world's most prestigious motorsport series. We leverage modern technologies like Firebase for secure authentication and React for an intuitive user interface. Our goal is to deliver genuine F1 gear to passionate fans worldwide with speed, security, and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 border-2 border-yellow-400">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Our Values</h3>
            <ul className="space-y-3 text-gray-300">
              <li>🏆 Racing Excellence & Heritage</li>
              <li>✓ Authentic Official Merchandise</li>
              <li>✓ Premium Quality & Durability</li>
              <li>✓ Fast & Secure Delivery</li>
              <li>✓ Fan Community & Support</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg p-8 border-2 border-red-700">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Why Choose FORMULA 1?</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Official Licensed Products</li>
              <li>✓ Secure Firebase Authentication</li>
              <li>✓ Multiple Login Options (Email, Google, GitHub)</li>
              <li>✓ Real-time Inventory Updates</li>
              <li>✓ Protected User Accounts & Orders</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-8 border-2 border-yellow-400">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Our Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-white mb-2">Frontend</h4>
              <p className="text-gray-400 text-sm">React 19, React Router v7, Tailwind CSS, Vite</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Backend & Auth</h4>
              <p className="text-gray-400 text-sm">Firebase (Email, Google, GitHub Authentication)</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">API & Data</h4>
              <p className="text-gray-400 text-sm">FakeStore API for dynamic product catalog</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;