import React from 'react';
import { Link } from 'react-router';

const Product = ({ pdt }) => {
  const { id, title, image, description, price } = pdt;
  
  const truncateDescription = (text, length = 100) => {
    return text && text.length > length ? text.substring(0, length) + '...' : text;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105 p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-3">{truncateDescription(description, 80)}</p>
      <p className="text-2xl font-bold text-blue-600 mb-4">${price}</p>

      <Link to={`/products/${id}`} className="w-full">
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Product;