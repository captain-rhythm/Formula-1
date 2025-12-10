import React, { useState, useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';

const Order = () => {
  const product = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
    address: '',
    phone: '',
    quantity: 1,
    cardNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate required fields
    if (!orderData.name || !orderData.email || !orderData.address || !orderData.phone || !orderData.quantity || !orderData.cardNumber) {
      alert('Please fill all fields');
      setLoading(false);
      return;
    }

    // Simulate order submission
    setTimeout(() => {
      alert('Order placed successfully!');
      setLoading(false);
      navigate('/products');
    }, 1500);
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600">Loading order information...</p>
      </div>
    );
  }

  const totalPrice = (product.price * orderData.quantity).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Complete Your Order</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={orderData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={orderData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={orderData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Address</h2>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Address</label>
                  <textarea
                    name="address"
                    value={orderData.address}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Quantity Selection */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Details</h2>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Quantity</label>
                  <div className="flex items-center border border-gray-300 rounded-lg w-32">
                    <button
                      type="button"
                      onClick={() => setOrderData(prev => ({ ...prev, quantity: Math.max(1, prev.quantity - 1) }))}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      −
                    </button>
                    <span className="px-6 py-2">{orderData.quantity}</span>
                    <button
                      type="button"
                      onClick={() => setOrderData(prev => ({ ...prev, quantity: prev.quantity + 1 }))}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Information</h2>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={orderData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold disabled:opacity-50"
              >
                {loading ? 'Processing Order...' : 'Confirm Order'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-lg p-8 h-fit sticky top-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>

            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="flex gap-4 mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 object-contain rounded"
                />
                <div>
                  <p className="font-medium text-gray-800 text-sm">{product.title.substring(0, 30)}...</p>
                  <p className="text-gray-600 text-sm mt-2">${product.price}</p>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal ({orderData.quantity} item{orderData.quantity > 1 ? 's' : ''}):</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax:</span>
                <span>${(totalPrice * 0.1).toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
              <span>Total:</span>
              <span className="text-blue-600">${(parseFloat(totalPrice) + (totalPrice * 0.1)).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;