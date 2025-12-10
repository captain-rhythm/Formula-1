import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';

const Details = () => {
  const product = useLoaderData();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600">Loading product details...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Add to cart logic
    alert(`Added ${quantity} item(s) to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:underline mb-6"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-8">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-gray-100 rounded-lg p-8">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-96 max-w-full object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
              
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Category:</span> {product.category}
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                <span className="font-semibold">Description:</span> {product.description}
              </p>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-4xl font-bold text-blue-600 mb-2">${product.price}</p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="text-gray-600">(128 reviews)</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="font-semibold">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="px-6 py-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold mb-3"
              >
                Add to Cart
              </button>

              <Link to={`/products/order/${product.id}`} className="block w-full">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
          <Link to="/products" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;